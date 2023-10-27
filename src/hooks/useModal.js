import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [CarId, setId] = useState(0);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { open, close, isOpen, CarId, setId };
};
