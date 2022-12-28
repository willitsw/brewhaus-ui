import { Layout, Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
      }}
    >
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
    </Layout.Footer>
  );
};

export default Footer;
