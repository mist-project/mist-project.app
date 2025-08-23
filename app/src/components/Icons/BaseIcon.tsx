import classNames from "classnames";
import type { JSX } from "react/jsx-dev-runtime";

export type IconBaseProps = {
  icon: JSX.Element;
  size?: "x-small" | "small" | "medium" | "large";
};

const BaseIcon = ({ size = "small", icon }: IconBaseProps): JSX.Element => {
  const sizeClasses = classNames({
    "w-2 h-2": size == "x-small",
    "w-3 h-3": size == "small",
    "w-4 h-4": size == "medium",
    "w-5 h-5": size == "large",
  });

  return <div className={sizeClasses}>{icon}</div>;
};

export default BaseIcon;
