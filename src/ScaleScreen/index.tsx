/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2022-06-18 12:14:39
 * @LastEditors: Knight
 * @LastEditTime: 2022-06-18 12:59:33
 */
import { useDebounceEffect } from 'ahooks';
import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import './index.css';

export default (props: { width: number; height: number; children?: React.ReactNode }) => {
  const { width, height } = useWindowSize();
  const [transform, setTransform] = useState('scale(1)');

  useDebounceEffect(
    () => {
      const scale = width / height < 1920 / 360 ? width / 1920 : height / 360;

      setTransform(`scale(${scale}) translate(-50%)`);
    },
    [width, height],
    { wait: 500, leading: true },
  );

  return (
    <div className="scale-screen">
      <div
        className="scale-screen-container"
        style={{ width: props.width, height: props.height, transform }}
      >
        {props?.children}
      </div>
    </div>
  );
};
