import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { RootState } from "../../call-api/reducer";
import React, { useEffect, useState } from "react";
import { getProductFetch } from "../../call-api/productSlice";
import ListProduct from "./ListProduct";
import { category, tags } from "./smallData";
import { renderTag } from "./FunctionFilter";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const dispatch = useDispatch();

  const [closePrice, setClosePrice] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(false);
  const [rangePrice, setRangePrice] = useState("");

  const [selected, setSelected] = useState("");
  const [closeCategory, setCloseCategory] = useState(false);
  const [displayCategory, setDisplayCategory] = useState(false);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState("");

  const [displayGridIcon, setDisplayGridIcon] = useState(false);
  const [displayBlockIcon, setDisplayBlockIcon] = useState(false);
  const [displayGridProduct, setDisplayGridProduct] = useState(false);

  const [pageIndex, setPageIndex] = useState(0);

  const { isLoading, error, products } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(getProductFetch());
  }, [dispatch]);

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>Error: {error.message} </div>;
  }

  const pageSize = 4;
  const totalPages =
    Math.floor(products.length / pageSize) +
    (products.length % pageSize === 0 ? 0 : 1);
  const start = pageSize * pageIndex;
  const end = pageSize + start;

  const prices = products.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangePrice(e.target.value);
    setDisplayPrice(true);
    setPageIndex(0);
  };

  const handleCategory = (value: string) => {
    setSelected(value);
    setDisplayCategory(true);
    setPageIndex(0);
  };

  const handleSortProduct = (path: string) => {
    if (sortColumn === path) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(path);
      setSortOrder("asc");
    }
    setPageIndex(0);
  };
  const handlePrevious = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };
  const handleNext = () => {
    if (pageIndex < totalPages - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const filterDisplay = [
    {
      closePrice: closePrice,
      selectedName: "Price",
      selected: rangePrice,
      min: min,
      displayPrice: displayPrice,
    },
    {
      closeCategory: closeCategory,
      selectedName: "Category",
      selected: selected,
      displayCategory: displayCategory,
    },
  ];
  const filterPrice = rangePrice
    ? products.filter((product) => product.price <= Number(rangePrice))
    : products;

  const filterCategory = selected
    ? products.filter((product) => product.category === selected)
    : products;

  const filtered = filterPrice.filter((product) =>
    filterCategory.includes(product)
  );
  const sorted = _.orderBy(filtered, [sortColumn], [sortOrder]);

  const result = sorted.slice(start, end);

  return (
    <>
      <div className="mx-5 flex items-start my-4">
        <div className="columns-1 w-1/4 mr-5">
          <Link
            to="#"
            className="text-[22px] border-b-2 border-stone-200 mb-8 pb-5 mb-4 block"
          >
            Wallets & Card Holders
          </Link>
          <div>
            <p className=" text-[22px] border-b-2 border-stone-200 mb-8 pb-3">
              Filter By
            </p>
            <div
              onClick={() => window.location.reload()}
              className={`cursor-pointer bg-gray-500  justify-around items-center p-2  hover:bg-red-600 mb-5 rounded text-white 
               ${displayPrice || displayCategory ? "flex" : "hidden"}
              `}
            >
              <i className="fas fa-times inline-block"></i>

              <p> Clear all </p>
            </div>
            <div className="mb-8">
              <form className="flex flex-col">
                <label className="text-[20px] mb-3">Price</label>
                <p>
                  ${min} - $ {!displayPrice ? max : rangePrice}
                </p>
                <input
                  min={min}
                  max={max}
                  name="priceRange"
                  type="range"
                  className="rounded "
                  onChange={handlePriceRange}
                />
              </form>
            </div>
            <div className="mb-8">
              <p className="text-[20px] ">Category</p>
              <ul className="list-none border border-stone-500 mt-1">
                {category.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleCategory(item.value)}
                    className={` ${`bg-gray-200 ${
                      selected === item.value ? "active:bg-sky-800" : ""
                    }`}  hover:bg-sky-600 hover:text-white p-2 border-t-2 border-stone-300 cursor-pointer `}
                  >
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
            {renderTag({ data: tags })}
          </div>
        </div>

        <div className="w-full ">
          <ListProduct
            data={result}
            sorted={sorted}
            totalPages={totalPages}
            pageIndex={pageIndex}
            filterDisplay={filterDisplay}
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            displayGridIcon={displayGridIcon}
            displayGridProduct={displayGridProduct}
            displayBlockIcon={displayBlockIcon}
            setDisplayBlockIcon={setDisplayBlockIcon}
            setDisplayGridProduct={setDisplayGridProduct}
            setDisplayGridIcon={setDisplayGridIcon}
            setClosePrice={setClosePrice}
            setCloseCategory={setCloseCategory}
            onSort={handleSortProduct}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </div>
    </>
  );
}
