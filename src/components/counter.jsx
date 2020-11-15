//glossary 
/*
prop:properties
obj:object
btn:button
arg: arguments
fun: function
sol: solution
f-sol: first solution
prod: product
b-sol: better solution
*/
import React, { Component } from 'react';

class Counter extends Component {
    
    style={
        fontWeight:'bold',
        fontSize: 20
    };
    render() {
        console.log(this.props);
        return (
        <div>
        <span style={{fontSize:20, fontWeight:'bold'}} 
        className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
        style={this.style} 
        onClick={()=>this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm">
            Increment
        </button>

        <button 
        onClick={() => this.props.onDelete(this.props.counter.id)} 
        className="btn btn-danger btn-sm m-2">
            Delete
        </button>

        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: value} = this.props.counter;
        return value === 0 ? <p>zero</p> : value; 
    }
}

export default Counter;
