import { FC, SVGProps } from "react";

export const RussianFlagIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 22,
  height = 20,
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
    <rect x={1.5} y={4.5} width={21} height={15} rx={2} fill="#F5F5F5" />
    <mask
      id="a"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={4}
      width={22}
      height={16}
    >
      <rect
        x={1.75}
        y={4.75}
        width={20.5}
        height={14.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M1.5 14.5h21v-5h-21v5Z" fill="#0C47B7" />
      <path d="M1.5 19.5h21v-5h-21v5Z" fill="#E53B35" />
    </g>
  </svg>
);
