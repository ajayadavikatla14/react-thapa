import React, { useState } from 'react'
import Test from './Test';

const Use = () => {
    const [data,setData]=useState(
        {
            name:'preethi',
            age:'21',
            job:'web devp'
        },
    );

        const {name,age,job}=data


  return (
    <>
        <div>this is some usecase properties...!!!</div>
        <Test name={name} age={age} job={job} />
    </>
  )
}

export default Use