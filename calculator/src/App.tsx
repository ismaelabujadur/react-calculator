import React from 'react';
// import logo from './logo.svg';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import './App.css';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const buttonValues = [
  "C", "+-", "%", "/",
  7, 8, 9, "x",
  4, 5, 6, "-",
  1, 2, 3, "+",
  "↔", 0, ".", "=",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Screen value="0" />
          <ButtonBox>
            {
              buttonValues.map((button) =>
                <Button key={button} className={button == "=" ? "equals" : ""} value={button}
                  onClick={() => {
                    console.log(`${button} clicked!`);
                  }} />
              )}
          </ButtonBox>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
