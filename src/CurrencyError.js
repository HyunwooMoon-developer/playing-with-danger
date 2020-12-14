import React, { Component } from 'react';

class CurrencyError extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError : false,
        }
    }

    static getDerivedStateFromError(error){
        return {hasError : true}
    }
    
    render() {
        if(this.state.hasError){
           return  (<h2>could not display this currency</h2>
           )}
        return this.props.children;
    }
}

export default CurrencyError;