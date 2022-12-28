import { Typography } from "antd";
import React from "react";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page = ({ title, children }: PageProps) => {
  return (
    <div className="m-4">
      <Typography.Title>{title}</Typography.Title>
      {children}
    </div>
  );
};

export default Page;
