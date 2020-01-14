import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import State from '../global-state';


class Team extends Component {
  constructor(props){
    super(props);
   
    
    this.state = {
      users:[],
    projects:[],
    
    name_project:'',
    email_user:'Default',
    default_project:{
      id_project:0,
      link:"",
      name:"Default project",
      
    }
    }
    
  }
   handleClose = () => {
    this.setState(previousState => {
      return {
        showModal: false
      }
    })
  };

  handleShow = () => {
    this.setState(previousState => {
      return {
        showModal: true
      }
    })
  };
  
  updateProjectNameValue(event){
    this.setState({
      name_project:event.target.value
    })
  }
  updateUserNameValue(event){
    this.setState({
      email_user:event.target.value
    })
  }
  componentDidMount() {
     console.info(`Trying to get projects for user with email: ${State.getUser().email}`);
   //  const user = State.getUser() === null? {} : State.getUser();

    
    axios
      .get(`http://18.221.44.231:3001/api/projects`)
      .then(response => {
        this.setState(previousState => {
          return {
            projects: response.data
          }
        })
      }).catch(error => {
        console.log(error);
      });
      axios.get('http://18.221.44.231:3001/api/users/')
      .then(response=>{
         this.setState(previousState=>{
          return {
            users: response.data
          }
        })
      }).catch(error => {
        console.log(error);
      });
       
  
    
  }
  
  handleNewTeam = () => {
    
   
    
     let id_project
  for(let u of this.state.projects){
        if(u.name===this.state.name_project){
          id_project=u.id_project
      } 
    
      }
   let id_user;
    for(let u of this.state.users){
        if(u.email===this.state.email_user){
          id_user=u.id_user
            
      } }
    console.log(id_user)
      axios
      .post('http://18.221.44.231:3001/api/member', {id_project: id_project, id_user: id_user})
      .then(response => {
        this.handleClose();
      }).catch(error => {
        this.handleClose();
      });
  }
  render() {
    
      console.log(this.state.projects);
      
      var  project;
      
     project=this.state.projects.map((el)=>
       
        
        <option  key={el.id_project}>{el.name}</option>
        
        
      );
        
     
      const users=this.state.users.map((el)=>
       
        <option key={el.id_user}>{el.email}</option>
        
      );
      
        return (
        <div className="teams">
          <div className="call-to-action">
            <button className="btn btn-primary center" type="button" onClick={this.handleShow}>Add new team</button>
          </div>
         
         
          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <form>
            <div className="form-group">
                    <label htmlFor="projectNameInputTeam">Project name</label>
                    <select  label="dsadsa" className="form-control" 
                           value={this.state.name_project} 
                           onChange={ event => this.updateProjectNameValue(event) }>
                           <option key="0">-----Choose a project-----</option>
                         {project}
                    </select>
           </div>
           <div className="form-group" title="sdasa">
                    <label htmlFor="projectNameInputTeam">Members</label>
                   <select   className="form-control" value={this.state.email_user}
                   onChange={ event => this.updateUserNameValue(event) }>
                   <option key="0">-----Choose member for project-----</option>
                          {users}
                   </select>
           </div>
           </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleNewTeam}>
                Save new team
              </Button>
            </Modal.Footer>
          </Modal>
         
          </div>
          
    );
  }
}

export default Team;