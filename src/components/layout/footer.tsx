import { Layout, Typography } from "antd";
import React from "react";
import { constants } from "../../constants";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
      }}
    >
      <div className="footer-container">
        <b>
          Brewhaus Bakery & Dog Bones
          <br />
          1623 Burney Lane Cincinnati OH 45230
        </b>
        <br />
        Non-profit 501(c)3 Charity
        <br />
        Serving Individuals With A Disability; EIN 47-1534402
        <br />
        <br />
        Please contact Brewhaus Bakery & Dog Bones for additional information,
        questions and/or concerns!
        <br />
        <Typography.Link href="mailto:lisa@brewhausdogbones.com">
          lisa@brewhausdogbones.com
        </Typography.Link>{" "}
        513.520.0310{" "}
        <Typography.Link href="http://www.brewhausdogbones.com">
          brewhausdogbones.com
        </Typography.Link>
        <br />
        <Typography.Link
          href={`${constants.imageUri}/brewhaus-terms.pdf`}
          target="_blank"
        >
          Copyright 2023 - Click Here for Terms and Conditions
        </Typography.Link>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
