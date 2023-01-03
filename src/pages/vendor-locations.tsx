import { Typography, Divider, Card } from "antd";
import React from "react";
import Page from "../components/page";
import { constants } from "../constants";

interface VendorLocation {
  logo: string;
  name: string;
  address: string[];
  phone: string;
  link: string;
}

const vendorLocations: VendorLocation[] = [
  {
    name: "Party Source",
    logo: "party-source.jpeg",
    address: ["95 Riviera Dr, Bellevue, KY 41073"],
    phone: "(859) 291-4007",
    link: "https://thepartysource.com/",
  },
  {
    name: "Dutch’s Larder",
    logo: "dutchs-larder.png",
    address: ["3378 Erie Ave, Cincinnati, OH 45208"],
    phone: "(513) 871-1446",
    link: "https://dutchscincy.com/",
  },
  {
    name: "Jungle Jim’s",
    logo: "junglejims.png",
    address: [
      "5440 Dixie Hwy, Fairfield, OH 45014",
      "4450 Eastgate S Dr, Cincinnati, OH 45245",
    ],
    phone: "(513) 674-6000",
    link: "https://junglejims.com/",
  },
  {
    name: "Cincy Brew Bus",
    logo: "cincy-brew-bus.png",
    address: ["Cincinnati, OH, United States"],
    phone: "(513) 258-7909",
    link: "https://cincybrewbus.com/",
  },
  {
    name: "Metallic Giraffe",
    logo: "metallic-giraffe.jpeg",
    address: ["2034 Anderson Ferry Rd Cincinnati, OH 45238"],
    phone: "(513) 922-7467",
    link: "http://www.metallicgiraffe.com/",
  },
  {
    name: "Country Fresh Farm Market",
    logo: "country-fresh.jpeg",
    address: [
      "8315 Beechmont Ave, Cincinnati, OH 45255",
      "8425 Vine St, Cincinnati, OH 45216",
    ],
    phone: "(513) 474-9167",
    link: "https://countryfreshfarmmarket.com/",
  },
  {
    name: "Ft. Thomas Central Gift Shop",
    logo: "ft-thomas-central.jpeg",
    address: ["3 N Ft Thomas Ave, Fort Thomas, KY 41075"],
    phone: "(859) 609-6427",
    link: "http://www.fortthomascentral.com/",
  },
  {
    name: "Avenue Brew",
    logo: "avenue-brew.jpeg",
    address: ["310 Fairfield Ave, Bellevue, KY 41073"],
    phone: "(859) 261-4381",
    link: "http://www.avenuebrew.com/",
  },
  {
    name: "Ft. Thomas Animal Hospital",
    logo: "ft-thomas-animal-hospital.jpeg",
    address: ["1133 S Ft Thomas Ave, Fort Thomas, KY 41075"],
    phone: "(859) 781-7387",
    link: "https://ftahvet.com/",
  },
  {
    name: "Marty’s Hops and Vines",
    logo: "martys.jpeg",
    address: ["6110 Hamilton Ave, Cincinnati, OH 45224"],
    phone: "(513) 681-4222",
    link: "https://martys-hopsandvines.com/",
  },
  {
    name: "River Village Shoppe Gifts and Antiques",
    logo: "river-village.png",
    address: ["411 Walnut St, New Richmond, OH 45157"],
    phone: "(937) 690-9837",
    link: "https://river-village-shoppe-american-country-auction.business.site/",
  },
  {
    name: "Newtown Feed and Supply",
    logo: "newtown-feed-n-seed.jpeg",
    address: ["6876 Main St, Newtown, OH 45244"],
    phone: "(513) 271-3446",
    link: "https://www.newtownfeed.com/",
  },
  {
    name: "Delhi Pet Center",
    logo: "delhi-pet-center.png",
    address: ["5665 Rapid Run Rd, Cincinnati, OH 45238"],
    phone: "(513) 451-4015",
    link: "https://delhipetcenter.com/",
  },
  {
    name: "Green Kayak Market",
    logo: "green-kayak.jpeg",
    address: ["204 Front St, New Richmond, OH 45157"],
    phone: "(513) 843-6040",
    link: "https://www.greenkayak.com/",
  },
  {
    name: "Family Animal Hospital",
    logo: "family-animal-hospital.jpeg",
    address: ["333 W Main St, Batavia, OH 45103"],
    phone: "(513) 732-1116",
    link: "https://www.bataviafamilyanimalhospital.com/",
  },
  {
    name: "Cincinnati Hills Animal Clinic",
    logo: "cincinnati-hills-animal-clinic.jpeg",
    address: ["8315 Montgomery Road, Cincinnati, OH 45236"],
    phone: "(513) 791-0747",
    link: "http://www.cincinnatihillsanimalclinic.com/",
  },
  {
    name: "EarthWise Pet Supply",
    logo: "earthwise-pet-supply.jpeg",
    address: ["11328 Montgomery Rd, Cincinnati, OH 45249"],
    phone: "(513) 469-7387",
    link: "https://earthwisepet.com/",
  },
  {
    name: "Dog Day, Every Day!",
    logo: "dog-day-everyday.jpeg",
    address: [
      "624 Ohio Pike, Cincinnati, OH, 45245",
      "4790 Dues Dr, West Chester Township, OH 45246",
    ],
    phone: "(513) 716-1063",
    link: "https://dogdayeveryday.com/",
  },
  {
    name: "Family Pet Center",
    logo: "family-pet-center.jpeg",
    address: ["6666 Clough Pike, Cincinnati, OH 45244"],
    phone: "(513) 231-7387",
    link: "https://www.familypetcenter.com/",
  },
  {
    name: "IGA-New Richmond",
    logo: "rivertown-iga.jpeg",
    address: ["1041 Old U.S. 52 # A, New Richmond, OH 45157"],
    phone: "(513) 553-4245",
    link: "https://www.rivertowniga.com/",
  },
  {
    name: "Sweet Frog Frozen Yogurt",
    logo: "sweet-frog.jpeg",
    address: [
      "Suite 220, 4450 Eastgate S Dr, Cincinnati, OH 45245",
      "1227 OH-125, Cincinnati, OH 45245",
    ],
    phone: "(513) 947-1777",
    link: "https://www.sweetfrog.com/",
  },
  {
    name: "Lifetime Pet Centers",
    logo: "lifetime-pet-centers.jpeg",
    address: ["1044 Old U.S. 52, New Richmond, OH 45157"],
    phone: "(513) 553-9954",
    link: "https://lifetimepetcenters.com/",
  },
  {
    name: "The Liquor Box",
    logo: "liquorbox.jpeg",
    address: ["4197 Richardson Rd, Independence, KY 41051"],
    phone: "(859) 282-0135",
    link: "https://www.yelp.com/biz/the-liquor-box-independence",
  },
  {
    name: "Puppywood Pet Resort",
    logo: "puppywood-pet-resort.jpeg",
    address: ["8175 Hetz Dr, Cincinnati, OH 45242"],
    phone: "(513) 489-2275",
    link: "https://www.puppywood.com/?gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjSqepdU_kY2lar3Lz7iNThif_oRcyoSamd3AQV1iWZOpEXlVH5omGkaApKaEALw_wcB",
  },
  {
    name: "The Dog Studio",
    logo: "dogstudio.jpeg",
    address: ["3645 Linwood Ave, Cincinnati, OH 45226"],
    phone: "(513) 871-0999",
    link: "https://dogstudio.co/",
  },
  {
    name: "Ben Fur Pet Groomers",
    logo: "ben-fur.jpeg",
    address: ["472 Harrison Brookville Rd, West Harrison, IN 47060"],
    phone: "(812) 637-6700",
    link: "https://www.yelp.com/biz/ben-fur-pet-grooming-hamilton",
  },
  {
    name: "One Stop Liquor and Tobacco",
    logo: "onestop.jpeg",
    address: ["10 6th St # 4, Bellevue, KY 41073"],
    phone: "(859) 291-0240",
    link: "https://onestopliquors.com/",
  },
  {
    name: "Left Bank Coffeehouse",
    logo: "left-bank.jpeg",
    address: ["701 Greenup St, Covington, KY 41011"],
    phone: "(859) 431-4655",
    link: "https://www.leftbankcoffeehouse.com/",
  },
  {
    name: "Celebrate Local",
    logo: "celebrate-local.png",
    address: [
      "3952 Townsfair Way, Columbus, OH 43219",
      "7127 Foundry Row, Liberty Township, OH 45069",
    ],
    phone: "(614) 471-6446",
    link: "https://www.celebratelocalohio.com/",
  },
  {
    name: "Petey’s Pet Stop",
    logo: "peteys-pet-stop.jpeg",
    address: ["311 Howell Ave, Cincinnati, OH 45220"],
    phone: "(513) 221-7387",
    link: "https://www.peteyspetstop.com/",
  },
];

const VendorLocationsPage = () => {
  return (
    <Page title="Vendor Locations">
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
      <div>
        <div className="text-center">
          <a href="https://www.graeters.com/" target="_blank">
            <Typography.Title level={3}>Graeter's Ice Cream</Typography.Title>
          </a>
          <div className="text-center flex flex-col gap-2">
            <img
              src={`${constants.imageUri}/vendor-locations/Graeters.png`}
              className="mx-auto my-5"
            />
            <a href="https://www.graeters.com/" target="_blank">
              (800) 721-3323
              <br />
              <br />
              <Typography.Text className="mt-5">
                We are fortunate to have the support and encouragement of
                Graeter’s Ice Cream to provide fun, creative vocational training
                and work opportunities for young adults with disabilities in the
                Greater Cincinnati region. Look for Graeter’s Dog Bones at all
                42 Cincinnati/N. Ky stores –plus locations in Louisville,
                Lexington, Columbus, Dayton, Indianapolis, Chicago, and
                PIttsburgh and CVG Airport! — Made by our own Brewhaus Bakers in
                our signature brewery based Peanut Butter flavor, Black
                Raspberry Carob Chip, Cheese, Pumpkin and Banana Oat. As always,
                our treats are made with all natural, premium, human grade
                ingredients, never any added preservatives, artificial flavors,
                sugars or salt.
              </Typography.Text>
            </a>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-row gap-5 flex-wrap justify-center">
        {vendorLocations
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
                    src={`${constants.imageUri}/vendor-locations/${brewery.logo}`}
                    className="m-auto"
                  />
                  {brewery.address.map((add) => (
                    <div>{add}</div>
                  ))}
                  {brewery.phone}
                </div>
              </a>
            </Card>
          ))}
      </div>
    </Page>
  );
};

export default VendorLocationsPage;
