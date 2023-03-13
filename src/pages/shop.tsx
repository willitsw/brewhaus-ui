import React, { useState } from "react";
import Loader from "../components/loader";
import Page from "../components/page";
import {
  Button,
  Card,
  Form,
  InputNumber,
  Select,
  Typography,
  message,
} from "antd";
import { PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useShopify } from "../components/shopify-provider";
import { LineItemToAdd, Product } from "shopify-buy";
import {
  ScreenSize,
  useResponsiveness,
} from "../components/use-responsiveness";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const getPrice = (price: any) => formatter.format(price.amount);

interface StoreItemProps {
  product: Product;
}

const StoreItem = ({ product }: StoreItemProps) => {
  const [itemCount, setItemCount] = useState<number>(0);
  const [optionSelections, setOptionSelections] = useState<{
    [key: string]: string;
  }>({});
  const screenSize = useResponsiveness();

  const { addToCart } = useShopify();

  const options = product.options.filter((option) => option.name !== "Title");

  const handleSubmitClick = async () => {
    if (itemCount < 1) {
      message.error("You must choose a quantity!");
      return;
    }
    for (const option of options) {
      if (!(option.name in optionSelections)) {
        message.error(`You must select a value for ${option.name}!`);
        return;
      }
    }
    const variantId =
      product.variants.find(
        (variant) =>
          Object.values(optionSelections).join(" / ") === variant.title
      )?.id ?? product.variants[0].id;
    const cartItem: LineItemToAdd = {
      quantity: itemCount,
      variantId,
    };
    await addToCart(cartItem);
    message.success(`Item "${product.title}" added to Cart.`);
  };

  const handleSelectOption = (value: string, option: string) => {
    const newOptionSelections = { ...optionSelections };
    newOptionSelections[option] = value;
    setOptionSelections(newOptionSelections);
  };

  return (
    <Card
      key={product.id}
      style={{ width: 500 }}
      cover={<img alt={product.title} src={product.images[0].src} />}
      actions={[
        <Typography.Title style={{ marginBottom: 0 }} level={3}>
          {getPrice(product.variants[0].price)}
        </Typography.Title>,
        <Form.Item style={{ marginBottom: 0, marginTop: 0 }} label="Quantity">
          <InputNumber
            min={0}
            onChange={(count) => {
              setItemCount(count ?? 0);
            }}
            value={itemCount}
            style={{ width: 60 }}
          />
        </Form.Item>,
        <Button
          className="bg-red"
          type="primary"
          icon={
            screenSize > ScreenSize.small && (
              <PlusOutlined style={{ verticalAlign: "middle" }} />
            )
          }
          size={screenSize > ScreenSize.small ? "large" : "small"}
          onClick={handleSubmitClick}
        >
          Add to Cart
        </Button>,
      ]}
    >
      <Card.Meta
        title={<Typography.Title level={4}>{product.title}</Typography.Title>}
        description={
          <div>
            <div>{product.description}</div>
            {options.length > 0 && (
              <>
                <Typography.Title className="mt-5" level={5}>
                  Options
                </Typography.Title>
                <div className="flex flex-col">
                  {options.map((option, idx) => (
                    <Form.Item key={idx} label={option.name} labelAlign="left">
                      <Select
                        defaultValue="Select Option"
                        value={optionSelections[option.name] ?? "Select Option"}
                        onSelect={(_, value) => {
                          handleSelectOption(
                            value.value.toString(),
                            option.name
                          );
                        }}
                      >
                        {option.values.map((value, idx) => (
                          <Select.Option key={idx} value={value.value}>
                            {value.value}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  ))}
                </div>
              </>
            )}
          </div>
        }
      />
    </Card>
  );
};

const ShopPage = () => {
  const { products, shopifyLoading, checkout, cartCount } = useShopify();

  return (
    <Page
      title="Shop"
      secondaryContent={
        <Button
          className="flex flex-row items-center"
          onClick={checkout}
          disabled={cartCount < 1}
          icon={<ShoppingCartOutlined />}
        >
          Checkout
        </Button>
      }
    >
      <Loader isLoading={shopifyLoading}>
        <div className="products">
          {products.map((product, idx) => {
            return <StoreItem key={idx} product={product} />;
          })}
        </div>
        <div className="flex flex-row justify-center">
          <Button
            className="flex flex-row items-center"
            onClick={checkout}
            disabled={cartCount < 1}
            icon={<ShoppingCartOutlined />}
          >
            Checkout
          </Button>
        </div>
      </Loader>
    </Page>
  );
};

export default ShopPage;
