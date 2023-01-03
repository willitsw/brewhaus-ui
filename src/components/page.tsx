import { Typography } from "antd";
import React from "react";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page = ({ title, children }: PageProps) => {
  return (
    <div className="m-4 flex flex-col gap-5">
      <Typography.Title className="mt-5">{title}</Typography.Title>
      {children}
    </div>
  );
};

export default Page;
