import { Button } from "@/components/ui/button";
import React from "react";

const Signup: React.FC = () => {
  const handleCreateWallet = () => {
    console.log("ABC");
  };

  const handleImportWallet = () => {
    console.log("Import wallet");
  };

  return (
    <div className="h-full w-full">
      <div className="h-full flex gap-4 flex-col justify-center items-center">
        <Button className="w-1/2" size="lg" onClick={handleCreateWallet}>
          Create new wallet
        </Button>
        <span className="text-font-dark dark:text-font-white">or</span>
        <Button className="w-1/2" size="lg" onClick={handleImportWallet}>
          Import an existing one
        </Button>
      </div>
    </div>
  );
};

export default Signup;
