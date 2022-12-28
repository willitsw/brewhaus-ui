import { useMediaQuery } from "react-responsive";

export enum ScreenSize {
  small,
  medium,
  large,
  extraLarge,
}

export const useResponsiveness = (): ScreenSize => {
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(max-width: 1024px)" });

  let screenSize: ScreenSize;

  if (!isLarge) {
    screenSize = ScreenSize.extraLarge;
  } else if (!isMedium) {
    screenSize = ScreenSize.large;
  } else if (!isSmall) {
    screenSize = ScreenSize.medium;
  } else {
    screenSize = ScreenSize.small;
  }

  return screenSize;
};
