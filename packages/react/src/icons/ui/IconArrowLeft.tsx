import React from 'react';

import { IconProps } from '../Icon.interface';

const IconArrowLeft: React.FC<IconProps> = ({ className = '', style = {} }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path fill="currentColor" d="M10 5.636l1.414 1.414L7.465 11H20v2H7.464l3.95 3.95L10 18.364 3.636 12z" />
    </g>
  </svg>
);

export default IconArrowLeft;