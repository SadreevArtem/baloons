

import React from "react";

type Props = {
  className?: string;
};

export const Search: React.FC<Props> = ({ className = "" }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10.1224"
      cy="10.8801"
      r="7.69888"
      transform="rotate(47.1675 10.1224 10.8801)"
      stroke="#9d8c98"
      strokeWidth="2"
    ></circle>
    <line
      x1="16.4142"
      y1="17"
      x2="20.3033"
      y2="20.8891"
      stroke="#9d8c98"
      strokeWidth="2"
      strokeLinecap="round"
    ></line>
  </svg>
);
  