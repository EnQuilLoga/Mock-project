import { ListProductType } from "./Interface";
import GridAndBlockIcon from "./header-rightSide/GridBlockIcon";
import DetailProduct from "./body-rightSide/DetailProduct";
import ListProductDetail from "./body-rightSide/ListProductDetail";
import DisplayFilter from "./header-rightSide/DisplayFilter";
import Pagination from "./body-rightSide/Pagination";

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
  setPageIndex,
}: ListProductType) {
  const number = 10;
  const discount = Number(number) / Number(100);

  return (
    <>
      <div className=" ">
        <GridAndBlockIcon
          displayGridIcon={displayGridIcon}
          displayGridProduct={displayGridProduct}
          displayBlockIcon={displayBlockIcon}
          sorted={sorted}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
          setDisplayGridIcon={setDisplayGridIcon}
          setDisplayBlockIcon={setDisplayBlockIcon}
          setDisplayGridProduct={setDisplayGridProduct}
          onSort={onSort}
        />
        <DisplayFilter
          filterDisplay={filterDisplay}
          setClosePrice={setClosePrice}
          setCloseCategory={setCloseCategory}
        />

        {displayGridProduct ? (
          <DetailProduct data={data} number={number} discount={discount} />
        ) : (
          <ListProductDetail data={data} number={number} />
        )}
        <Pagination
          pageIndex={pageIndex}
          totalPages={totalPages}
          setPageIndex={setPageIndex}
        />
      </div>
    </>
  );
}
