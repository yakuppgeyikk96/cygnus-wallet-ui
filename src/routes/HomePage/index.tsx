import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import useWallet from "@/hooks/useWallet";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { getAccountInfo } = useWallet();

  const refreshPage = () => {
    console.log("refreshing page");
    window.location.reload();
  };

  useEffect(() => {
    getAccountInfo().then((res) => {
      console.log(res);
      if (!res?.keypair) navigate("/signup");
    });
  }, []);

  return (
    <PageLayout>
      <Button onClick={refreshPage}>Refresh</Button>
    </PageLayout>
  );
};

export default HomePage;
