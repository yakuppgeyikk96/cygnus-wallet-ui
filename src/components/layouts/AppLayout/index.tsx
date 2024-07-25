import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="dark bg-background w-popup-width h-popup-height border">
      {children}
    </div>
  );
};

export default AppLayout;
