import { useState } from "react";
import { imgs } from "./data-small";

export default function ImageDisplay(props: any) {
  const [image, setImage] = useState("");
  const [ig, setIg] = useState(false);
  return (
    <>
      <div className=" ">
        <div className="bg-red-600 text-white  rounded text-[13px] p-2 float-right">
          New
        </div>
        <div className="flex  place-content-center hover:ease-in-out hover:scale-150 mb-12 cursor-pointer">
          <img
            className="w-full h-44  object-contain object-center my-10"
            src={!image && !ig ? props.currentProduct?.image : image}
            alt={props.currentProduct?.title}
          />
        </div>
        <div className="flex justify-center border-red-500">
          {imgs.map((img: string, i: number) => (
            <div
              key={i}
              className="flex mr-2  place-content-center hover:cursor-pointer border-shoes"
              onClick={() => {
                setImage(img);
                setIg(true);
              }}
            >
              <img
                className="w-full h-30 object-contain object-center"
                src={img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
