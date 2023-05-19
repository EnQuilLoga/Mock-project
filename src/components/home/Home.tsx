import * as React from "react";
import Product from "../productDetail/ProductDetail";
import ProductDemo from "../product-demo/productDemo";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../contact/AboutUs";
import LatestBlogs from "../Latest/LatestBlogs";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      {/* <ContactUs /> */}
      {/* <AboutUs /> */}
      <LatestBlogs />
    </div>
  );
}
