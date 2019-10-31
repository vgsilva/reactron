import React from 'react';
import { connect } from 'react-redux';

class BtnSoma extends React.Component {
    somar = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }
    
    render() {
        return (
            <button className="btnDefault" onClick={this.somar}>Somar</button>
            )
        }
    }
    
    function mapStateToProps(state) {
        return {
            count: state.count
        };
    }
    
    export default connect(mapStateToProps)(BtnSoma);