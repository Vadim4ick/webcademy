import { createContext, useState } from "react";

export const LayoutContext = createContext({});

const LayoutContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopup] = useState(false);

  let timeout = null;

  const handleClick = () => setIsOpen((prev) => !prev);

  const openPopup = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    setPopup(true);

    timeout = setTimeout(() => {
      setPopup(false);
    }, 3000);
  };

  const value = {
    isOpen,
    handleClick,
    setIsOpen,
    openPopup,
    popup,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export { LayoutContextProvider };
