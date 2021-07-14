import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        } 
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value});

    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="Email"
                        handleChange= {this.handleChange}
                        value={this.state.email} 
                        required></FormInput>
                   
                    <FormInput 
                        label="Password"
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange= {this.handleChange}
                        required></FormInput>
                   
                    <CustomButton type="submit">Sign un</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{' '}Sign in with Google {' '}</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;