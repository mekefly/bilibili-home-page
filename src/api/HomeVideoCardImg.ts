import useAssetsUrl from "../utils/assets";
import { generateUUID } from "../utils/uuid";

export interface CardData {
  id: string;
  infoTit: string;
  infoAuthor: string;
  infoDate: Date;
  numberOfPlays: number;
  numberOfAmmunition: number;
  duration: number;
  cardImg: string;
  href: string;
}

export async function getVideoCardDataList(): Promise<CardData[]> {
  return [
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
    {
      id: generateUUID(),
      infoTit: "这谁家火箭，管线是起飞时直接拉断的？",
      infoAuthor: "小布敢",
      infoDate: new Date("2022-09-26 18:06:32"),
      numberOfPlays: 6_090_000,
      numberOfAmmunition: 459,
      duration: 239,
      cardImg: useAssetsUrl("bili-video-card-img/10003.jpg"),
      href: "https://www.bilibili.com/video/BV18841147RK/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=1c40c19de57aef14c21fde0c909a7243",
    },
  ];
}
