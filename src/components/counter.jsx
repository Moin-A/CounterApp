import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags !</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    console.log(this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeclass()}>{this.state.count}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {/* {this.renderTags()} */}
        {this.state.tags.length !== 0 && "please create a new tag"}
      </div>
    );
  }

  getBadgeclass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
