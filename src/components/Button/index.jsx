import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[30px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    teal_400: "bg-teal-400 text-white-A700",
    teal_800: "bg-teal-800 shadow-xs text-white-A700",
  },
};
const sizes = {
  sm: "h-[50px] px-[35px] text-lg",
  lg: "h-[70px]",
  xs: "h-[40px]",
  xl: "h-[75px] px-[35px] text-3xl",
  md: "h-[60px] px-[35px] text-[25px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "teal_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "lg", "xs", "xl", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["teal_400", "teal_800"]),
};

export { Button };
