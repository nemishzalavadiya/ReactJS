import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribers: [
                {
                    id:0,name:'Nemish',phone:'7896541596'
                },  
                {
                    id:1,name:'Harshil',phone:'5864972563'
                }
            ]
        }
    }
    addSubscriber = (newSubscriber)=>{
        let sub = this.state.subscribers
        if(sub.length>0){
            newSubscriber.id = sub[sub.length-1].id+1;
        }
        else{
            newSubscriber.id = 1;
        }
        sub.push(newSubscriber);        
        this.setState({subscribers:sub});
    }
    deleteSubscriber = (subscriberId)=>{
        let sub = this.state.subscribers
        sub = sub.filter(function(x){return x.id!==subscriberId})
        this.setState({subscribers:sub});
    }
    render() {
        return (
            <Router>
                <div className="null">
                <Route exact path="/" render={ (props) => <ShowSubscriber {...props} deleteHandler={this.deleteSubscriber} showHandler={this.state.subscribers} />}  />
                <Route exact path="/add" render={ ({history},props) => <AddSubscriber history={history} {...props} addNewSubscriberHandler={this.addSubscriber} />}  />
                </div>
            </Router>
        )
    }

}

export default PhoneDirectory;