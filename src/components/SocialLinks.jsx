// components/SocialLinks.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks({ inline = false }) {
  const baseStyle = "flex gap-6 text-[#8892b0]";
  const positionStyle = inline ? "" : "fixed bottom-8 left-16 z-40";

  return (
    <div className={`${baseStyle} ${positionStyle}`}>
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
