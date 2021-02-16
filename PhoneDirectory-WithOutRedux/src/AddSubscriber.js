import React, { Component } from "react";
import Header from "./Header";
import './AddSubscriber.css';
import {Link} from 'react-router-dom';

class AddSubscriber extends Component {
    constructor(){
        super();
        this.state = {id:0,name:'',phone:''}
        this.inputRef = React.createRef(); // to focus on name input field on page mount
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }

    inputChangedHandler = (e)=>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    isNumber = (num)=>{ return /^\d+$/.test(num);}
    isWord = (num)=>{ return /^[a-zA-Z]+$/.test(num);}
    onFormSubmitted = (e)=>{
        e.preventDefault();
        
        if(this.state.name===""){
            alert("Name Field Required");
            return;
        }
        if(this.state.phone===""){
            alert("PhoneNumber Field Required ");
            return;
        }
        if(!this.isNumber(this.state.phone)){
            alert("PhoneNumber Must Be Digit");
            return;
        }
        if(this.state.phone.length!==10){
            alert("PhoneNumber Length Not Eq- 10");
            return;
        }
        
        this.props.addNewSubscriberHandler(this.state);
        this.setState({id:0,name:'',phone:''});
        this.props.history.push('/');
    }

    render() {
        const {name,phone} = this.state;
        return (
            <div className="component-container">
                <Header display="Add Subscriber" />
                <div className="component-body-container">
                    <Link to="/"><button className="custom-btn">Back</button></Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control" >Name<span style={{color:'red'}}>*</span> </label><br />
                        <input type="text" ref={this.inputRef} id="name" className="input-control" name="name"  onChange={this.inputChangedHandler}/><br /><br />
                        <label htmlFor="phone" className="label-control" >Phone<span style={{color:'red'}}>*</span> </label><br />
                        <input type="text" id="phone" className="input-control" name="phone" onChange={this.inputChangedHandler}/><span className="badge">{phone.length}</span><br /><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added:</span><br />
                            <span className="subscriber-info-name">Name: </span><span className="subscriber-info">{name}</span><br />
                            <span className="subscriber-info-name">Phone: </span><span className="subscriber-info">{phone}</span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>

                </div>
            </div>
        )
    }

}
export default AddSubscriber;