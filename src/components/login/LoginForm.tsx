
import { error } from "console";
import React from "react";
import { Fragment } from "react";

export class LoginForm extends React.Component {
    state = {
        emailAddress:'',
        password: '',
        // confirmPassword:'',
        showPassword: false,
        errorEmail:'',
        errorPassword:'',
        // errorConfirmPassword:''
    };

    validate = () => {
        let error = false;
        //validate email field
        if(!this.state.emailAddress){
            this.setState({
                errorEmail: "Email is required!"
        })
            error = true;
        }

        //validate password field
        if(!this.state.password){
            this.setState({
                errorPassword: "Password is required!"
            })
            error = true;
        }

        //validate confirm password field
        // if(!this.state.confirmPassword || this.state.confirmPassword !== this.state.password){
        //     this.setState({
        //         errorConfirmPassword: "Confirm password is not equal password "
        //     })
        //     error = true;
        // }
        return error;
    }
    

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();  //!IMPORTANT

        if(this.validate()){
            return
        }
    }
    handleEmailAddressChange =(event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({emailAddress: event.target.value})
    }

    handlePasswordChange=(event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({password: event.target.value}, () =>{
            if(this.state.password.length<6 || this.state.password.length >10){
                this.setState({
                    errorPassword: "Password length must be between 6 and 10 characters"
                })
            }
        })
    }

    handleConfirmPasswordChange=(event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({confirmPassword: event.target.value}, () =>{
        })
    }

    handleShowPassword = () =>{
        this.setState((prevState: any) =>({
            showPassword: !prevState.showPassword,
        }))
    }

    render() {
        return(
            <Fragment>
                
            <div className="mt-10 px-96 ">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold xl:text-5xl ">Sign In</h2>
                <form className="mt-12" autoComplete="off" onSubmit={this.handleSubmit}>
               
                <div className="form-group">
                    <label htmlFor="email-address" className="text-sm font-bold text-gray-700 tracking-wide">Email Address</label>
                    <input type="email" 
                    id="email-address"
                    className={`form-control w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 ${this.state.errorEmail ? "is-invalid": ""}`} 
        
                    placeholder="Enter email"
                    autoComplete="email-address"
                    value={this.state.emailAddress}
                    onChange={this.handleEmailAddressChange}
                    />  
                    {this.state.errorEmail && ( <div className="text-red-500">{this.state.errorEmail}</div> )}
                </div>

                
                <div className="form-group">
                    <label htmlFor="current-password" className="text-sm font-bold text-gray-700 tracking-wide">Password</label>
                    <input type={this.state.showPassword ? "text" : "password"} 
                    id="current-password"
                    className={`form-control w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 ${this.state.errorPassword ? "is-invalid": ""}`}
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    />
                    {this.state.errorPassword && ( <div className="text-red-500">{this.state.errorPassword}</div>)}
                    
                </div>

            
                <div className="form-group">
                    
                    <label htmlFor="show-password">
                    <input type="checkbox"
                    className="show-password"
                    id="show-password"
                    checked={this.state.showPassword}
                    onChange={this.handleShowPassword} /> Show Password</label>
                </div>

                <div className="form-group mt-10">
                    <button type="submit" className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                    shadow-lg">Sign In</button>
                </div>
                </form>
             </div>


            </Fragment>
        )
    }
}