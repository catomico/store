import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import Button from '../../components/button/button';

import './login.scss';

class Login extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  // although we set an initial empty state, the browser may still intervene therefore hit reset everytime.
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error);
    }    
  };

  // now the change event can update the values that were just reset to empty strings
  // we are reusing this function for both email and password
  // remember that this was called with onChange, but then we changed the name to handleChange, so the inputs have handleChange='handleChange' instead of onChange='handleChange'
  // additionally we changed input to be FormInput
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value, })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <p>Login in with your email and passsword</p>

        <form onSubmit={this.handleSubmit}>
          <div className='center'>
            <FormInput 
              name='email' 
              type='email' 
              label='Email'
              value={this.state.email} 
              handleChange={this.handleChange}
              required 
            />
            <FormInput 
              name='password' 
              type='passeord' 
              label='Password'
              value={this.state.password} 
              handleChange={this.handleChange}
              required 
            />
          </div>
          <div className='buttons'>
            <Button type='submit'>Submit</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
};

export default Login;
