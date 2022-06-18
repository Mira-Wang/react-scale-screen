/*
 * @Description:
 * @Version: 1.0
 * @Author: Knight
 * @Date: 2022-06-18 12:14:39
 * @LastEditors: Knight
 * @LastEditTime: 2022-06-18 12:54:40
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ScaleScreen from './index';

describe('<ScaleScreen />', () => {
  it('render ScaleScreen with dumi', () => {
    render(<ScaleScreen width={1920} height={1080} />);
    expect(screen.queryByText('msg')).toBeInTheDocument();
  });
});
