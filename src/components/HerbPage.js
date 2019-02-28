import React, { Component } from "react";

const wrapperStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 3em"
};

class HerbPage extends Component {
  render() {
    const { herb } = this.props;
    return (
      <div style={wrapperStyles}>
        <h1>{herb.speech}</h1>
      </div>
    );
  }
}

export default HerbPage;
