import { FC, SVGProps } from "react";

export const SearchIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 16,
  height = 16,
  className,
  ...otherProps
}) => (
  <svg
    {...otherProps}
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 1a5.5 5.5 0 0 1 4.383 8.823l3.896 3.9a.75.75 0 0 1-1.061 1.06l-3.895-3.9A5.5 5.5 0 1 1 6.5 1Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      fill="currentColor"
    />
  </svg>
);
