import React, { Component } from 'react';

class ClassComponent extends Component {
    state = {
        count: 0
      };
    
      handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
      };
    
      handleDecrement = () => {
        if(this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
      };

  render() {
    return (
      <div>
        <h1>Click Counter</h1>
        <button onClick={this.handleIncrement}>+</button>
        <p>You have clicked the button {this.state.count} times.</p>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default ClassComponent;
