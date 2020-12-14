import React from 'react';
//import PropTypes from 'prop-types';

const Rating = (props) => {
    const stars = [0,0,0,0,0]
    .map((_, i)=> i < props.value
    ? <span key={i}>&#9733;</span>
    : <span key={i}>&#9734;</span>)
    return (
        <div>
            {stars}
        </div>
    );
};

Rating.propTypes = {
    value : (props, propName, componentName) =>{
        const prop = props[propName] ;
        if(!prop){
            return new Error(`${propName} is required in ${componentName}. Validation failed`);
        }
        if(typeof prop !='number'){
            return new Error(`Invalid prop, ${propName} should be in range 1 -5 in ${componentName}. ${prop} found.`)
        }
    }
}

export default Rating;