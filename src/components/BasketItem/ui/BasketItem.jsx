import { productsName } from "@/const/const";
import { getBasketItems } from "@/redux/basket/selectors/basketSelectors";
import { Button } from "@/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import basketImg from "@/assets/img/basket.png";

import cls from "./BasketItem.module.scss";
import { basketActions } from "@/redux/basket/slice/basketSlice";

const BasketItem = () => {
  const basket = useSelector(getBasketItems);

  const dispatch = useDispatch();

  const uniqueKey = (product) => {
    switch (product.product) {
      case productsName.PIZZAS:
        return `${product.product} - ${product.id} - ${product.size} - ${product.type} - ${product.price}`;
      case productsName.ROLLS:
        return `${product.product} - ${product.id} - ${product.quantity} - ${product.price}`;
      case productsName.OTHERS:
        return `${product.product} - ${product.id} - ${product.price}`;
      default:
        return null;
    }
  };

  const description = (product) => {
    switch (product.product) {
      case productsName.PIZZAS:
        return (
          <span>
            {product.type} тесто, {product.size}
          </span>
        );
      case productsName.ROLLS:
        return <span>Кол-во - {product.quantity}</span>;
      case productsName.OTHERS:
        return null;
      default:
        return null;
    }
  };

  const item = basket.map((el) => (
    <div key={uniqueKey(el)} className={cls.body}>
      <img className={cls.image} src={el.img} />

      <div className={cls.content}>
        <div className={cls.main}>
          <p>{el.title}</p>

          {description(el)}
        </div>

        <div className={cls.footer}>
          <div className={cls.count}>
            <Button
              onClick={() => dispatch(basketActions.minuseItem(el))}
              variant={"clear"}
              className={cls.button}
            >
              -
            </Button>
            <span>{el.count}</span>
            <Button
              onClick={() => dispatch(basketActions.addItem(el))}
              variant={"clear"}
              className={cls.button}
            >
              +
            </Button>
          </div>

          <span>{el.price * el.count} Р</span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className={cls.basketContent}>
        <h2>Ваш заказ</h2>

        {item}
      </div>

      {!basket.length && (
        <div className={cls.empty}>
          <h3>Ваша корзина пуста... Наполни ее!!</h3>
          <img src={basketImg} />
        </div>
      )}
    </>
  );
};

export { BasketItem };
