import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg:
        "https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s800-c85.jpg",
      allMemeImgs: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    console.log("you clicked me!");
  }

  handleChange() {
    console.log("text is working!");
  }

  render() {
    return (
      
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button onClick={this.handleClick}>GENERATE</button>

        </form>


        <div className="meme">

          <img
            src={this.state.randomImg}
            alt="crying michael jordan meme"
          />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>

        </div>

      </div>
    );
  }
}

export default MemeGenerator;
