import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) =>(
    <div>
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