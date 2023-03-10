import React, { useEffect, useState } from "react";
import { Affix, Button, Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { constants } from "../../constants";
import { ScreenSize, useResponsiveness } from "../use-responsiveness";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useShopify } from "../shopify-provider";

const Header = () => {
  const screenSize = useResponsiveness();
  const navigate = useNavigate();
  let location = useLocation();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const { checkout, cartCount } = useShopify();

  useEffect(() => {
    setSelectedKeys(location.pathname.split("/"));
  }, [location]);

  return (
    <Affix className="z-20">
      <Layout.Header
        style={{ height: 92, boxShadow: "0 4px 10px rgb(185, 185, 185)" }}
        className="flex flex-row items-center"
      >
        <div
          className={`container mx-auto ${
            screenSize < ScreenSize.large ? null : "px-4"
          } flex flex-row items-center justify-between`}
        >
          <a id="logo" href="/">
            <img
              id="logo"
              src={`${constants.imageUri}/logo.png`}
              height={55}
              width={80}
            />
          </a>

          <div className="flex flex-row justify-end items-center">
            <Menu
              style={
                screenSize < ScreenSize.large
                  ? { width: 20, marginRight: 20 }
                  : { width: 550 }
              }
              theme="dark"
              mode="horizontal"
              aria-expanded={screenSize >= ScreenSize.large}
              defaultSelectedKeys={["home"]}
              selectedKeys={selectedKeys}
              onClick={(value) => {
                if (value.key === "donate") {
                  window.open(
                    "https://www.paypal.com/donate/?hosted_button_id=62NHVY59ESVAC"
                  );
                } else {
                  navigate(
                    value.keyPath
                      .filter((key) => key !== "rc-menu-more")
                      .reverse()
                      .join("/")
                  );
                }
              }}
              items={[
                {
                  key: "home",
                  label: `Home`,
                },
                {
                  key: "donate",
                  label: `Donate`,
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
                    {
                      key: "testimonials",
                      label: "Testimonials",
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
            {cartCount >= 1 && (
              <Button
                onClick={checkout}
                disabled={cartCount < 1}
                icon={<ShoppingCartOutlined className="mr-3" />}
                type="ghost"
                style={{
                  color: "rgba(255, 255, 255, 0.65)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {cartCount}
              </Button>
            )}
          </div>
        </div>
      </Layout.Header>
    </Affix>
  );
};

export default Header;
