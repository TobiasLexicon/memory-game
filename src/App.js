import './App.css';
import { useState } from 'react';
import { NewGame } from './data/newGame';
import { MemorialCard } from './component/MemorialCard';
import MemoryContext from './data/memoryContext';

function App() {
  const [cardMix, setCardMix] = useState(NewGame);
  const [guesses, setGuesses] = useState(0);
  const [firstGuess, setFirstGuess] = useState(-1);
  const [secondGuess, setSecondGuess] = useState(-1);
  const [solved, setSolved] = useState(0);

  const compare = () => {
    if (cardMix[firstGuess].image === cardMix[secondGuess].image) {
      remove();
      setSolved(solved + 1);
    } else {
      flip(firstGuess);
      flip(secondGuess);
    }
    setGuesses(0);
    setFirstGuess(-1);
    setSecondGuess(-1);
  };

  const choose = index => {
    if (guesses === 0) {
      setGuesses(1);
      setFirstGuess(index);
      flip(index);
    } else if (guesses === 1) {
      setGuesses(2);
      setSecondGuess(index);
      flip(index);
    } else {
      compare();
    }
  };

  const flip = index => {
    const tempCardMix = [...cardMix];
    tempCardMix[index].reveal = tempCardMix[index].reveal ? false : true;
    setCardMix(tempCardMix);
  };

  const remove = () => {
    const tempCardMix = [...cardMix];
    tempCardMix[firstGuess].play = false;
    tempCardMix[secondGuess].play = false;
    setCardMix(tempCardMix);
  };

  return (
    <MemoryContext.Provider value={12}>
      <div className='App'>
        {cardMix.map((card, index) => (
          <MemorialCard card={card} key={index} choose={choose} index={index} />
        ))}
      </div>
    </MemoryContext.Provider>
  );
}

export default App;
