import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModalItemParams } from "../../helper/useModalItemParams";

const ModalItemOthers = (props) => {
  const { isOpen, product, price } = props;

  const newParams = useModalItemParams();

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

  return <ModalItemLayout price={price} params={newParams} />;
};

export { ModalItemOthers };
