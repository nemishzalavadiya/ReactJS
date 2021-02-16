import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component {

    render() {
        return (
            <Router>
                <div>
                <Route exact path="/" render={ () => <ShowSubscriber/>}  />
                <Route exact path="/add" render={ () => <AddSubscriber/>}  />
                </div>
            </Router>
        )
    }

}

export default PhoneDirectory;