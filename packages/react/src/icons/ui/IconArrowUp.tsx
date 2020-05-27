import React from 'react';

import { IconProps } from '../Icon.interface';

const IconArrowUp: React.FC<IconProps> = ({ className = '', style = {} }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path fill="currentColor" d="M12 3.636L18.364 10l-1.414 1.414L13 7.464V20h-2V7.465l-3.95 3.95L5.636 10z" />
    </g>
  </svg>
);

export default IconArrowUp;