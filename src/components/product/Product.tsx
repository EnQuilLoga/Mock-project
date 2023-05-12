import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../call-api/reducer";
import { useEffect } from "react";
import { getProductFetch } from "../../call-api/productSlice";

export default function Product() {
  const dispatch = useDispatch();

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

  return (
    <>
      <ul>
        {products.length > 0 &&
          products?.map((product) => (
            <li key={product.id}>{product?.title}</li>
          ))}
      </ul>
    </>
  );
}
