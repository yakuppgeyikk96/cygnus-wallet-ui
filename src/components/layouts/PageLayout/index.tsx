import { ReactNode } from "react";

interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return <div className="h-full w-full">{children}</div>;
};

export default PageLayout;
