import React from 'react';

class ComponentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'React.Component Test',
    };
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        {text}
      </div>
    );
  }
}

export default ComponentComp;
