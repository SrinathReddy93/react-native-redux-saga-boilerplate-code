import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import Test from './src/Test'


const store = configureStore()
export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoading: true
      };
  }
  render() {
      return (
          <Provider store={store}>
              <Test />
          </Provider>
      );
  }
}
