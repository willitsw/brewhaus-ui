import React, { createContext, useContext, useEffect, useState } from "react";
import { Cart, LineItemToAdd, Product } from "shopify-buy";
import ShopifyClient from "../utils/shopify-client";

interface ShopifyProviderProps {
  children: React.ReactNode;
}

export interface ShopifyContextProps {
  shopifyLoading: boolean;
  products: Product[];
  cartCount: number;
  checkout: () => void;
  addToCart: (item: LineItemToAdd) => Promise<void>;
}

const ShopifyContext = createContext<ShopifyContextProps>(null);

const ShopifyProvider = ({ children }: ShopifyProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [shopifyLoading, setShopifyLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    const getProducts = async () => {
      const newProducts = await ShopifyClient.product.fetchAll();
      setProducts(newProducts);
      const newCheckout = await ShopifyClient.checkout.create();
      setCart(newCheckout);
      setShopifyLoading(false);
    };
    getProducts();
  }, []);

  const addToCart = async (item: LineItemToAdd) => {
    setShopifyLoading(true);
    setCart(await ShopifyClient.checkout.addLineItems(cart.id, [item]));
    // setCart(await ShopifyClient.checkout.fetch(cart.id.toString()));
    setShopifyLoading(false);
  };

  const checkout = async () => {
    const checkout = await ShopifyClient.checkout.fetch(cart.id.toString());
    window.location.href = checkout.webUrl;
  };

  return (
    <ShopifyContext.Provider
      value={{
        products,
        shopifyLoading,
        cartCount: cart?.lineItems.length ?? 0,
        checkout,
        addToCart,
      }}
    >
      {children}
    </ShopifyContext.Provider>
  );
};

export default ShopifyProvider;

export const useShopify = () => useContext(ShopifyContext);
