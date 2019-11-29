import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops.cjs';

import classNames from '../../utils/classNames';
import Notification, { NotificationProps } from './Notification';
import IconClose from '../../icons/IconClose';
import styles from './DismissableNotification.module.css';

export default (props: NotificationProps) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <Transition config={{ tension: 300, friction: 30 }} items={isOpen} enter={{ height: 'auto' }} leave={{ height: 0 }}>
      {show =>
        show &&
        (transitionProps => (
          <div style={{ ...transitionProps, ...{ overflowY: 'hidden' } }}>
            <Notification {...props}>
              <button
                className={classNames(styles.buttonClose, styles[props.type])}
                type="button"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <IconClose className={styles.iconClose} />
              </button>
              {props.children}
            </Notification>
          </div>
        ))
      }
    </Transition>
  );
};
