import styled from "@emotion/styled/types/base";
import * as React from "react";
import { IProduct } from "../../types/productType";

// export interface IProduct1Props {
//  nameProduct?: string;
//  id?: number;
//  imgProduct?: string;
//  priceProduct?: number;
//  description?:string;

// }



export default function Product1(props: Partial<IProduct>) {
 return (
    <div className="mr-6 ml-9 group">
        <div className="">
            <div className="w-40 h-40 justify-center"><img src={props.image} alt="" className="w-full h-full object-contain"/></div>
            <div className="">    
                <div className=" flex-auto items-center hidden group-hover:block">
                    <button className="p-1.5 border-2 border-slate-100 rounded-full  bg-white hover:bg-red-400 "><i className="fas fa-heart"></i></button>
                    <button className="p-1.5 border-2 border-slate-100 rounded-full  bg-white hover:bg-red-400 "><i className="fas fa-random"></i></button>
                    <button className="p-1.5 border-2 border-slate-100 rounded-full  bg-white hover:bg-red-400 "><i className="fas fa-search"></i></button>
                </div>
            </div>
        </div>
        
        <div>
        <p className="">{props.title}</p>
            <div><p>{props.rating?.rate} <i className="fas fa-star text-yellow-200 "></i></p></div> 
            <p>${props.price}</p>
            <button className="flex"><i className="fas fa-shopping-cart"></i></button>
        </div>
            
        
    </div>  
 
 );

}