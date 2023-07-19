import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import {
  getOthers,
  getOthersError,
  getOthersLoading,
} from "@/redux/others/selectors/rollsSelectors";
import { fetchNextOthersPage } from "@/redux/others/services/fetchNextOthersPage";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const OthersPage = () => {
  const others = useSelector(getOthers);
  const error = useSelector(getOthersError);
  const loading = useSelector(getOthersLoading);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) {
      dispatch(fetchNextOthersPage());
    }
  }, [dispatch, error, inView]);

  if (error) {
    return <div>{error}</div>;
  }

  const item = others.map((el) => {
    return (
      <CartItem
        id={el.id}
        key={el.id}
        product={el.product}
        img={el.photo}
        title={el.name}
        ingredients={el.ingredients}
        price={el.price}
      />
    );
  });

  return (
    <>
      <ProductLayout header={"Прочее"} item={item} />
      {!loading && <div ref={ref} />}
    </>
  );
};

export default OthersPage;
