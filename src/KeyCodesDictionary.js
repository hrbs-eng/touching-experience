import React, { Component } from "react";

class KeyCodesDictionary extends Component {
  constructor(props) {
    super();

    this.state = {
      key: "No key pressed yet"
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.updateCurrentKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.updateCurrentKey, false);
  }

  updateCurrentKey = event => {
    this.setState({ key: event.code });
  };

  render() {
    return <h4>{this.state.key}</h4>;
  }
}

export default KeyCodesDictionary;
