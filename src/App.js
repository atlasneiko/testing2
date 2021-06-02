import Congrats from './component/congrats/congrats';
import GuessedWords from './component/guessedWords/GuessedWords';
import Input from './component/input/Input';
function App() {
  return (
    <div className='App container' data-test='component-app'>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
      <Input secretWord='train' />
    </div>
  );
}

export default App;
