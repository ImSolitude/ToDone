import React, { Component } from 'react';
import styled from "styled-components";

const Text = styled.h3`
  font-family: "Helvetica Now Text Regular", sans-serif;
`;
class Quote extends Component {
  render() {
    return (
      <Text>“Preach the quote.”</Text>
    );
  }
}

export default Quote;