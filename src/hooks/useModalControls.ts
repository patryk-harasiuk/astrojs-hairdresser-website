import { useState, useCallback } from 'react';

import { lockBodyScroll, unlockBodyScroll } from '../helpers/lockBodyScroll';

export const useModalControls = (defaultState = false) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    unlockBodyScroll();
  }, []);
  const openModal = useCallback(() => {
    setIsOpen(true);
    lockBodyScroll();
  }, []);
  const toggleModal = useCallback((prevState: any) => setIsOpen(!prevState), []);

  return { isOpen, closeModal, openModal, toggleModal };
};
