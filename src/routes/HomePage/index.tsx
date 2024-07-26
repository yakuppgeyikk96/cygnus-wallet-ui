import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <PageLayout>
      <Button onClick={handleNavigate}>Navigate to Signup</Button>
    </PageLayout>
  );
};

export default HomePage;
