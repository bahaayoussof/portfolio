import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/bahaayoussof/"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/bahaayoussof"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandGithub />
        </a>
      </div>
      <div>
        <a
          href="https://leetcode.com/bahaayoussof/"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandLeetcode />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
