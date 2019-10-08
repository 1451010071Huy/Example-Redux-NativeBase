import React, { Component } from "react";
import { Container, Header, Button, Content, ActionSheet, Text, Root } from "native-base";
import ActionSheetExample from "./ActionSheetExample";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Root>
        <ActionSheetExample></ActionSheetExample>
      </Root>
    );
  }
}