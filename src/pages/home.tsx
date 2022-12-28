import { Carousel, Divider, Typography } from "antd";
import React from "react";
import ContentBlock from "../components/content-block";
import {
  ScreenSize,
  useResponsiveness,
} from "../components/use-responsiveness";
import YouTubeSegment from "../components/youtube-segment";
import { constants } from "../constants";
const HomePage = () => {
  const screenSize = useResponsiveness();
  const overlayImage =
    screenSize < ScreenSize.extraLarge ? "logo.png" : "emboss_logo.png";
  return (
    <div>
      <div>
        <div className="relative">
          <img
            src={`${constants.imageUri}/${overlayImage}`}
            className="absolute z-10 carousel-overlay"
          />
        </div>

        <Carousel autoplay>
          <img src={`${constants.imageUri}/brewhaus-group-1.png`} />
          <img src={`${constants.imageUri}/bourbon-all.jpg`} />
        </Carousel>
      </div>
      <Divider />
      <div className="p-4">
        <ContentBlock
          leftContent={
            <div>
              <Typography.Title level={2}>Brewhaus Bakery</Typography.Title>
              <Typography.Text>
                The Brewhaus Bakery Co. is a not-for-profit company dedicated to
                providing vocational training for young adults with
                disabilities. Brewhaus Dog Bones are always handcrafted, small
                batch, oven baked dog treats made from whole grains proudly
                sourced from local microbreweries.
              </Typography.Text>
            </div>
          }
          rightContent={
            <YouTubeSegment embedId="i_8GzmPsNNw" title="Brewhaus Bakery" />
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
