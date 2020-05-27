import React from 'react';

import { IconProps } from '../Icon.interface';

const IconLinkedin: React.FC<IconProps> = ({ className = '', style = {} }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19.071 3H4.93A1.93 1.93 0 003 4.929V19.07A1.93 1.93 0 004.929 21H19.07A1.93 1.93 0 0021 19.071V4.93A1.93 1.93 0 0019.071 3zM5.772 18.429v-8.59h2.672v8.59H5.772zM5.56 7.119a1.548 1.548 0 113.095 0 1.548 1.548 0 01-3.095 0zm10.214 11.31V14.25c0-.996-.02-2.278-1.386-2.278-1.39 0-1.604 1.085-1.604 2.206v4.25h-2.667v-8.59h2.559v1.174h.036c.358-.675 1.23-1.387 2.527-1.387 2.7 0 3.203 1.78 3.203 4.095v4.709h-2.668z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconLinkedin;