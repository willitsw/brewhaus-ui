import React from "react";
import { ScreenSize, useResponsiveness } from "./use-responsiveness";

interface ContentBlockProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const ContentBlock = ({ leftContent, rightContent }: ContentBlockProps) => {
  const screenSize = useResponsiveness();

  if (screenSize < ScreenSize.large) {
    return (
      <div className="flex flex-col gap-5 text-center my-4">
        <div>{leftContent}</div>
        <div>{rightContent}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between items-start gap-10 m-10">
      <div className="w-1/2 flex flex-col">{leftContent}</div>
      <div className="w-1/2 flex flex-col">{rightContent}</div>
    </div>
  );
};

export default ContentBlock;
