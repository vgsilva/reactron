import React from 'react';
import { connect } from 'react-redux';
import BtnSoma from './BtnSoma';
import BtnSubtrair from './BtnSubtrair';

class Counter extends React.Component {    
    subtrair = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }
    
    render() {
        return (
            <div>
            <h2>Contador</h2>
            <div className="counter">
            <BtnSubtrair />
            <span className="labelNum">{this.props.count}</span>
            <BtnSoma />
            </div>
            </div>
            )
        }
    }
    
    function mapStateToProps(state) {
        return {
            count: state.count
        };
    }
    
    export default connect(mapStateToProps)(Counter);