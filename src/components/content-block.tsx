import React from "react";

interface ContentBlockProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const ContentBlock = ({ leftContent, rightContent }: ContentBlockProps) => {
  return (
    <div className="flex flex-row justify-between gap-5">
      <div className="w-1/2">{leftContent}</div>
      <div>{rightContent}</div>
    </div>
  );
};

export default ContentBlock;
