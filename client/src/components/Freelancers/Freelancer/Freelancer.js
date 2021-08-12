import React from 'react'
import { useDispatch } from 'react-redux';

const Freelancer = ({ freelancer, setCurrentId }) => {
  return (
    <>
      <h1>Name: {freelancer.name}</h1>
      <h2>Email: {freelancer.email}</h2>
    </>
  )
}

export default Freelancer
