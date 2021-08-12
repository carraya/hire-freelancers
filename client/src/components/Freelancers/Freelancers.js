import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getFreelancers } from '../../actions/userActions.js';
import freelancers from '../../reducers/userReducers.js';
import Freelancer from './Freelancer/Freelancer.js';

const Freelancers = () => {
  // const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFreelancers());
  }, [dispatch])
  
  const freelancers = useSelector((state) => state.freelancers);
  console.log(freelancers);
  return (
    <div>
      {freelancers.map((freelancer) => (
        <Freelancer freelancer={freelancer}/>
      ))}
    </div>
  )
}

export default Freelancers
