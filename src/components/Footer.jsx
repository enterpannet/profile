import React from "react";
import GithubLogo from "../assets/images/github.svg";
import LinkedinLogo from "../assets/images/linkedin.svg";
import FacebookLogo from "../assets/images/facebook.svg";
import ThaiIcon from "../assets/images/thai.png";
function Footer() {
  return (
    <div className=" bg-[#2F4063] text-white min-w-[375px]">
      <hr />
      <div className=" px-5 py-2 lg:text-center">
        <h1>Contact Me</h1>
      </div>
      <hr />
      <div className="px-5 text-xs py-2 flex flex-row justify-center gap-5 items-center md:gap-10">
        <a href="https://github.com/enterpannet">
          <img src={GithubLogo} alt="github" width={150} />
        </a>
        <a href="https://www.linkedin.com/in/enterpannet/">
          <img src={LinkedinLogo} alt="github" height={50} />
        </a>
        <a href="https://www.facebook.com/lord6oflove">
          <img src={FacebookLogo} alt="github" height={100} width={100} />
        </a>
      </div>
      <hr />
      <div className=" px-5 py-2 lg:text-center">
        <h1>If you want to donate me for no reason</h1>
      </div>
      <hr />
      <div className="px-5 text-xs py-2 flex flex-row justify-center gap-5 items-center md:gap-10">
        <a href="https://www.facebook.com/lord6oflove">
          <img src={ThaiIcon} alt="github" height={150} width={150} />
        </a>
      </div>
      <div className=" pb-5"></div>
    </div>
  );
}

export default Footer;
