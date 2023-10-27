import { useContext } from 'react';
import { ModalContext } from './ContextProvider';

export const useModalContext = () => useContext(ModalContext);
