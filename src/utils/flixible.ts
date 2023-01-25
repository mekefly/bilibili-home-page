const minWindowWidth = 1060;
const maxWindowWidth = 2650;
/**
 * 当屏幕宽度在 `minWindowWidth` 到 `maxWindowWidth` 之间时，将根据比例输出 `minNumber` 到 `maxNumber` 之间的数
 *
 * @export
 * @param {number} minNumber 当屏幕宽度小于 minWindowWidth 时将输出 minNumber 这个数
 * @param {number} maxNumber 当屏幕宽度小于 maxWindowWidth 时将输出 maxNumber 这个数
 * @param {{ floor?: boolean }} [options={}]
 * @return {*}
 */
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
