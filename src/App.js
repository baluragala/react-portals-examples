import React, { Component } from "react";
import "./App.css";
import NewWindowPortal from "./NewWindowPortal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showWindowPortal: false
    };

    this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState(state => ({
        ...state,
        counter: state.counter + 1
      }));
    }, 1000);
  }

  toggleWindowPortal() {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>

        <button onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? "Close the" : "Open a"} Portal
        </button>

        {this.state.showWindowPortal && (
          <NewWindowPortal>
            <h1>Counter in a portal: {this.state.counter}</h1>
            <p>Even though I render in a different window, I share state!</p>

            <button onClick={() => this.setState({ showWindowPortal: false })}>
              Close me!
            </button>
          </NewWindowPortal>
        )}
      </div>
    );
  }
}

export default App;
