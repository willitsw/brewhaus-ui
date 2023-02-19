import { List, Typography } from "antd";
import React from "react";
import Page from "../components/page";

const schools = [
  "Cincinnati Public Schools – Woodward HS and Western Hills HS",
  "Clermont County Educational Service Center – Williamsburg",
  "Milford Schools",
  "Sycamore Community Schools",
  "Madeira City Schools",
  "Princeton City Schools",
  "Northwest Local School District",
  "Ross Local School District",
  "Monroe High School",
  "Conner High School;  Ryle High School (Boone Co Schools, Ky)",
  "Scott High School - Taylor Mill, KY (Kenton Co Schools)",
  "New Richmond Exempted Village School District",
  "Mariemont City School District",
  "Live Oaks Vocational School",
  "Indian Hill Exempted Village School District",
  "Mason City Schools",
  "Oak Hills Local School District",
  "Pathways - Hamilton Co Educational Service Center",
  "Butler Tech Career Center",
  "Hamilton High School",
  "Highland Hts HS - Ft Thomas, Ky (Ft. Thomas Schools)",
];

const ParticipatingSchoolsPage = () => {
  return (
    <Page title="Participating Schools">
      <Typography.Title
        level={4}
        className="text-center mb-2"
        style={{ marginBottom: 0 }}
      >
        Brewhaus Dog Bones Partner School Districts
      </Typography.Title>
      <Typography.Title
        level={5}
        className="text-center mt-2"
        style={{ marginTop: 0 }}
      >
        All supplies, ingredients, support and T-shirts provided at no charge as
        part of our mission to support creative social enterprise and vocational
        training
      </Typography.Title>
      <div className="flex flex-row flex-wrap justify-between items-start">
        <List
          className="max-w-lg mx-auto"
          dataSource={schools.sort().slice(0, Math.floor(schools.length / 2))}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text>{item}</Typography.Text>
            </List.Item>
          )}
        />
        <List
          className="max-w-lg mx-auto"
          dataSource={schools
            .sort()
            .slice(Math.floor(schools.length / 2), schools.length)}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text>{item}</Typography.Text>
            </List.Item>
          )}
        />
      </div>
    </Page>
  );
};

export default ParticipatingSchoolsPage;
