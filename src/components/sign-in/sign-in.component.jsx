import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        } 
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password} = this.state;
        try{
            await auth.isSignInWithEmailAndPassword(email, password);
            this.setState({email:'', password: ''});

        }catch(error){
            console.log(error);
        }

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
                    <div className='buttons'>
                        <CustomButton type="submit">Sign un</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn = {true}>{' '}Sign in with Google {' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;