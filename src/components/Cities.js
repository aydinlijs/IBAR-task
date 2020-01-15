import React from "react";
import Bulb from "./../assets/Icons/idea-100.png";
import Code from "./../assets/Icons/code-100.png";
import Design from "./../assets/Icons/design-100.png";
import axios from "axios";

class Cities extends React.Component {
  state = {
    cities: []
  };

  componentDidMount = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=3")
      .then(res => {
        this.setState({
          cities: res.data.map(a => a.address.city)
        });
      });
  };

  render() {
    const { cities } = this.state;
    return (
      <div className="container">
        <div className="topLine">
            <h3>OUR SERVICES</h3>
        </div>
        <div className="cities">
          <div className="city">
            <img className="icon" alt="_icon" src={Bulb} />
            <h3>{cities[0]}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud
          </p>
          </div>
          <div className="city">
            <img className="icon" alt="_icon" src={Design} />
            <h3>{cities[1]}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud
          </p>
          </div>
          <div className="city">
            <img className="icon" alt="_icon" src={Code} />
            <h3>{cities[2]}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud
          </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Cities;
