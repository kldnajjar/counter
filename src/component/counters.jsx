import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div className="row">
                    <button className="btn btn-info mt-4" onClick={this.props.onReset}>Reset</button>
                </div>
                    {this.props.counters.map(counter => {
                        return (
                            <div className="row">
                                <Counter
                                    key={counter.id}
                                    counter={counter}
                                    onDelete={this.props.onDelete}
                                    onIncrement={this.props.onIncrement}
                                    onDecrement={this.props.onDecrement}
                                />
                            </div>
                        )
                    })}
                
            </React.Fragment>
        );
    }
}
 
export default Counters
 