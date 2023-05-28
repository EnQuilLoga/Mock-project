import * as React from "react";
import Product from "../productDetail/ProductDetail";
import ProductDemo from "../product-demo/productDemo";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../contact/AboutUs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../call-api/reducer";
import { getProductFetch } from "../../call-api/productSlice";
import { useEffect } from "react";
import { fakeData } from "../productDetail/product-list/smallData";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const dispatch = useDispatch();

  const { isLoading, error, products } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(getProductFetch());
  }, []);

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>Error: {error.message} </div>;
  }
  return (
    <div>
      {/* <ContactUs /> */}
      {/* <AboutUs /> */}
    </div>
  );
}
