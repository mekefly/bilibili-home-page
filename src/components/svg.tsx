import classNames from "classnames";
import { CSSProperties } from "react";

export const svgMap = genSvgMap({
  channelCompetition: () => (
    <svg id="channel-competition" viewBox="0 0 1024 1024">
      <path
        d="M545.03 736.563v68.01h108.108a23.997 23.997 0 0 1 24.002 23.997v17.833a23.997 23.997 0 0 1-24.002 23.997h-282.27a23.997 23.997 0 0 1-24.003-24.003V828.57a23.997 23.997 0 0 1 24.002-23.998h108.109v-68.014c-57.334-7.639-108.467-34.888-146.432-74.783-103.526-30.924-171.49-125.808-202.27-278.917-12.545-62.382 28.042-123.085 90.639-135.588a115.978 115.978 0 0 1 22.707-2.242h20.68V227.2a48 48 0 0 1 48-48h399.41a48 48 0 0 1 48 48v17.828h20.67c7.629 0 15.232.752 22.707 2.242 62.597 12.498 103.179 73.206 90.64 135.588-30.777 153.104-98.74 247.987-202.26 278.917-37.97 39.895-89.104 67.144-146.433 74.783zM270.34 545.653a248.545 248.545 0 0 1-6.041-54.614V310.856h-20.685c-3.262 0-6.523.322-9.728.962-26.83 5.356-44.222 31.37-38.846 58.112 15.78 78.49 40.755 136.643 75.295 175.719zm489.37-234.797v180.183c0 18.76-2.09 37.038-6.042 54.605 34.535-39.076 59.51-97.234 75.29-175.719 5.376-26.737-12.017-52.751-38.846-58.107a49.705 49.705 0 0 0-9.728-.962h-20.674z"
        fill="#FFD778"
      ></path>
      <path
        d="m512 487.639-59.791 31.217a12.8 12.8 0 0 1-18.535-13.527l11.392-65.982-48.19-46.653a12.8 12.8 0 0 1 7.077-21.863l66.683-9.625 29.9-60.176a12.8 12.8 0 0 1 22.928 0l29.9 60.176 66.683 9.625a12.8 12.8 0 0 1 7.076 21.863l-48.19 46.653 11.393 65.982a12.8 12.8 0 0 1-18.535 13.527L512 487.639z"
        fill="#FB813A"
      ></path>
    </svg>
  ),
  widgetArrow: () => (
    <svg id="widget-arrow" viewBox="0 0 1024 1024">
      <path
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="145.067"
        stroke="currentColor"
        d="m341.333 170.667 341.334 341.332-341.334 341.335"
      ></path>
    </svg>
  ),
});
function genSvgMap<T extends { [key: string]: () => JSX.Element }>(map: T) {
  const newMap: {
    [key in keyof T]: (props: {
      className?: string;
      style?: CSSProperties;
    }) => JSX.Element;
  } = {} as any;

  Object.entries(map).forEach(([key, value]) => {
    (newMap as any)[key] = (props: {
      className?: string;
      style?: CSSProperties;
    }) => {
      const svg: JSX.Element = { ...value() };

      const svgProps = { ...svg["props"] };
      svgProps["className"] = classNames(
        svgProps["className"],
        props.className
      );
      svgProps["style"] = {
        ...svgProps["style"],
        ...props.style,
      };

      svg.props = svgProps;
      return svg;
    };
  });
  return newMap;
}
