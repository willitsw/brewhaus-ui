import React, { useEffect, useState } from "react";
import ShopifyClient from "../utils/shopify-client";
import { Product, LineItemToAdd } from "shopify-buy";
import Loader from "../components/loader";
import Page from "../components/page";
import { Button, Card, Col, Row, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const getPrice = (price: any) => formatter.format(price.amount);

const ShopPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<LineItemToAdd[]>([]);
  const [checkoutId, setCheckoutId] = useState<string>();

  useEffect(() => {
    const getProducts = async () => {
      const newProducts = await ShopifyClient.product.fetchAll();
      setProducts(newProducts);
      const checkoutItems: LineItemToAdd[] = newProducts.map((product) => ({
        variantId: product.variants[0].id,
        quantity: 0,
      }));
      setCart(checkoutItems);
      const newCheckout = await ShopifyClient.checkout.create();
      setCheckoutId(newCheckout.id.toString());
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <Page title="Shop">
      <Loader isLoading={isLoading}>
        <div className="products">
          {products.map((product, idx) => {
            return (
              <Card
                key={idx}
                style={{ width: 400 }}
                cover={<img alt={product.title} src={product.images[0].src} />}
                actions={[
                  <Typography.Title className="mt-1" level={3}>
                    {getPrice(product.variants[0].price)}
                  </Typography.Title>,
                  <Button
                    className="bg-red"
                    type="primary"
                    icon={<PlusOutlined style={{ verticalAlign: "middle" }} />}
                    size="large"
                  >
                    Add to Cart
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={product.title}
                  description={product.description}
                />
              </Card>
            );
          })}
        </div>
      </Loader>
    </Page>
  );
};

export default ShopPage;
