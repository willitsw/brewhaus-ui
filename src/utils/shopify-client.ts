import Client from "shopify-buy";

const ShopifyClient = Client.buildClient({
  domain: "brewhaus-dog-bones.myshopify.com",
  storefrontAccessToken: "faf16306f4b8ed42c5c15fe00eb7fbed",
});

export default ShopifyClient;
