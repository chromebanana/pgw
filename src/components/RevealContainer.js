import React, { Component } from 'react';
import Emoji from './Emoji';


class RevealContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    open: false,
  }
  }

 handleClick = () => {
  this.state.open ? this.setState({open: false}) : this.setState({open: true})
}

render()
{
  const { emoji, emojidesc, title, content } = this.props;
  return(
 <div id="RevealContainer" className={this.state.open ? "mv4 pv3 ba b--black-10 bw3 br3  bg-animate bg-black-10 hover-bg-white-30 pointer  " : "mv4 pv3 ba b--black-10 bw2 br3 bg-black-10 bg-animate hover-bg-white-30 pointer"} onClick={this.handleClick}>
 <h2 className="ma1 f4 f3-ns"><Emoji desc={emojidesc} emoji={emoji}/> {title}</h2>
    <div hidden={!this.state.open} className="ph4-ns ph3 lh-copy">
    <p className="">{content}</p>
    </div>
  </div>
  )
}
}
export default RevealContainer;