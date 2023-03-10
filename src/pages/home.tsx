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

        <Carousel autoplay className="carousel">
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
              <Divider
                style={{
                  borderColor: "rgb(55, 55, 55)",
                  margin: 0,
                  padding: "0 2rem 0 2rem",
                }}
              >
                <Typography.Title level={1} id="welcome-to">
                  About Brewhaus Bakery & Dog Bones
                </Typography.Title>
              </Divider>
              <Typography.Text>
                Brewhaus Bakery Co. is a not-for-profit, 501c3 organization, to
                help individuals with disabilities have meaningful, learning &
                work opportunities. We offer wholesome, handcrafted, small batch
                dog treats made with spent grains (malted barley) from local
                craft breweries!
              </Typography.Text>
              <div className="p-5">
                <Button
                  className="bg-red flex flex-row items-center"
                  type="primary"
                  size="large"
                  onClick={() => navigate("/about/story")}
                >
                  Learn about uses of spent grains
                </Button>
              </div>
            </div>
          }
          rightContent={
            <div className="flex justify-center">
              <img
                src={constants.imageUri + "/home-page/bakers-with-barley.jpg"}
                style={{ height: 250, width: "auto" }}
              />
            </div>
          }
        />
        <Divider />
        <ContentBlock
          rightContent={
            <div>
              <Typography.Title level={2}>Fostering Community</Typography.Title>
              <Typography.Text>
                We’ve grown into a collaborative bake space to foster an
                inclusive environment and provide additional opportunities for
                skill development & growth. Our goal is to foster a fun,
                creative bake space where people and food businesses can thrive!
              </Typography.Text>
              <div className="p-5">
                <Button
                  className="bg-red flex flex-row items-center"
                  type="primary"
                  size="large"
                  onClick={() => navigate("/about/brew-crew")}
                >
                  Find out how to work with us!
                </Button>
              </div>
            </div>
          }
          leftContent={
            <div className="flex justify-center">
              <img
                src={constants.imageUri + "/home-page/kim-nat.jpg"}
                style={{ height: 250, width: "auto" }}
              />
            </div>
          }
        />
        <Divider />
        <ContentBlock
          leftContent={
            <div>
              <Typography.Title level={2}>
                Skills for the Future
              </Typography.Title>
              <Typography.Text>
                Our bakers have a start to finish business model that builds
                skills and confidence and creates opportunities for community
                engagement! Our platform is welcoming to all and has a positive
                impact through empowerment, partnership and outreach!
              </Typography.Text>
              <div className="p-5">
                <Button
                  className="bg-red flex flex-row items-center"
                  type="primary"
                  size="large"
                  onClick={() => navigate("/about/brew-crew")}
                >
                  Ask us how to get involved!
                </Button>
              </div>
            </div>
          }
          rightContent={
            <div className="flex justify-center">
              <img
                src={constants.imageUri + "/home-page/meg-eric-nat.jpg"}
                style={{ height: 250, width: "auto" }}
              />
            </div>
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
                Great news! If you shop at Kroger or any Kroger-owned grocery
                store, you can now select Brewhaus to receive a reward from each
                purchase you make. Simply select Brewhaus from the list of
                available nonprofits at the link below. There’s no additional
                cost!
              </Typography.Text>
              <div className="p-5">
                <a
                  className="items-center"
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
                Your purchase supports fun, meaningful, project-based learning,
                and work-skill development to inspire and enable people to
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
