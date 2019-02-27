import React, { Component, Fragment } from "react";

class KeyPressAction extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.executeAction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.executeAction, false);
  }

  executeAction = event => {
    if (event.code === this.props.keyCode && !event.repeat) {
      this.props.action();
    }
  };

  render() {
    return <Fragment />;
  }
}

export default KeyPressAction;
