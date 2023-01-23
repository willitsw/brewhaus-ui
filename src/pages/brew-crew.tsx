import { Carousel, Typography } from "antd";
import React from "react";
import Page from "../components/page";
import { constants } from "../constants";

const BrewCrewPage = () => {
  return (
    <Page title="Brew Crew">
      <Carousel autoplay>
        {[...Array(19).keys()].map((key) => (
          <div>
            <img
              src={`${constants.imageUri}/brew-crew/${key}.jpg`}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        ))}
      </Carousel>
      <Typography.Text>
        Brewhaus Dog Bones is a project based learning model used in young adult
        vocational programming for individuals with disabilities through several
        local school districts in the Cincinnati region. Students with
        disabilities have the option to defer their high school diploma until
        age 22. During this additional period of time, school districts are
        required to provide vocational training and work-study opportunities
        based on a student’s individual needs and work preferences. Students
        have community placements as well as their own in- house model, Brewhaus
        Dog Bones, to help teach work skills, understand a start to finish
        business model, promote communication and independence at all levels.
      </Typography.Text>
      <Typography.Text>
        Brewhaus Dog Bones works with area microbreweries to provide the core
        ingredient of our treats, spent brewery grains, and then our Brewcrew
        turns them into tasty dog treats! The students make, bake, package,
        label, weigh and sell the treats within their school districts, at
        participating microbrewery taprooms and other community vendors,
        including special community events/markets. It’s a win-win for everyone!
      </Typography.Text>
      <Typography.Title
        level={4}
        className="text-center mb-2"
        style={{ marginBottom: 0 }}
      >
        Buy our treats, support our students’ hard work and dedication, and help
        our program grow!
      </Typography.Title>
    </Page>
  );
};

export default BrewCrewPage;
