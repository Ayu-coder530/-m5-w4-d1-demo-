"use strict";

class OnClickElements extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this); // Bind the method in the constructor
  }

  handleClick(event) {
    event.preventDefault(); // Prevent default behavior for links
    alert(`hey! you clicked: ${event.target.id}`);
  }

  render() {
    return (
      <div className="container-div">
        <div id="div-element" onClick={this.handleClick}>
          I am DIV
        </div>

        <span id="span-element" onClick={this.handleClick}>
          I am SPAN
        </span>
        <br></br>

        <button id="button-element" onClick={this.handleClick}>
          I am Button
        </button>
        <br></br>

        <a id="link-element" href="" onClick={this.handleClick}>
          I am LINK
        </a>

        <div id="div-element-2" className="button" onClick={this.handleClick}>
          I am DIV
        </div>

        <span id="span-element-2" className="button" onClick={this.handleClick}>
          I am SPAN
        </span>
        <br></br>

        <button id="button-element-2" className="button" onClick={this.handleClick}>
          I am Button
        </button>
        <br></br>

        <a id="link-element-2" className="button" href="" onClick={this.handleClick}>
          I am LINK
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(OnClickElements),
  document.getElementById("root")
);
