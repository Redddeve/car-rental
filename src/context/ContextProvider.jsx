import { createContext } from 'react';
import { useModal } from 'hooks/useModal';

export const ModalContext = createContext();

export const ContextProvider = ({ children }) => {
  const { isOpen, open, close, CarId, setId } = useModal();

  const value = {
    isOpen,
    open,
    close,
    CarId,
    setId,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
