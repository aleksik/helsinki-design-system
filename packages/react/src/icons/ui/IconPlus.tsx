import React from 'react';

import { IconProps } from '../Icon.interface';

const IconPlus: React.FC<IconProps> = ({ className = '', style = {} }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path fill="currentColor" d="M13 6v5h5v2h-5v5h-2v-5H6v-2h5V6z" />
    </g>
  </svg>
);

export default IconPlus;