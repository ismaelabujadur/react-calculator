import { Component } from 'react';
import { connect } from 'react-redux';
import { calculate } from './store/actions/calculate'
import { reset } from './store/actions/reset'
import { delete_character } from './store/actions/delete'
import './App.scss';
import Calculator from './components/calculator';
import * as fromCalculator from './store';

export class App extends Component {
  render() {
    return (
      <div className="calculator--container">
        <Calculator.Screen {...this.props} />
        <Calculator.NumPad {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (buttonKey) => {
      dispatch(calculate(buttonKey))
    },
    reset: () => {
      dispatch(reset())
    },
    delete_character: () => {
      dispatch(delete_character())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
