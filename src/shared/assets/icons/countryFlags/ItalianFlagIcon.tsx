import { FC, SVGProps } from "react";

export const ItalianFlagIcon: FC<SVGProps<SVGSVGElement>> = ({
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
    <rect
      x={1.75}
      y={4.75}
      width={20.5}
      height={14.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
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
    <g mask="url(#a)">
      <path fill="#E43D4C" d="M15.5 4.5h7v15h-7z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5h7v-15h-7v15Z" fill="#1BB65D" />
    </g>
  </svg>
);
