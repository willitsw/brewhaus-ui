import React, { useEffect, useState } from "react";
import { Affix, Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { constants } from "../../constants";
import { ScreenSize, useResponsiveness } from "../use-responsiveness";

const Header = () => {
  const screenSize = useResponsiveness();
  const navigate = useNavigate();
  let location = useLocation();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys(location.pathname.split("/"));
  }, [location]);

  return (
    <Affix className="z-20">
      <Layout.Header
        style={{ height: 80 }}
        className="flex flex-row items-center"
      >
        <div
          className={`container mx-auto ${
            screenSize < ScreenSize.large ? null : "px-4"
          } flex flex-row items-center justify-between`}
        >
          <img src={`${constants.imageUri}/logo.png`} height={55} width={80} />
          <Menu
            style={
              screenSize < ScreenSize.large
                ? { width: 20, marginRight: 20 }
                : { width: 500 }
            }
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            selectedKeys={selectedKeys}
            onClick={(value) => {
              navigate(
                value.keyPath
                  .filter((key) => key !== "rc-menu-more")
                  .reverse()
                  .join("/")
              );
            }}
            items={[
              {
                key: "home",
                label: `Home`,
              },
              {
                key: "shop",
                label: `Shop`,
              },
              ,
              {
                key: "about",
                label: `About`,
                children: [
                  {
                    key: "story",
                    label: "Story",
                  },
                  {
                    key: "brew-crew",
                    label: "Brew Crew",
                  },
                  {
                    key: "participating-schools",
                    label: "Participating Schools",
                  },
                ],
              },
              {
                key: "where-to-buy",
                label: `Where To Buy`,
                children: [
                  {
                    key: "participating-breweries",
                    label: "Participating Breweries",
                  },
                  {
                    key: "vendor-locations",
                    label: "Vendor Locations",
                  },
                ],
              },
              // {
              //   key: "media",
              //   label: `Media`,
              // },
              {
                key: "contact",
                label: `Contact`,
              },
            ]}
          />
        </div>
      </Layout.Header>
    </Affix>
  );
};

export default Header;
