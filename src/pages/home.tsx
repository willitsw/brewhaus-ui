import { Button, Carousel, Divider, Typography } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import React from "react";
import ContentBlock from "../components/content-block";
import {
  ScreenSize,
  useResponsiveness,
} from "../components/use-responsiveness";
import YouTubeSegment from "../components/youtube-segment";
import { constants } from "../constants";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const screenSize = useResponsiveness();
  let height = 150;
  let width = 200;
  switch (screenSize) {
    case ScreenSize.small:
      height = 100;
      width = 150;
      break;
    case ScreenSize.medium:
      height = 200;
      width = 275;
      break;
    case ScreenSize.large:
      height = 250;
      width = 300;
      break;
    case ScreenSize.extraLarge:
      height = 375;
      width = 450;
      break;
    case ScreenSize.extraExtraLarge:
      height = 500;
      width = 650;
      break;
    default:
      break;
  }
  return (
    <div>
      <div>
        <div className="relative">
          <img
            src={`${constants.imageUri}/emboss_logo.png`}
            className="absolute z-10 carousel-overlay"
            height={height}
            width={width}
          />
        </div>

        <Carousel autoplay>
          <img
            src={`${constants.imageUri}/home-carousel/brewhaus-group-1.png`}
          />
          <img src={`${constants.imageUri}/home-carousel/dog.png`} />
          <img src={`${constants.imageUri}/home-carousel/eric-baking.jpg`} />
          <img src={`${constants.imageUri}/home-carousel/nat.jpg`} />
          <img src={`${constants.imageUri}/home-carousel/kids.jpg`} />
          <img src={`${constants.imageUri}/home-carousel/bakers2.jpg`} />
          <img src={`${constants.imageUri}/home-carousel/bags.jpg`} />
          <img src={`${constants.imageUri}/home-carousel/baker.jpg`} />
          <img src={`${constants.imageUri}/home-carousel/baking.jpg`} />
          <img src={`${constants.imageUri}/home-carousel/kids2.jpg`} />
        </Carousel>
      </div>
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
        <Divider />
        <ContentBlock
          rightContent={
            <div>
              <Typography.Title level={2}>
                Support Brewhaus Dog Bones
              </Typography.Title>
              <Typography.Text>
                Great news! If you shop on Kroger or any Kroger owned grocery
                store, you can now select Brewhaus to receive a from each
                purchase you make. Simply select Brewhaus from the list of
                available nonprofits at the link below. There’s no additional
                cost!
              </Typography.Text>
              <div className="p-5">
                <a
                  href="https://www.kroger.com/i/community/community-rewards"
                  target="_blank"
                >
                  <Button
                    className="bg-red flex flex-row items-center"
                    icon={<ShoppingOutlined />}
                    type="primary"
                    size="large"
                  >
                    Kroger Community Rewards
                  </Button>
                </a>
              </div>
            </div>
          }
          leftContent={
            <div>
              <Typography.Title level={2}>The Brew Crew</Typography.Title>
              <Typography.Text>
                Your purchase supports fun, meaningful project based learning
                and work skill development to inspire and enable people to
                improve their lives and the world around them. Thank you for
                supporting our mission! PAW IT FORWARD!
              </Typography.Text>
              <div className="p-5">
                <Button
                  className="bg-red"
                  type="primary"
                  size="large"
                  onClick={() => navigate("/about/brew-crew")}
                >
                  Find Out More!
                </Button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
