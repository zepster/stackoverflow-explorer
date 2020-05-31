export const routeIn: Keyframe[] = [
  { transform: 'translateX(-15%)', opacity: 0 },
  { transform: 'translateX(0)', opacity: 1 },
];


export const routeOut: Keyframe[] = [
  { transform: 'translateX(0%)', opacity: 1 },
  { transform: 'translateX(-15%)', opacity: 0 },
];

export const appear: Keyframe[] = [
  { transform: 'translateX(25px)', opacity: 0 },
  { transform: 'translateX(0)', opacity: 1 },
];

export const shineGreen: Keyframe[] = [
  { backgroundColor: 'rgba(12, 243, 154, 1)' },
  { backgroundColor: 'rgba(12, 243, 154, 0.17)' },
];

export const animateElement = (
  element: HTMLElement,
  frame: Keyframe[],
  durationOrOption: number | KeyframeAnimationOptions,
  cb?: () => {},
) => {
  const animation = element.animate(frame, durationOrOption);
  if (cb) {
    animation.onfinish = cb;
  }
};
