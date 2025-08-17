import type { JSX } from "react/jsx-dev-runtime";

import BaseIcon from "./BaseIcon";
import type { IconBaseProps } from "./types";

const TerraformIcon = ({ size }: IconBaseProps): JSX.Element => {
  return (
    <BaseIcon
      size={size}
      icon={
        <svg
          className="bg-back"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#844FBA" }}
          fill="currentColor"
        >
          <title>Terraform</title>
          <path d="M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z" />
        </svg>
      }
    />
  );
};

export default TerraformIcon;
