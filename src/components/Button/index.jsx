import { Component } from "react";
import "./style.css";
export class Button extends Component {
  render() {
    return (
      <button
        className="btn"
        type="button"
        onClick={this.props.loadMorePosts}
        disabled={this.props.disabled}
      >
        Load More Posts
      </button>
    );
  }
}
