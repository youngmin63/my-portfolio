// components/SocialLinks.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodepen, SiGoodreads } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div
      className="fixed bottom-8 left-16
 flex gap-6 text-[#8892b0] z-40"
    >
      <a href="https://github.com/youngmin63" target="_blank" rel="noreferrer">
        <FaGithub size={20} />
      </a>
      <a
        href="https://linkedin.com/in/yourname"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="https://instagram.com/instayoungmin"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={20} />
      </a>
    </div>
  );
}
