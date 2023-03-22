import { FC, SVGProps } from "react";

export const EnglandFlagIcon: FC<SVGProps<SVGSVGElement>> = ({
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
    <rect x={1.5} y={4.5} width={21} height={15} rx={2} fill="#fff" />
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
      <rect x={1.5} y={4.5} width={21} height={15} rx={2} fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path fill="#0A17A7" d="M1.5 4.5h21v15h-21z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.505 14.5-.58 19.28l1.118 1.657L9.5 14.892V20.5h5v-5.607l8.962 6.044 1.118-1.658-7.085-4.779H22.5v-5h-5.005l7.085-4.78-1.118-1.657L14.5 9.108V3.5h-5v5.608L.538 3.063-.58 4.72 6.505 9.5H1.5v5h5.005Z"
        fill="#fff"
      />
      <path
        d="M15.501 9.25 25 3M16.51 14.773l8.515 5.74M7.504 9.233l-8.882-5.986M8.468 14.704l-9.846 6.529"
        stroke="#DB1F35"
        strokeWidth={0.667}
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 13.5h9v6h3v-6h9v-3h-9v-6h-3v6h-9v3Z"
        fill="#E6273E"
      />
    </g>
  </svg>
);
