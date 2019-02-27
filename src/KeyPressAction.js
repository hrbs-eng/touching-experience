import React, { Component, Fragment } from "react";

class KeyPressAction extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.executeAction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.executeAction, false);
  }

  executeAction = event => {
    if (event.keyCode === this.props.keyCode) {
      this.props.action();
    }
  };

  render() {
    return <Fragment />;
  }
}

export default KeyPressAction;
