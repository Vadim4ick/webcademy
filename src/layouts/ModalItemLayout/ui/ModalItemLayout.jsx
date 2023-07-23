import { Button } from "@/ui/Button";
import cls from "./ModalItemLayout.module.scss";
import { useDispatch } from "react-redux";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { useContext } from "react";
import { LayoutContext } from "@/providers/LayoutContextProvider";

const ModalItemLayout = (props) => {
  const { params, price, options } = props;

  const { setIsOpen } = useContext(LayoutContext);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(basketActions.addItem({ ...params, price: price }));
    setIsOpen(false);
  };

  return (
    <div className={cls.body}>
      <img className={cls.img} src={params.img} />

      <div className={cls.content}>
        <h3 className={cls.title}>{params.title}</h3>

        {options && options}

        <div className={cls.footer}>
          <span className={cls.price}>Итого: {price} ₽</span>

          <Button onClick={onClick} border className={cls.button}>
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ModalItemLayout };
