import {nanoid} from "nanoid";
import image from "./images/image.svg";
import star1 from "./images/star1.svg";
import star2 from "./images/star2.svg";
import banner from "./images/banner.svg";

export const newsLink = ["Сейчас в СМИ", "в Германии", "Рекомендуем"];

export const news = [
  {id: nanoid(), icon: star1, link: "#", text: "Текст новости"},
  {id: nanoid(), icon: star2, link: "#", text: "Текст новости"},
  {id: nanoid(), icon: star1, link: "#", text: "Текст новости"},
  {id: nanoid(), icon: star2, link: "#", text: "Текст новости"},
  {id: nanoid(), icon: star1, link: "#", text: "Текст новости"}
];

export const course = [
  {title: "USD MOEX", rate: "65.52", changes: "+0.09"},
  {title: "EUR MOEX", rate: "65.52", changes: "+0.09"},
  {title: "НЕФТЬ", rate: "65.52", changes: "+0.09"},
];

export const bannerSmall = {
  img: image,
  title: "Работа над ошибками",
  text: "Смотрите на Яндексе и запоминайте",
  link: "#"
}

export const searchLinks = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "еще"];

export const bannerBig = {
  img: banner,
  link: "#"
}

export const weather = {
  img: star1,
  now: "+17",
  morning: "+17",
  day: "+20"
}

export const visited = [
  {id: nanoid(), title: "Недвижимость", text: "о сталинках"},
  {id: nanoid(), title: "Недвижимость", text: "о сталинках"},
  {id: nanoid(), title: "Недвижимость", text: "о сталинках"},
]

export const programTV = [
  {id: nanoid(), time: "02:00", channel: "Discovery", program: "Джунгли"},
  {id: nanoid(), time: "02:00", channel: "Discovery", program: "Джунгли"},
  {id: nanoid(), time: "02:00", channel: "Discovery", program: "Джунгли"},
]

export const ether = [
  {id: nanoid(), title: "Джунгли", channel: "Discovery"},
  {id: nanoid(), title: "Джунгли", channel: "Discovery"},
  {id: nanoid(), title: "Джунгли", channel: "Discovery"},
]