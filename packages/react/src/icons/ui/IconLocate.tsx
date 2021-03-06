import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconLocate = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M13 2l.001 2.062A8.004 8.004 0 0119.938 11H22v2l-2.062.001a8.004 8.004 0 01-6.937 6.937L13 22h-2v-2.062a8.004 8.004 0 01-6.938-6.937L2 13v-2h2.062A8.004 8.004 0 0111 4.062V2h2zm-1 4a6 6 0 100 12 6 6 0 000-12zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill="currentColor"
      />
    </g>
  </svg>
);
