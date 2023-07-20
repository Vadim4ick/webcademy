import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ModalItemOthers = (props) => {
  const { isOpen, product, price } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      dispatch(productActions.clearProduct());
    }
  }, [dispatch, isOpen, product]);

  useEffect(() => {
    if (productsName.OTHERS === product.product && isOpen) {
      dispatch(productActions.setPrice(product.price));
    }
  }, [dispatch, isOpen, product]);

  const newParams = {
    id: product.id,
    product: product.product,
    img: product.photo,
    title: product.name,
    price: price,
  };

  return <ModalItemLayout params={newParams} />;
};

export { ModalItemOthers };
