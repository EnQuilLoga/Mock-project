import { useState } from "react";
import { ProductType } from "../product-list/Interface";
import ProductItem from "../ProductItem";

export default function Slide({ products, filtered, number }: any) {
  const [pageIndex, setPageIndex] = useState(0);

  const handleNext = () => {
    if (pageIndex < totalPages + 1) setPageIndex(pageIndex + 1);
    if (pageIndex === totalPages) setPageIndex(pageIndex);
  };
  const handlePrevious = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  const pageSize = 4;
  const totalPages =
    Math.floor(filtered.length / pageSize) +
    (filtered.length % pageSize === 0 ? 0 : 1);
  const start = pageSize * pageIndex;
  const end = pageSize + start;

  const relatedProducts = filtered.slice(start, end);

  return (
    <>
      <div className=" mt-10 relative">
        <div className="flex justify-around items-center ">
          {products.length > 0 &&
            relatedProducts.map((product: ProductType) => (
              <ProductItem key={product.id} product={product} number={number} />
            ))}
        </div>

        <div className="z-20 flex justify-between items-center px-2 absolute top-1/2 left-0 right-0 transform  -translate-x- -translate-y-1/2">
          <div
            onClick={handlePrevious}
            className={` ${
              pageIndex === 0
                ? "bg-stone-100 cursor-default hover:bg-stone-100 hover:text-black"
                : ""
            } bg-stone-300 text-[16px] px-4 py-2 rounded-full hover:bg-red-600 hover:text-white cursor-pointer`}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
          <div
            onClick={handleNext}
            className={`${
              pageIndex === filtered.length - 1
                ? "bg-stone-100 cursor-default"
                : ""
            }  bg-stone-300 text-[16px] px-4 py-2 rounded-full hover:bg-red-600 hover:text-white cursor-pointer`}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}
