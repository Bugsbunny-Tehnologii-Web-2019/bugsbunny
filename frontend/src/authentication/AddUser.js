import React from 'react';
import axios from 'axios';

class AddUser extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            name:'',
            role:'DEVELOPER',
            email:'',
            password:''
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
    addUser=()=>{
        const user=this.state;
        axios.post('http://3.15.177.221:3001/api/user',user).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        
    }
    
    
    render(){
        return (
            <div>
            <h1>Register</h1>
            <input type="text" placeholder="Name"
            value={this.state.name}
            onChange={this.handleChangeName}/>
            <select value={this.state.role}
            onChange={this.handleChangeRole}>
                <option>DEVELOPER</option>
                <option>TESTER</option>
               </select>
             <input type="text" placeholder="Email" value={this.state.email}
             onChange={this.handleChangeEmail} /> 
             <input type="text" placeholder="Password" value={this.state.password}
             onChange={this.handleChangePassword} /> 
            <button onClick={this.addUser}>Sign In</button>
            </div>
        );
    }
}

export default AddUser;
