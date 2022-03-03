import React from 'react';

const Employees=(props)=>{
    const {name,id}=props;
    return (
    <div>
        <h6>{`${name} ${id}`}</h6>
    </div>
    )
}


export default Employees;