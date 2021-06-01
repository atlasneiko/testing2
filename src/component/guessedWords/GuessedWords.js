import React from 'react';
import propTypes from 'prop-types';
const GuessedWords = ({ guessedWords }) => {
  let content;
  if (guessedWords.length === 0) {
    content = (
      <span data-test='guess-instructions'>Try to guess the secret word!</span>
    );
  } else {
    content = (
      <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table className='table table-sm'>
          <thead className='thead-dark '>
            <tr>
              <th>Guessed</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((guessedWord) => {
              return (
                <tr
                  data-test='guessed-word'
                  key={`guessed-word-${guessedWord.guessedWord}`}>
                  <td>{guessedWord.guessedWord}</td>
                  <td>{guessedWord.letterMatchCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return <div data-test='component-guessed-words'>{content}</div>;
};
GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;
