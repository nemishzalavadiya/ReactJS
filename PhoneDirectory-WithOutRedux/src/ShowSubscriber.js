import React, { Component } from 'react';
import Header from './Header'
import './ShowSubscriber.css'
import {Link} from 'react-router-dom'

class ShowSubscriber extends Component {

  deleteHandler=(id)=>{
    this.props.deleteHandler(id);
  }
  
  render() {
    const displayData = "Phone Directory";
    return (
      <div >
        <Header display={displayData} />
        <div className="component-body-container">

          <Link to="/add"><button className="custom-btn add-btn" >Add</button><br /></Link>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading" >Name </span>
            <span className="grid-item phone-heading" >Phone </span>
          </div>
          {
            this.props.showHandler.map(x => {
              return (
                <div key={x.id} className="grid-container">
                  <span className="grid-item" >{x.name}</span>
                  <span className="grid-item" >{x.phone} </span>
                  <span className="grid-item" >
                    <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this,x.id)} >Delete</button>
                  </span>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscriber;
