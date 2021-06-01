import Congrats from './component/congrats/congrats';
import GuessedWords from './component/guessedWords/GuessedWords';
function App() {
  return (
    <div className='App container'>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
