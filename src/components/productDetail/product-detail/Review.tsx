import React from "react";
import { star } from "../product-list/smallData";

export default function Review(props: any) {
  return (
    <>
      <div id="read-review" className="border-2 border-stone-100 p-10  ">
        <div className="flex justify-start items-center">
          <p>Grade</p>
          <div className="  ml-2">
            {star.map((_s, i) => (
              <i key={i} className="fas fa-star text-amber-400 mr-2"></i>
            ))}
          </div>
        </div>
        <div>
          <p className="text-stone-500 my-2">03/18/2022</p>
          <p>Demo</p>
          <p className="text-stone-500 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            repellat?
          </p>
        </div>
        <button
          onClick={() => {
            props.setDisplayReview(true);
          }}
          className="bg-gray-900 text-white p-2 rounded hover:bg-red-600"
        >
          {" "}
          Write Your Review !
        </button>
      </div>
    </>
  );
}
