class App extends React.Component {
  state = {
    value: ""
  }

  handleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <input value={this.state.value} onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleClick}>Reset</button>
        <h3 className='title'>{this.state.value.toLocaleUpperCase()}</h3>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))