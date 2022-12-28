import React from "react";
import { ScreenSize, useResponsiveness } from "./use-responsiveness";

interface YouTubeSegmentProps {
  embedId: string;
  title: string;
}

const YouTubeSegment = ({ embedId, title }: YouTubeSegmentProps) => {
  const screenSize = useResponsiveness();

  const style: React.CSSProperties =
    screenSize < ScreenSize.large
      ? { margin: "auto", width: "250px", height: "175px" }
      : { float: "right", width: "500px", height: "250px", marginLeft: "auto" };

  return (
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
      style={style}
    />
  );
};

export default YouTubeSegment;
