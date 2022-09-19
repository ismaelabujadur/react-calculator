import React from 'react';
// import logo from './logo.svg';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import './App.css';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import { calculate } from './store/actions/calculate';
import * as fromCalculator from './store';
import { connect } from 'react-redux';

const buttonValues = [
  "C", "del", "%", "/",
  7, 8, 9, "x",
  4, 5, 6, "-",
  1, 2, 3, "+",
  "↔", 0, ".", "=",
];

const mathOperators = ["/", "x", "-", "+"];

const mapStateToProps = (state: { calculator: { expression: any; total: any; }; }) => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  }
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: string; }) => void) => {
  return {
    calculate: (buttonKey: string) => {
      dispatch(calculate(buttonKey))
    },
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Screen expression="0" total="0" />
          <ButtonBox>
            {
              buttonValues.map((button, index) =>
                <Button key={button} className={(button === "=" ? "equals" : "") + " " + (mathOperators.includes(`${button}`) ? 'math-operator' : '')} value={button}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
