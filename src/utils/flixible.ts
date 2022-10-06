const minWindowWidth = 1060;
const maxWindowWidth = 2650;
export function flexibleRange(
  minNumber: number,
  maxNumber: number,
  options: { floor?: boolean } = {}
) {
  const { floor = true } = options;
  const windowWidth = window.innerWidth;
  if (windowWidth > maxWindowWidth) {
    return maxNumber;
  } else if (windowWidth < minWindowWidth) {
    return minNumber;
  } else {
    const proportion =
      (windowWidth - minWindowWidth) / (maxWindowWidth - minWindowWidth);

    const flexNum = (maxNumber - minNumber) * proportion + minNumber;
    if (floor) {
      return Math.floor(flexNum);
    }
    return flexNum;
  }
}
