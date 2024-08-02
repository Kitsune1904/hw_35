import React from "react";

export default class NodeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul>{this.props.children}</ul>;
  }
}
