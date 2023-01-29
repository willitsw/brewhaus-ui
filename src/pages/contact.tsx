import { Card, Descriptions, Typography } from "antd";
import React from "react";
import Page from "../components/page";

const ContactPage = () => {
  return (
    <Page title="Contact Us">
      <div className="flex flex-row justify-center">
        <Card style={{ maxWidth: 500 }}>
          <Descriptions column={1} title="Brewhaus Bakery Information">
            <Descriptions.Item label="Address">
              1623 Burney Lane, Cincinnati OH 45230
            </Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              513-520-0310
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              <Typography.Link href="mailto:lisa@brewhausdogbones.com">
                lisa@brewhausdogbones.com
              </Typography.Link>
            </Descriptions.Item>
            <Descriptions.Item label="Hours">
              Monday, Wednesday, and Friday from 9am-3pm
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
    </Page>
  );
};

export default ContactPage;
