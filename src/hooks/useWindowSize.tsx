/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2022-05-11 21:55:22
 * @LastEditors: Knight
 * @LastEditTime: 2022-05-11 22:14:48
 */
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
