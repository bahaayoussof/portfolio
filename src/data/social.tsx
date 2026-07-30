import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandLeetcode,
} from "@tabler/icons-react";
import type { SocialLink } from "../types/social";

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Github",
    icon: <IconBrandGithub size={20} />,
    link: "https://github.com/bahaayoussof",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: <IconBrandLinkedin size={20} />,
    link: "https://www.linkedin.com/in/bahaayoussof/",
  },
  {
    id: 3,
    name: "Email",
    icon: <IconMail size={20} />,
    link: "mailto:bahaayoussof@gmail.com",
  },
  {
    id: 4,
    name: "Leetcode",
    icon: <IconBrandLeetcode size={20} />,
    link: "https://leetcode.com/bahaayoussof/",
  },
];
