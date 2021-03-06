import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconVideocamera = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M13 5a4 4 0 013.982 3.62L23 6.612v10.774l-6.018-2.006a4 4 0 01-3.775 3.614L13 19H5a4 4 0 01-3.995-3.8L1 15V9a4 4 0 013.8-3.995L5 5h8zm0 2H5a2 2 0 00-1.995 1.85L3 9v6a2 2 0 001.85 1.995L5 17h8a2 2 0 001.995-1.85L15 15V9a2 2 0 00-1.85-1.995L13 7zm8 2.387l-4 1.333v2.559l4 1.333V9.387zM6 9a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
    </g>
  </svg>
);
