import React from "react";

const sizes = {
  "3xl": "text-[35px] font-bold md:text-[33px] sm:text-[31px]",
  "2xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  xl: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  s: "text-lg font-semibold",
  md: "text-xl font-semibold",
  xs: "text-base font-semibold",
  lg: "text-[21px] font-semibold",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-amiko ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
