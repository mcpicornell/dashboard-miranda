import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { render, screen, cleanup, getByTestId } from '@testing-library/react';
import {Button} from './button';

afterEach(cleanup)
test('button backgroundColor', () => {
    
    const { getByTestId } = render(<Button backgroundColor="red" data-testid="test-button" />);
    const button = getByTestId("test-button");
    expect(button).toHaveStyle("background-color: red")
  });