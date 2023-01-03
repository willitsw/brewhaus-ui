import { Card, Divider, Typography } from "antd";
import React from "react";
import Page from "../components/page";
import { constants } from "../constants";

interface Brewery {
  logo: string;
  name: string;
  address: string;
  phone: string;
  link: string;
}

const breweries: Brewery[] = [
  {
    name: "Lagunitas Brewing Company",
    logo: "lagunitas.jpeg",
    address: "2607 W 17th St, Chicago, IL 60608",
    phone: "(773) 522-1308",
    link: "https://lagunitas.com/",
  },
  {
    name: "BrewDog USA",
    logo: "brewdog.jpeg",
    address: "96 Gender Rd, Canal Winchester, OH 43110",
    phone: "(614) 908-3051",
    link: "https://www.brewdog.com/usa/",
  },
  {
    name: "Great Lakes Brewing Company",
    logo: "greattlakes.jpeg",
    address: "2516 Market Ave. Cleveland Ohio 44113",
    phone: "(216) 771-4404",
    link: "https://www.greatlakesbrewing.com/",
  },
  {
    name: "Bad Tom Smith Brewing",
    logo: "batttomsmith.jpeg",
    address: "4720 Eastern Ave. Cincinnati OH, 45226",
    phone: "(513) 871-4677",
    link: "https://www.badtomsmithbrewing.com/",
  },
  {
    name: "Braxton Brewing",
    logo: "braxton.jpeg",
    address: "27 W 7th St, Covington, KY 41011",
    phone: "(859) 261-5600",
    link: "https://braxtonbrewing.com/",
  },
  {
    name: "Brink Brewing Co.",
    logo: "brink.jpeg",
    address: "5905 Hamilton Ave, Cincinnati, OH 45224",
    phone: "(513) 882-3334",
    link: "https://www.brinkbrewing.com/",
  },
  {
    name: "Fibonacci Brewing Co.",
    logo: "fibonnaci.jpeg",
    address: "1445 Compton Rd. Mt. Healthy OH, 45231",
    phone: "(513) 832-1422",
    link: "http://fibbrew.com/",
  },
  {
    name: "Fretboard Brewing Co.",
    logo: "fretboard.png",
    address: "5800 Creek Rd, Cincinnati, OH 45242",
    phone: "(513) 914-4677",
    link: "https://fretboardbrewing.com/",
  },
  {
    name: "Fifty West Brewing Co.",
    logo: "fiftywest.jpeg",
    address: "7605 Wooster Pike Cincinnati, OH 45227",
    phone: "(513) 834-8789",
    link: "https://fiftywestbrew.com/",
  },
  {
    name: "Listermann Brewing Co.",
    logo: "listermann.jpeg",
    address: "1621 Dana Ave. Cincinnati OH, 45207",
    phone: "(513) 731-1130",
    link: "https://www.listermannbrewing.com/",
  },
  {
    name: "Little Miami Brewing Co.",
    logo: "littlemiami.jpeg",
    address: "208 Mill St, Milford, OH 45150",
    phone: "(513) 713-1121",
    link: "https://www.littlemiamibrewing.com/",
  },
  {
    name: "March First Brewing",
    logo: "marchfirstbrewing.png",
    address: "7885 E Kemper Rd, Cincinnati, OH 45249",
    phone: "(513) 718-9173",
    link: "https://www.marchfirstbrewing.com/",
  },
  {
    name: "Mt. Carmel Brewing Co.",
    logo: "mtcarmel.jpeg",
    address: "Mt. Carmel Brewing Co.",
    phone: "(513) 240-2739",
    link: "https://www.mtcarmelbrewing.com/",
  },
  {
    name: "Municipal Brew Works",
    logo: "municipal.jpeg",
    address: "20 High St Box 19 Hamilton, OH 45011",
    phone: "(513) 642-2424",
    link: "https://www.municipal.beer/",
  },
  {
    name: "Nine Giant Brewing",
    logo: "ninegiantt.png",
    address: "6095 Montgomery Rd, Cincinnati, OH 45213",
    phone: "(513) 366-4550",
    link: "https://www.ninegiant.com/",
  },
  {
    name: "Paradise Brewing Supply",
    logo: "paradise.jpeg",
    address: "7766 Beechmont Ave. Cincinnati OH, 45255",
    phone: "(513) 232-7271",
    link: "https://www.paradisebrewingsupplies.com/",
  },
  {
    name: "Streetside Brewery",
    logo: "streetsidebrewery.png",
    address: "4003 Eastern Ave, Cincinnati, OH 45226",
    phone: "(513) 615-5877",
    link: "https://streetsidebrewery.com/",
  },
  {
    name: "16 Lots Brewing Co.",
    logo: "sixteenlotsbrewing.png",
    address: "753 Reading Rd, Mason, OH 45040",
    phone: "(513) 486-3672",
    link: "https://16lots.com/",
  },
  {
    name: "Taft’s Ale House",
    logo: "tafts.jpeg",
    address: "1429 Race Street, Over-The-Rhine",
    phone: "(513) 334-1393",
    link: "https://taftsbeer.com/",
  },
  {
    name: "West Side Brewing",
    logo: "westsidebrewing.jpeg",
    address: "3044 Harrison Ave, Cincinnati, OH 45211",
    phone: "(513) 661-2337",
    link: "https://westsidebrewing.com/",
  },
  {
    name: "Wooden Cask Brewing Company",
    logo: "woodencask.jpeg",
    address: "629 York St Newport, KY 41071",
    phone: "(859) 261-2172",
    link: "https://www.woodencask.com/",
  },
];

const ParticipatingBreweriesPage = () => {
  return (
    <Page title="Participating Breweries">
      <Typography.Title
        level={4}
        className="text-center mb-2"
        style={{ marginBottom: 0 }}
      >
        How far that little candle throws his beams! So shines a good deed in a
        weary world.
      </Typography.Title>
      <Typography.Title
        level={5}
        className="text-center mt-2"
        style={{ marginTop: 0 }}
      >
        – William Shakespeare, The Merchant of Venice -
      </Typography.Title>
      <Divider />
      <div className="flex flex-row gap-5 flex-wrap justify-center">
        {breweries
          .sort((a, b) => (b.name < a.name ? 1 : -1))
          .map((brewery) => (
            <Card
              title={
                <div className="text-center">
                  <a href={brewery.link} target="_blank">
                    {brewery.name}
                  </a>
                </div>
              }
              style={{ width: 300 }}
            >
              <a href={brewery.link} target="_blank">
                <div className="text-center flex flex-col gap-2">
                  <img
                    src={`${constants.imageUri}/breweries/${brewery.logo}`}
                    className="m-auto"
                  />
                  {brewery.address}
                  {brewery.phone}
                </div>
              </a>
            </Card>
          ))}
      </div>
    </Page>
  );
};

export default ParticipatingBreweriesPage;
