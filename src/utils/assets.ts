/**
 * 获取文件
 * @param url: string
 * examples /src/assets/img/xxx.png
 */
export default function useAssetsUrl(url: string) {
  const modules = import.meta.glob("/src/assets/**/*.{png,svg,jpg,jpeg,avif}");
  // Object.entries(modules).forEach(([key, value]) => {
  //   console.log(`imgUrl: useAssetsUrl(\"${key.slice(12)}\"),`);
  // });
  const fullUrl = `/src/assets/${url}`;

  if (modules[fullUrl]) {
    return modules[fullUrl].name;
  } else {
    throw new Error("Not found in assets");
  }
}
