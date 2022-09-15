import React, { Component } from 'react';

class Counter extends Component { 
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn- m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = this.props.counter.value === 0 ? "badge p-2 m-2 bg-warning text-dark" : "badge p-1 m-3 bg-primary text-white";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;