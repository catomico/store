import React from 'react'

import Login from '../../components/login/login';
import Register from '../../components/register/register';

import './signings.scss';

const Signings = () => (
  <div className='signings-shell'>
    <Login />
    <Register />
  </div>
);

export default Signings;