import React, {Component} from 'react';
import Header from "./Header";
import './AddSubscriber.css';

class AddSubscriber extends Component{
    render(){
        return{
            <div>
            <Header heading="Add Subscriber" />
            <div className="component-body-container">
            <button className="custom-btn">Back</button>
            <form className="subscriber-form">
            <label htmlFor="name" className="label-control">Name</label></br>
            <input id="name" type="text" className="input-control" name="name"></input> <br/><br/>
            <label htmlFor="phone" className="label-control">Phone</label>   <br/>
            <input id="phone" type="text" className="input-control" name="name"></input> <br/><br/>
            <div className="subscriber-info-container">
            </div>
             <span className="Add to heading">Subscriber to be added</span><br/>
             <span className="subscriber-info">Name</span><br/>
             <span classNmae="subscriber-info">phone</span><br/>
              

            </form>
            <button type="submit" className="custom -btn add-btn">Add</button>
            </div>
            </div>


        }
    }
}
export default AddSubscriber;
