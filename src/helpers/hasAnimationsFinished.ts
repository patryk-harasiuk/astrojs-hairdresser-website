export const hasAnimationsFinished = (element: HTMLDivElement): Promise<Animation[]> => {
  const animations = element.getAnimations();
  return Promise.all(animations.map((animation) => animation.finished));
};
