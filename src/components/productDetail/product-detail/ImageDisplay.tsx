import p1 from "../../../assets/originals-windbreaker-winter-jacket.jpg";
import { imgs } from "./data-small";
export default function ImageDisplay(props: any) {
  return (
    <>
      <div className=" ">
        <div className="bg-red-600 text-white  rounded text-[13px] p-2 float-right">
          New
        </div>
        <div className="flex  place-content-center zoom mb-12">
          <img
            className="w-full h-44  object-contain object-center my-10"
            src={p1}
            alt={props.currentProduct?.title}
          />
        </div>
        <div className="flex justify-center border-red-500">
          {imgs.map((img: string, i: number) => (
            <div
              key={i}
              className="flex mr-2  place-content-center hover:cursor-pointer border-shoes"
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
