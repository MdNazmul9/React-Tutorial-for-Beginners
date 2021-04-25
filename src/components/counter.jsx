import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 1,
        

    };
   
    handleIncrement(){
        console.log("Inclement Clicked", this);
    }

    render() { 
    
        return (
            <div> 
                <h1>Hello world</h1>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                
                <button
                 onClick={this.handleIncrement}
                 className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;