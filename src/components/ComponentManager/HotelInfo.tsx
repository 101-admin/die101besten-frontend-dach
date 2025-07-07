import React from "react";
import { type DasBuch } from "@/lib";
import Link from "next/link";
import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "../ui/ColoredText";

const HotelInfo = ({
  title,
  image,
  ctaButton,
  body,
  imagePosition,
  bgColor,
  id,
}: DasBuch) => {
  return (
    <section
      id={id}
      className={` ${
        bgColor == "white" ? "bg-white" : "bg-[#F9F8FA]"
      } w-full  max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-36 select-none`}
    >
      <div className="w-full flex flex-col justify-center items-center px-5 lg:px-16">
        <div
          className={`w-full lg:w-[95%] flex flex-col  justify-center items-center gap-10 ${
            imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="w-[70%] flex justify-center">
            {image && (
              <img
                className="sm:max-w-[428px] sm:max-h-[508px]"
                src={`${image?.url}`}
                alt={`${image?.alt}`}
              />
            )}
          </div>
          <div className="w-full flex flex-col justify-start items-baseline max-w-[698px] gap-6">
            {title && (
              <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px]">
                <ColoredText text={title} />
              </h1>
            )}
            {body && (
              <h4 className="font-gte font-normal text-[16px] sm:text-[20px] text-black">
                {body && <PortableText value={body} />}
              </h4>
            )}
            {ctaButton && (
              <Link target="_blank" href={`${ctaButton?.link}`}>
                <button className="btn-primary btn-primary-hover-de ">
                  {ctaButton?.text}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelInfo;
