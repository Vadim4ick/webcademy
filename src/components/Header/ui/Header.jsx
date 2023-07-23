import cls from "./Header.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg";
import ToggleIcon from "@/assets/img/toggleTheme.svg";
import CartIcon from "@/assets/img/cart.svg";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { Modal } from "@/ui/Modal";
import { useState } from "react";
import { BasketItem } from "@/components/BasketItem";

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  const onClick = () => {
    navigate("/");
  };

  const { toggleTheme } = useTheme();

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
    <>
      <header className={cls.header}>
        <div className={cls.container}>
          <div className={cls.content}>
            <div className={cls.logo}>
              <Icon Svg={PizzaIcon} clickable onClick={onClick} />

              <p>WebcademyDelivery</p>
            </div>

            <div className={cls.buttons}>
              <Icon Svg={ToggleIcon} clickable onClick={toggleThemeHandler} />

              <Button onClick={handleClick} border className={cls.button}>
                <Icon Svg={CartIcon} />

                <span>0 Р</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Modal
        variant={"rightModal"}
        width={420}
        scroll={"auto"}
        height={"100%"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className={cls.body}>
          <BasketItem />

          <div className={cls.footer}>
            <div className={cls.totalPrice}>
              <span>Итого: 0 Р</span>
            </div>

            <Button>Оформить заказ</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { Header };
