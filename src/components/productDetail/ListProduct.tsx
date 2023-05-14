import { sortProduct, star } from "./smallData";
import { ListProductType } from "./Interface";

export default function ListProduct({
  data,
  sorted,
  totalPages,
  pageIndex,
  filterDisplay,
  displayGridIcon,
  displayBlockIcon,
  displayGridProduct,
  sortColumn,
  sortOrder,
  setDisplayGridProduct,
  setDisplayBlockIcon,
  setDisplayGridIcon,
  setCloseCategory,
  setClosePrice,
  onSort,
  onPrevious,
  onNext,
}: ListProductType) {
  if (filterDisplay[0].selected === "" && filterDisplay[1].closeCategory) {
    window.location.reload();
  } else if (
    filterDisplay[1].selected === "" &&
    filterDisplay[0].closeCategory
  ) {
    window.location.reload();
  }
  if (filterDisplay[0].closeCategory && filterDisplay[1].closeCategory) {
    window.location.reload();
  }

  console.log("filterDisplay[0].selected: ", filterDisplay[0].selected);
  console.log("filterDisplay[1].selected: ", filterDisplay[1].selected);
  const number = 10;
  const discount = Number(number) / Number(100);
  const pagination = [];
  for (let i = 0; i < totalPages; i++) {
    pagination.push(i);
  }

  return (
    <>
      <div className=" ">
        <div className="flex justify-between items-center p-4 bg-red-100 ">
          <div>
            <i
              className={` ${
                displayGridIcon || !displayGridProduct ? "text-red-600" : ""
              }  fas fa-th  cursor-pointer text-[20px]  mr-5`}
              onClick={() => {
                setDisplayGridIcon(true);
                setDisplayBlockIcon(false);
                setDisplayGridProduct(false);
              }}
            ></i>
            <i
              className={` ${
                displayBlockIcon ? "text-red-600" : ""
              }  fas fa-th-large cursor-pointer text-[20px] `}
              onClick={() => {
                setDisplayGridIcon(false);
                setDisplayBlockIcon(true);
                setDisplayGridProduct(true);
              }}
            ></i>
          </div>
          <div>
            There Are <span className="font-bold">{sorted.length}</span>{" "}
            products.
          </div>
          <div className="flex items-center">
            <p>Sort by: </p>
            <div className="flex ml-2">
              {sortProduct.map((item) => (
                <div
                  key={item.path}
                  onClick={() => onSort(item.path)}
                  className="bg-white p-1 rounded mx-1 cursor-pointer"
                >
                  <span>{item.label} </span>
                  {item.path === "" ? (
                    ""
                  ) : item.path === sortColumn && sortOrder === "asc" ? (
                    <i className="fas fa-sort-down"></i>
                  ) : (
                    <i className="fas fa-sort-up"></i>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={` 
        ${
          filterDisplay[0].displayPrice || filterDisplay[1].displayCategory
            ? "flex"
            : "hidden"
        }
       
           justify-start items-center p-2 mt-3 bg-stone-300 w-full columns-6 `}
        >
          <p>Active Filters </p>
          <div
            className={` ${filterDisplay[0].closePrice ? "hidden" : " "} 
          ${filterDisplay[0].displayPrice ? "flex" : "hidden"}
          mx-4 bg-white p-3  justify-start `}
          >
            <div>
              {" "}
              {filterDisplay[0].selectedName} -{" "}
              <span className="capitalize">{filterDisplay[0].selected}</span>
            </div>
            <div>
              <i
                onClick={() => setClosePrice(true)}
                className="fas fa-times inline-block ml-2 text-stone-500 cursor-pointer"
              ></i>
            </div>
          </div>

          <div
            className={` ${filterDisplay[1].closeCategory ? "hidden" : " "} 
          ${filterDisplay[1].displayCategory ? "flex" : "hidden"}
          mx-4 bg-white p-3  justify-start `}
          >
            <div>
              {" "}
              {filterDisplay[1].selectedName}:{" "}
              <span className="capitalize">{filterDisplay[1].selected}</span>
            </div>
            <div>
              <i
                onClick={() => setCloseCategory(true)}
                className="fas fa-times inline-block ml-2 text-stone-500 cursor-pointer"
              ></i>
            </div>
          </div>
        </div>

        {displayGridProduct ? (
          <div className=" p-10 ">
            {data.length > 0 &&
              data.map((product) => (
                <div
                  key={product.id}
                  className={`flex justify-center items-center mx-auto pb-8 `}
                >
                  <div className=" pb-10 mr-8 relative">
                    <div className="flex justify-between items-center text-white text-[13px] pb-5">
                      <div className="bg-green-800 px-1 rounded">
                        - {number}%
                      </div>
                      <div className="bg-red-600 text-white px-1 rounded">
                        New
                      </div>
                    </div>
                    <div className="flex  py-4 place-content-center">
                      <img
                        className="w-full h-44 object-contain object-center"
                        src={product?.image}
                        alt={product?.title}
                      />
                    </div>
                    <div className="flex justify-center before:py-10 before:color-stone-900 absolute top-1/2 left-1 transform  -translate-x- -translate-y-1/2 opacity-0 hover:opacity-100 z-index-10">
                      <div className={icon}>
                        <i className="far fa-heart"></i>
                      </div>
                      <div className={`${icon} mx-4 `}>
                        <i className="fas fa-random"></i>
                      </div>
                      <div className={icon}>
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div>{product?.title}</div>
                    <div className=" my-1">
                      {star.map((s, i) => (
                        <i
                          key={i}
                          className="fas fa-star text-amber-400 mr-2"
                        ></i>
                      ))}
                    </div>
                    <div className="flex justify-between items-center inline my-1">
                      <div>
                        <span className="line-through text-stone-700 mr-1 inline">
                          $
                          {Number(product?.price) -
                            Number(product?.price * 0.1)}
                        </span>
                        -{" "}
                        <span className="text-red-700 decoration-4 ml-1">
                          {" "}
                          ${product?.price}
                        </span>
                      </div>
                    </div>
                    <div>{product?.description}</div>
                    <div className="my-2">
                      Available:{" "}
                      <span className="text-green-500">
                        {product?.rating?.count} In Stock
                      </span>
                    </div>
                    <div className="bg-gray-900 text-white inline-block p-3 rounded">
                      <span>ADD TO CART</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div
            className={`flex justify-between items-start fex-col  flex-wrap  `}
          >
            {data.length > 0 &&
              data?.map((product) => (
                <div key={product.id} className={newProduct}>
                  <div className=" pb-10  ">
                    <div className="flex justify-between text-white text-[13px] ">
                      <div className="bg-green-800 px-1 rounded">
                        - {number}%
                      </div>
                      <div className="bg-red-600 text-white px-1 rounded">
                        New
                      </div>
                    </div>
                    <div className="flex py-4 place-content-center">
                      <img
                        className="w-full h-44 object-contain object-center"
                        src={product?.image}
                        alt={product?.title}
                      />
                    </div>
                  </div>

                  <div>{product?.title.slice(0, 15)}</div>
                  <div className="">
                    {star.map((s, i) => (
                      <i
                        key={i}
                        className="fas fa-star text-amber-400 mr-2"
                      ></i>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>${product?.price}</div>
                    <div className={starWrapper}>
                      <i className="fas fa-shopping-cart place-content-center"></i>
                    </div>
                  </div>

                  <div className="flex justify-center before:py-10 before:color-stone-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 z-index-10">
                    <div className={icon}>
                      <i className="far fa-heart"></i>
                    </div>
                    <div className={`${icon} mx-4 `}>
                      <i className="fas fa-random"></i>
                    </div>
                    <div className={icon}>
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        <div className="flex items-center justify-center mt-5">
          <div
            onClick={onPrevious}
            className="py-2 px-3  border-2 border-sky-500 hover:text-white hover:bg-sky-600 cursor-pointer m-2 rounded"
          >
            Previous
          </div>

          <div className="py-2 px-3  border-2 border-sky-500 hover:text-white hover:bg-sky-600 cursor-pointer m-2 rounded">
            {pageIndex + 1}
          </div>

          <div
            onClick={onNext}
            className="py-2 px-3  border-2 border-sky-500 hover:text-white hover:bg-sky-600 cursor-pointer m-2 rounded"
          >
            Next
          </div>
        </div>
      </div>
    </>
  );
}
const newProduct =
  "shadow hover:shadow-lg border-solid border-1 border-stone-200 mt-8 p-2 w-1/5 h-auto m-1 relative";

const starWrapper =
  "flex justify-center items-center cursor-pointer w-10 h-10 hover:bg-red-700 bg-stone-200 text-stone-800 rounded-full hover:text-white";

const icon =
  "flex justify-center items-center w-8 h-8 bg-stone-200 cursor-pointer hover:bg-red-700 rounded-full hover:text-white";
