import * as React from "react";
import Product from "../productDetail/ProductDetail";
import ProductDemo from "../product-demo/productDemo";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../contact/AboutUs";
import LatestBlogs from "../Latest/LatestBlogs";
import DetailThird from "../Latest/DetailThird";
import DetailFifth from "../Latest/DetailFifth";
import DetailFourth from "../Latest/DetailFourth";
import DetailSecond from "../Latest/DetailSecond";


export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <LatestBlogs />
      {/* <DetailThird />
      <DetailFifth />
      <DetailFourth />
      <DetailSecond /> */}
    </div>
  );
}
