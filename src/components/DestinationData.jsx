import "./DestinationStyles.css";
import { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="resim" />
          <img src={this.props.img2} alt="resim" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
