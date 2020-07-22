import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) =>(
    <div className="locationCont"> 
        <h1>
            {city}
        </h1>
    </div>
);

Location.protoTypes ={
    city: PropTypes.string.isRequired,
};

export default Location;
//{
    // console.log(props);
    // debugger;

    //Destructuring
    //const {city} = props;
    //return (<div><h1>{city}</h1></div>);
//};