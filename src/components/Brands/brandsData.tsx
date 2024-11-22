import { Brand } from "@/types/brand";
import { getImagePath } from "../image_basepath";

const brandsData: Brand[] = [
  {
    id: 6,
    name: "Formbold",
    href: "https://formbold.com",
    image: getImagePath("/images/brands/formbold.svg"),
    imageLight: getImagePath("/images/brands/formbold-light.svg"),
  },
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: getImagePath("/images/brands/uideck.svg"),
    imageLight: getImagePath("/images/brands/uideck-light.svg"),
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: getImagePath("/images/brands/tailgrids.svg"),
    imageLight: getImagePath("/images/brands/tailgrids-light.svg"),
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: getImagePath("/images/brands/lineicons.svg"),
    imageLight: getImagePath("/images/brands/lineicons-light.svg"),
  },
  {
    id: 4,
    name: "Tailadmin",
    href: "https://tailadmin.com",
    image: getImagePath("/images/brands/tailadmin.svg"),
    imageLight: getImagePath("/images/brands/tailadmin-light.svg"),
  },
  {
    id: 5,
    name: "PlainAdmin",
    href: "https://plainadmin.com",
    image: getImagePath("/images/brands/plainadmin.svg"),
    imageLight: getImagePath("/images/brands/plainadmin-light.svg"),
  },
];

export default brandsData;
