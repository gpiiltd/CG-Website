import React, { type ElementType } from "react";
import { cn } from "../lib/utils";
import { type SizeKey, type WeightKey } from "./typography.config";

export type TypographyProps<T extends ElementType> = {
  as?: T;
  size?: SizeKey | Record<string, SizeKey>;
  weight?: WeightKey | Record<string, WeightKey>;
  color?: "primary" | "secondary" | "warning" | "error";
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<T>;

const getSizeClass = (size: SizeKey | Record<string, SizeKey>) => {
  if (typeof size === "string") {
    return `text-${size}`;
  } else {
    return Object.keys(size)
      .map((breakpoint) => {
        const sizeValue = size[breakpoint];
        return breakpoint === "base"
          ? `text-${sizeValue}`
          : `${breakpoint}:text-${sizeValue}`;
      })
      .join(" ");
  }
};

const getWeightClass = (weight: WeightKey | Record<string, WeightKey>) => {
  const mapWeight = (w: WeightKey) => {
    switch (w) {
      case "extra_light":
        return "font-thin";
      case "light":
        return "font-light";
      case "normal":
        return "font-normal";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      default:
        return "";
    }
  };

  if (typeof weight === "string") {
    return mapWeight(weight);
  } else {
    return Object.keys(weight)
      .map((breakpoint) => {
        const weightValue = weight[breakpoint];
        return breakpoint === "base"
          ? mapWeight(weightValue)
          : `${breakpoint}:${mapWeight(weightValue)}`;
      })
      .join(" ");
  }
};

const getColorClass = (color: string) => {
  switch (color) {
    case "primary":
      return "text-[#11092F]";
    case "secondary":
      return "text-secondary";
    case "warning":
      return "text-yellow-500";
    case "error":
      return "text-red-500";
    default:
      return "";
  }
};

export const Typography = <T extends ElementType = "p">({
  as,
  size,
  weight,
  color,
  className,
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = as || "p";
  const sizeClass = size ? getSizeClass(size) : "";
  const weightClass = weight ? getWeightClass(weight) : "";
  const colorClass = color ? getColorClass(color) : "";

  return (
    <Component
      className={cn("font-body", sizeClass, weightClass, colorClass, className)}
      {...props}
    >
      {children}
    </Component>
  );
};
