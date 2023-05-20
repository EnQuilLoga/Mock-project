import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { RootState } from "../../call-api/reducer";
import { star } from "./product-list/smallData";
import ProductDes from "./product-detail/ProductDes";
import { des, imgs } from "./product-detail/data-small";
import Description from "./product-detail/Description";
import Review from "./product-detail/Review";
import Modal from "./product-detail/Modal";
import Security from "./product-detail/Security";
import SocialMedia from "./product-detail/SocialMedia";
import ImageDisplay from "./product-detail/ImageDisplay";

export default function ProductDetail() {
  const param = useParams();
  const { products } = useSelector((state: RootState) => state.products);

  const [displayReview, setDisplayReview] = useState(false);
  const [displayDefaultDes, setDisplayDefaultDes] = useState(true);
  const [displayDes, setDisplayDes] = useState("");

  const currentProduct = products?.find(
    (product) => product.id === Number(param.id)
  );

  const number = 10;
  const discount = Number(number) / Number(100);

  return (
    <>
      <div className=" ">
        <div className="grid  sm:grid-cols-1 md:grid-cols-2  p-4 gap-4 ">
          {/* IMG */}
          <ImageDisplay currentProduct={currentProduct} />
          {/* DES */}
          <div className="">
            <p className="text-[24px]">{currentProduct?.title}</p>
            <div className="flex justify-start items-center  flex-wrap">
              <div className=" my-1 mr-2">
                {star.map((_s, i) => (
                  <i key={i} className="fas fa-star text-amber-400 mr-2"></i>
                ))}
              </div>
              <div className="mr-3 hover:text-red-600 cursor-pointer">
                <i className="far fa-comment-dots"></i>
                <span
                  onClick={() => {
                    setDisplayDes("Reviews");
                    setDisplayDefaultDes(false);
                  }}
                >
                  {" "}
                  Read reviews(1)
                </span>
              </div>
              <div className="hover:text-red-600 cursor-pointer">
                <i className="far fa-edit"></i>
                <span onClick={() => setDisplayReview(true)}>
                  {" "}
                  Write a review
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-start items-center inline my-6">
              <div className="text-[24px] mr-5 ">
                <span className="line-through text-stone-700 mr-1 inline">
                  $ {(Number(currentProduct?.price) * discount).toFixed(2)}
                </span>
                -{" "}
                <span className="text-black-700  decoration-4 ml-1 font-extrabold  mr-2">
                  {" "}
                  ${currentProduct?.price}
                </span>
              </div>
              <div className="bg-gray-900 text-white p-1  ">Save {number}%</div>
            </div>
            <div>{currentProduct?.description}</div>
            <div className="my-5">
              Available:{" "}
              <span className="text-green-500">
                {currentProduct?.rating?.count} In Stock
              </span>
            </div>
            {/*  ADD TO CART */}
            <div className="flex flex-wrap">
              <form className="  w-20 mr-5">
                <input
                  type="number"
                  name="quantity"
                  id=""
                  className="py-3 px-3 w-20 border border-stone-500 rounded"
                  min={0}
                  placeholder="0"
                />
              </form>
              <div className="bg-gray-900 hover:bg-red-600 text-white inline-block p-3 rounded  cursor-pointer">
                <span>ADD TO CART</span>
              </div>
            </div>
            {/* Add to wishlist */}
            <div className="flex flex-wrap justify-start">
              <div className="hover:text-red-600 py-4 pr-2 mr-5 cursor-pointer">
                <i className="far fa-heart mr-2"></i>
                <span>Add to wishlist </span>
              </div>
              <div className="hover:text-red-600 py-4 pr-2  cursor-pointer">
                <i className="fas fa-random mr-2"></i>
                <span>Add to compare </span>
              </div>
            </div>
            {/* SHARE */}
            <SocialMedia />
            <hr className="my-5" />
            {/*  Security  */}
            <Security />
          </div>
        </div>
        {/* NAV LINK */}
        <div>
          <div className=" mx-auto text-center  flex flex-wrap justify-center items-center">
            {des.map((d: string) => (
              <NavLink
                key={d}
                to="#"
                className={` ${
                  displayDes === d ? "dis-active" : ""
                }  text-[30px] mx-5 hover:border-red-600 border-b-2 border-white`}
                onClick={() => {
                  setDisplayDes(d);
                  setDisplayDefaultDes(false);
                }}
              >
                {d}
              </NavLink>
            ))}
          </div>
          {/* Description */}
          {displayDefaultDes ? <Description /> : null}
          {displayDes === "Description" && <Description />}

          {/* Product Details */}
          {displayDes === "Product Details" ? (
            <ProductDes currentProduct={currentProduct} />
          ) : null}
          {/* Reviews */}
          {displayDes === "Reviews" ? (
            <Review setDisplayReview={setDisplayReview} />
          ) : null}
          {/* Modal */}
          {displayReview ? (
            <Modal
              currentProduct={currentProduct}
              setDisplayReview={setDisplayReview}
            />
          ) : null}
        </div>
        <div>
          <div className="text-center mt-10">
            <p className="text-[30px]">You Might Also Like </p>
            <p>Add Related products to weekly line up </p>
          </div>
        </div>
      </div>
    </>
  );
}
