import cn from "classnames";
import styles from "./Flex.module.scss";
import { PropsWithChildren } from "react";

type baseSpaceTypes = "start" | "end" | "center" | "stretch";

type baseAlignTypes = "baseline" | "normal" | "inherit";

type aligns = baseSpaceTypes | baseAlignTypes;

type ElementProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  "children"
>;

export interface FlexProps extends ElementProps, PropsWithChildren {
  alignItems?: aligns;
  alignSelf?: aligns;
  as?: React.ElementType;
  fullHeight?: boolean;
  fullWidth?: boolean;
  gap?: number;
  isColumn?: boolean;
  isWrap?: boolean;
  justifyContent?: baseSpaceTypes | "between" | "around";
}

export const Flex = ({
  alignItems = "start",
  alignSelf = "inherit",
  as: Component = "div",
  children,
  className,
  fullHeight,
  fullWidth,
  gap,
  isColumn,
  isWrap,
  justifyContent = "start",
  style = {},
  ...props
}: FlexProps) => {
  const gapCSS = gap ? { "--flex-gap": `${gap}px` } : {};

  const classes = cn(
    styles.flex,
    [styles[`justify-${justifyContent}`]],
    [styles[`align-${alignItems}`]],
    [styles[`align-self-${alignSelf}`]],
    {
      [styles.column]: !!isColumn,
      [styles.gap]: !!gap,
      [styles["full-width"]]: !!fullWidth,
      [styles["full-height"]]: !!fullHeight,
      [styles.wrap]: !!isWrap,
    },
    className,
  );

  return (
    <Component style={{ ...style, ...gapCSS }} className={classes} {...props}>
      {children}
    </Component>
  );
};
