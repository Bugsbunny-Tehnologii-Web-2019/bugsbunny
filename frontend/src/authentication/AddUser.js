import React from 'react';
import axios from 'axios';

class AddUser extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            name:'',
            role:'DEVELOPER',
            email:'',
            password:'',
            invalidUser:false,
            invalidEmail:false,
            invalidName:false,
            invalidPassword:false
        };
    }
    
    handleChangeName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }    
    handleChangeRole=(event)=>{
        this.setState({
            role:event.target.value
        })
    }
    handleChangeEmail=(event)=>{
         this.setState({
            email:event.target.value
        })
    }
    handleChangePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    addUser=(event)=>{
        event.preventDefault();
        const user=this.state;
        if(this.state.email.includes("@")&&this.state.name&&this.state.password)
        {axios.post('http://localhost:3001/api/user',user).then(res=>{
            console.log(res);
      this.props.history.push('/login');
        }).catch(err=>{
            console.log(err);
             this.setState(previousState => {
            return {
              invalidUser: true
            }
          });
          console.log(this.state.invalidUser);
        })
        
    }
        else if(!this.state.email.includes("@")) {console.log("Invalid Email")
            this.setState(previousState => {
            return {
              invalidEmail: true
            }
          });
        }
        else if(!this.state.name){
            console.log("Invalid Name")
            this.setState(previousState => {
            return {
              invalidName: true
            }
          });
        }
          else if(!this.state.password){
            console.log("Invalid Password")
            this.setState(previousState => {
            return {
              invalidPassword: true
            }
          });
        }
    }
    
    
    render(){
            const invalidUser = this.state.invalidUser;
            const invalidEmail = this.state.invalidEmail;
            const invalidPassword=this.state.invalidPassword;
            const invalidName=this.state.invalidName;
            let errorMessage;
         if (invalidUser) {
     errorMessage = <div className="alert alert-danger" role="alert">You have to complete all fields!</div>;
    }
    if(invalidEmail){
        errorMessage = <div className="alert alert-warning" role="alert">Invalid email! Please try again!</div>;
    }
    if(invalidName){
        errorMessage = <div className="alert alert-warning" role="alert">Name field should not be empty</div>;
    }
     if(invalidPassword){
        errorMessage = <div className="alert alert-warning" role="alert">Password field should not be empty</div>;
    }
        return (
             <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Create a new account</h5>
                  {errorMessage}
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input type="text" id="inputName" 
                             className="form-control" 
                             placeholder="Name"
                             value = { this.state.name } onChange={this.handleChangeName} 
                             required autoFocus />
                      <label htmlFor="inputName">Name</label>
                    </div>
                    <div className="form-label-group">
                      <select className="form-control"value={this.state.role} onChange={this.handleChangeRole}>
                        <option>DEVELOPER</option>
                        <option>TESTER</option>
                     </select>
                    </div>
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" 
                             className="form-control" 
                             placeholder="Email" 
                            value={this.state.email}
                        onChange={this.handleChangeEmail} 
                             required />
                      <label htmlFor="inputEmail">Email</label>
                    </div>
                    
                    <div className="form-label-group">
                      <input type="password" id="inputPassword" 
                             className="form-control" 
                             placeholder="Password" 
                             value={this.state.password} onChange={this.handleChangePassword} 
                             required />
                  <label htmlFor="inputPassword">Password</label>
                    </div>
        
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.addUser}>Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
        );
    }
}

export default AddUser;
