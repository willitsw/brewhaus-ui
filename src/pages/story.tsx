import { Typography } from "antd";
import React from "react";
import Page from "../components/page";
import { constants } from "../constants";

const StoryPage = () => {
  return (
    <Page title="Story">
      <Typography.Text>
        Brewhaus Dog Bones are handcrafted, small batch, oven baked dog treats
        made from whole grains proudly sourced from local Cincinnati . Ky
        microbreweries. Currently, the following microbreweries support our
        mission by donating spent brewing grains and product sales in
        taprooms/brewing supply stores: Listermann’s, Mt. Carmel, Rivertown,
        Rhinegeist, Braxton, Wooden Cask, Taft’s Ale House, Old Firehouse,
        Fibonacci, Bad Tom Smith, Blank Slate, Municipal, Nine Giant, and
        Paradise Brewing/Supply. To see a full list of locations where Brewhaus
        Dog Bones are sold, visit our list of vendor locations!
      </Typography.Text>
      <Typography.Text>
        School districts in the Cincinnati . Ky area ( visit our list of
        participating school work-study programs!) participate in the program
        and use this start to finish non profit business model to help their
        students with disabilities (typically ages 18-22) learn valuable work
        and life skills. Students participate in all aspects of the program from
        planning/forecasting demand, making, baking, labeling and weighing bags,
        processing orders, attending community sales opportunities, calculating
        costs, counting money (both cash and credit) from sales and then making
        bank deposits. Teachers and vocational trainers assist in the process;
        each stage creates a chance to obtain hands-on experience in math,
        entrepreneurship, marketing, communication and teamwork. Additionally,
        Brewhaus has partnered with Graeter’s Ice Cream to create paid
        employment opportunities!
      </Typography.Text>
      <Typography.Text>
        The goal is to eventually have our own freestanding “Brew Bakery” and
        “Brewhaus Brew Bus” for supported employment and to continue as a
        vocational training site. Brewhaus hopes to create a micro industry in
        Cincinnati from the spent grains that will directly benefit people with
        disabilities.
      </Typography.Text>
      <Typography.Title level={4} className="text-center">
        100% non profit; ALL proceeds go back into growing our program for
        others to participate!
        <br />
        Best of all, your dog will love you for giving a Brewhaus Dog Treat!
      </Typography.Title>
      <img src={constants.imageUri + "/story.png"} className="text-center" />
    </Page>
  );
};

export default StoryPage;
