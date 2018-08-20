import React, { Component } from 'react';
import Img from './Img';
import Button from './Button';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      image: null,
      status: null 
    };

    this.getImage = this.getImage.bind(this)
  }

  getImage() {
    return fetch('https://dog.ceo/api/breed/akita/images/random')
      .then(rsp => rsp.json())
      .then(data => (
        this.setState({
          image: data.message,
          status: data.status
        })
    ))
  }

  componentDidMount() {
    this.getImage()
  }

  render() { 
    return <div className="cover">
      
      <div className='wrapper'>
    <Img source={this.state.image} alt= {this.state.status}/>
    <Button getImage={this.getImage}/>
    </div>
      </div>
  }
};

export default Wrapper;
