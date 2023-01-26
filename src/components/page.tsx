import { Typography } from "antd";
import React from "react";

interface PageProps {
  title: string;
  children: React.ReactNode;
  secondaryContent?: React.ReactNode;
}

const Page = ({ title, children, secondaryContent }: PageProps) => {
  return (
    <div className="m-4 flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center">
        <Typography.Title className="mt-5">{title}</Typography.Title>
        {secondaryContent ?? secondaryContent}
      </div>
      {children}
    </div>
  );
};

export default Page;
