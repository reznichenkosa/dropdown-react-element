import { FC, SVGProps } from "react";

export const GermanFlagIcon: FC<SVGProps<SVGSVGElement>> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 9.5h21v-5h-21v5Z" fill="#262626" />
      <g filter="url(#b)">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 14.5h21v-5h-21v5Z" fill="#F01515" />
      </g>
      <g filter="url(#c)">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5h21v-5h-21v5Z" fill="#FFD521" />
      </g>
    </g>
    <defs>
      <filter
        id="b"
        x={1.5}
        y={9.5}
        width={21}
        height={5}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1381_225" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1381_225" result="shape" />
      </filter>
      <filter
        id="c"
        x={1.5}
        y={14.5}
        width={21}
        height={5}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1381_225" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1381_225" result="shape" />
      </filter>
    </defs>
  </svg>
);
