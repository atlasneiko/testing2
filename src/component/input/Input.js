import React, { useState } from 'react';
import propTypes from 'prop-types';
const Input = ({ secretWord, success }) => {
  const [currentGuess, setCurrentGuess] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentGuess('');
  };
  if (success) {
    return <div data-test='component-input'></div>;
  } else {
    return (
      <div data-test='component-input'>
        <form className='form-inline'>
          <input
            data-test='input-box'
            className='mb-2 mx-sm-3'
            type='text'
            placeholder='enter guess'
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
          />
          <button
            data-test='submit-btn'
            className='btn btn-primary mb-2'
            onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
};

Input.propTypes = {
  secretWord: propTypes.string.isRequired,
};

export default Input;
