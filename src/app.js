import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dt: new Date() }
  }

  componentDidMount() {
    setInterval( ()=>{
      this.setState({ dt: new Date() })
    }, 1000);
  }

  render() {
    return <div>{this.state.dt.toLocaleString('pl-PL')}</div>
  }
}

const App = () => {
    return <div><Clock/></div>
}

export default App
