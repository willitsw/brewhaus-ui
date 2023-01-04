import { useMediaQuery } from "react-responsive";

export enum ScreenSize {
  small,
  medium,
  large,
  extraLarge,
  extraExtraLarge,
}

export const useResponsiveness = (): ScreenSize => {
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(max-width: 1024px)" });
  const isExtraLarge = useMediaQuery({ query: "(max-width: 1440px)" });

  let screenSize: ScreenSize;

  if (!isExtraLarge) {
    screenSize = ScreenSize.extraExtraLarge;
  } else if (!isLarge) {
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
