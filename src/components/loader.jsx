import React from "react";

export function Loader(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={0} fill="currentColor">
        <animate
          id="SVGHRb9bJhy"
          fill="freeze"
          attributeName="r"
          begin="0;SVGUoIUme6Z.begin+0.6s"
          calcMode="spline"
          dur="1.8s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="0;SVGUoIUme6Z.begin+0.6s"
          calcMode="spline"
          dur="1.8s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        ></animate>
      </circle>
    </svg>
  );
}
