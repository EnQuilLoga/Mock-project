import * as React from "react";
import ContactUs from "../contact/ContactUs";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <ContactUs />
    </div>
  );
}
