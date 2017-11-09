// @flow
import React, { Component, type Node } from 'react';
import { Route } from 'react-router-dom';
import { Meals } from 'containers';

type Props = {
  children: Node
};

class Wrap extends Component<Props> {
  render() {
    return (
      <div>
        <nav>
        Wrap
        </nav>
      </div>
    );
  }
}

export default Wrap;
