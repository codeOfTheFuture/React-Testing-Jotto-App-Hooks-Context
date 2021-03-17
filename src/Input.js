import React from "react";

const Input = () => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          placeholder='enter guess'
          type='text'
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          onClick={(event) => {
            event.preventDefault();
            // TODO: update guessedWords
            // TODO: check against secretWord and update success if needed
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
