import React, { Component } from "react"
 

class Results extends Component {
  state = {
      data : []
      };

  componentDidMount() {
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=97225&APPID=01217080826a1f46352d4b1eb115f68d"
    fetch(url)   
      .then(result => result.json())
      .then(result => {
            this.setState({
                data: result
            })
        });
      }
      render() {
        const { data } = this.state;

        const result = ((entry, index) => {
            return <li key={index}>{entry}</li>;
        });

        return <ul>{result}</ul>;
    }
}

export default Results;