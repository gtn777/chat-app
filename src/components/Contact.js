import React from "react";
import "./ContactStyle.css";


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      connected: this.props.online,  
    };
  }
  render() {return (
    <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name} />
      <div>
        <p className="name">{this.props.name}</p>
        <div onClick={() => {var newStatus = !this.state.connected ;
                      this.setState({connected : newStatus}) ;
        }}  className="status">
          <p className={this.state.connected ? "status-online" : "status-offline"}> </p>
          <p className="status-text"> {this.state.connected ? "OnLine" : "OffLine"} </p>
        </div>
      </div>
    </div>
  );}
  
};

export default Contact;
