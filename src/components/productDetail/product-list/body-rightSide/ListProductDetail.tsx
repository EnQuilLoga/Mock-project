import { ListProductDetailType } from "../Interface";
import ProductItem from "../../ProductItem";

export default function ListProductDetail({
  data,
  number,
}: ListProductDetailType) {
  return (
    <>
      <div
        className={`flex justify-between items-start fex-col  flex-wrap relative `}
      >
        {data.length > 0 &&
          data?.map((product) => (
            <ProductItem key={product.id} product={product} number={number} />
          ))}
      </div>
    </>
  );
}
