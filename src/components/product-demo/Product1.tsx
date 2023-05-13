import * as React from "react";

export interface IProduct1Props {
 nameProduct?: string;
 imgProduct?: string;

}

export default function Product1(props: IProduct1Props) {
 return (
 <div>
  <img src={props.imgProduct} alt="" />
  <p>{props.nameProduct}</p>
 </div>
 );

}