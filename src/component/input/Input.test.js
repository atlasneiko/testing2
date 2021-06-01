import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import Input from './Input';
const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));
const defaultProps = {
  secretWord: 'carot',
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(Input, defaultProps);
});
test('Input renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});
describe('state controlled input field', () => {
  let wrapper;
  let originalUseState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  test('state updates with value of input box onChange', () => {
    // const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  test('clearing current guess when submit', () => {
    // const wrapper = setup();
    const submitBtn = findByTestAttr(wrapper, 'submit-btn');
    submitBtn.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
describe('render', () => {
  describe('success is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });
    test('submit btn does not show', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-btn');
      expect(submitBtn.exists()).toBe(false);
    });
  });
  describe('success is false', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test('input box does show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });
    test('submit btn does show', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-btn');
      expect(submitBtn.exists()).toBe(true);
    });
  });
});
