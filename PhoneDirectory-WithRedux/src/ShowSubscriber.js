import React, { Component } from 'react';
import Header from './Header'
import './ShowSubscriber.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import { remove } from './actions';

class ShowSubscriber extends Component {

  deleteHandler=(id)=>{
    this.props.remove(id);
  }

  render() {
    const displayData = "Phone Directory";
    const numberOfSubscribers = this.props.subscriber.length;
    return (
      <div >
        <Header display={displayData} />
        <div className="component-body-container">

          <Link to="/add"><button className="custom-btn add-btn" >Add</button><br /></Link>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading" >Name </span>
            <span className="grid-item phone-heading" >Phone </span>
          </div>
          { numberOfSubscribers>0 ?
            this.props.subscriber.map(x => {
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
            : null
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
    return {subscriber:state}
}
const mapDispatchToProps = (dispatch) =>{
    return {
        remove: (id)=> dispatch(remove(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowSubscriber);
