import React, { Component } from 'react';

class Counter extends Component {
    handleLabelValue = () => {
        if (this.props.counter.value === 0)
            return <span className="badge badge-warning">Zero</span>
        return <span className="badge badge-primary">{this.props.counter.value}</span>
    }
    render() { 
        return (
            <React.Fragment>
                <div className="col-1">
                    <div className="p-2 bd-highlight">
                        {this.handleLabelValue()}
                    </div>
                </div>
                <div className="col">
                    <button className="btn btn-secondary btn-sm m-2" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>
                    <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter)}>Remove</button>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Counter;