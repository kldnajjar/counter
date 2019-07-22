import React, { Component } from "react";
import "./App.css";
import Counters from "./component/counters";
import Nav from "./component/nav";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
      { id: 5, value: 0 }
    ]
  };

  removeCounter = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  incrementCounter = counter => {
    const { counters } = this.state;
    const index = counters.indexOf(counter);
    counters[index].value = counter.value + 1;
    this.setState({ counters });
  };

  decrementCounter = counter => {
    const { counters } = this.state;
    const index = counters.indexOf(counter);
    counters[index].value = counter.value - 1;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <Nav />
        </header>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.removeCounter}
            onIncrement={this.incrementCounter}
            onDecrement={this.decrementCounter}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
