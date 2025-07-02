import React from 'react';

class GreetingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ name: 'Alfonsina' });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer); 
  }

  render() {
    return <p>Hola {this.state.name}</p>;
  }
}

export default GreetingClass;
