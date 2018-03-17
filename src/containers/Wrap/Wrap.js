// @flow
import React, { Component, type Node } from 'react';

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
