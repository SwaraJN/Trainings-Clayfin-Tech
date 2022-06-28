
import React, { Component } from "react";

class Createref extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    console.log("Called in constructor", this.imageRef);
  }

  componentDidMount() {
    console.log("Called when component did mount ", this.imageRef);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default Createref;