import React from "react";

const sizes = {
  xs: "text-2xl font-normal md:text-[22px]",
  lg: "text-[41px] font-normal md:text-[37px] sm:text-[31px]",
  s: "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  "2xl": "text-[70px] font-normal md:text-5xl",
  "3xl": "text-[130px] font-normal md:text-5xl",
  xl: "text-[50px] font-normal md:text-[46px] sm:text-[40px]",
  md: "text-[26px] font-normal md:text-2xl sm:text-[22px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-amiko ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
