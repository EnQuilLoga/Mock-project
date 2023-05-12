import * as React from "react";
import Product from "../product/product";
import ProductDemo from "../product-demo/productDemo";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <h1 className="bg-violet-500">Home</h1>
    </div>
  );
}
