import { FC, SVGProps } from "react";

export const SpanishFlagIcon: FC<SVGProps<SVGSVGElement>> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 8.5h21v-4h-21v4ZM1.5 19.5h21v-4h-21v4Z"
        fill="#DD172C"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 15.5h21v-7h-21v7Z" fill="#FFD133" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 11.5h1v.5H7v-.5Z" fill="#FFEDB1" />
      <path
        d="M6.142 11.694a.333.333 0 0 1 .333-.36h1.05c.195 0 .349.166.333.36l-.107 1.282a.753.753 0 0 1-1.502 0l-.107-1.282Z"
        stroke="#A41517"
        strokeWidth={0.667}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12h2v.5h-.5l-.5 1-.5-1H6V12Z"
        fill="#A41517"
      />
      <rect x={4.5} y={10.5} width={1} height={3.5} rx={0.5} fill="#A41517" />
      <rect x={8.5} y={10.5} width={1} height={3.5} rx={0.5} fill="#A41517" />
      <path
        d="M6 10.3a.8.8 0 0 1 .8-.8h.4a.8.8 0 0 1 .8.8.2.2 0 0 1-.2.2H6.2a.2.2 0 0 1-.2-.2Z"
        fill="#A41517"
      />
    </g>
  </svg>
);
