import React from 'react';

type Props = { className?: string };

export default ({ className = '' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" className={className}>
    <path d="M10.63596,17.97822 L10.63596,21.63042 L13.10796,21.63042 L13.10796,17.97822 L14.79336,17.97822 L14.79336,23.31582 L8.95056,23.31582 L8.95056,17.97822 L10.63596,17.97822 Z M12.912,7.5849 C14.3556,7.5849 15.5934,8.5665 15.9216,9.9729 L15.9216,9.9729 L17.7438,17.7873 L16.1022,18.1701 L14.2794,10.3557 C14.1306,9.7167 13.5684,9.2703 12.912,9.2703 L12.912,9.2703 L10.8552,9.2703 C10.2012,9.2703 9.639,9.7149 9.4884,10.3521 L9.4884,10.3521 L7.6404,18.1725 L6,17.7849 L7.848,9.9645 C8.1786,8.5635 9.4158,7.5849 10.8552,7.5849 L10.8552,7.5849 Z M11.87202,3.28626015e-13 C13.51662,3.28626015e-13 14.84982,1.3332 14.84982,2.9778 C14.84982,4.623 13.51662,5.9556 11.87202,5.9556 C10.22742,5.9556 8.89422,4.623 8.89422,2.9778 C8.89422,1.3332 10.22742,3.28626015e-13 11.87202,3.28626015e-13 Z M11.87202,1.6854 C11.15922,1.6854 10.57962,2.265 10.57962,2.9778 C10.57962,3.69 11.15922,4.2702 11.87202,4.2702 C12.58422,4.2702 13.16382,3.69 13.16382,2.9778 C13.16382,2.265 12.58422,1.6854 11.87202,1.6854 Z" />
  </svg>
);