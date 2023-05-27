import * as React from "react";
import Product from "../productDetail/ProductDetail";
import ProductDemo from "../product-demo/productDemo";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../contact/AboutUs";
import LatestBlogs from "../Latest/LatestBlogs";
import DetailLatesBlogs from "../Latest/DetailLatesBlogs";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      {/* <LatestBlogs /> */}
      < DetailLatesBlogs />
    </div>
  );
}
