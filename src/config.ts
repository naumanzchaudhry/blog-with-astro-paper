import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://naumanzafar.dev/",
  author: "Nauman Zafar",
  desc: "Nauman's Personal Blog",
  title: "Nauman Zafar - Software Developer",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/naumanzchaudhry",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/naumanz1/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
];
