import React from 'react';
import { connect } from 'react-redux';

class BtnSoma extends React.Component {
    subtrair = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }
    
    render() {
        return (
            <button className="btnDefault" onClick={this.subtrair}>Subtrair</button>
            )
        }
    }
    
    function mapStateToProps(state) {
        return {
            count: state.count
        };
    }
    
    export default connect(mapStateToProps)(BtnSoma);