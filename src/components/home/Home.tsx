import * as React from "react";
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
