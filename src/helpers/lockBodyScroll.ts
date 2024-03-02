export const lockBodyScroll = () => {
  const hasVerticalScroll = !!(window.innerWidth - window.document.body.clientWidth);

  if (hasVerticalScroll) {
    window.document.body.style.paddingRight = '15px';
  }

  window.document.body.style.overflow = 'hidden';
};

export const unlockBodyScroll = () => {
  window.document.body.style.overflow = 'auto';
  window.document.body.style.paddingRight = '0';
};
