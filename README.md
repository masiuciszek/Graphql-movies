# Hang man App with React 🧛‍♂️🤙🏻λ⚛️🤗

### start the project

<img src="" width="250" height="300"  alt="hangman-game" />

* git clone the project 🎸
* cd into project 💅🏻
* yarn/npm install ❤️
* yarn/npm start 💙

<br/>

### What really mad a big difference for me !!!  👩🏻‍💻

#### I made a custom hook , (useKeyEvent) hook 🛠

you will get every letter you type on your keyboard without any uneseserry memory leak and re rendering.

``` tsx
import * as React from 'react';

const useKeyEvent = () => {
  const [letter, setLetter] = React.useState<string>('');

  const handleKeyEvent = (event: KeyboardEvent) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      setLetter(event.key);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyEvent);

  // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  });

  return letter;
};

export default useKeyEvent;

```

<br/>

### Context hooks ⚽️⚓️

``` tsx
const useWordState = () => {
  const context = React.useContext(WordStateContext);
  if (context === undefined) {
    throw new Error('WordState need to bee wrapped inside WordProvider');
  }
  return context;
};

const useWordDispatch = () => {
  const context = React.useContext(WordContextDispatch);
  if (context === undefined) {
    throw new Error('WordState need to bee wrapped inside WordProvider');
  }
  return context;
};

```
