import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



// import './Project.css';

class Bug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bugs: [],
      projects: [],
      inputProjectLink: '',
      inputPriority:'',
      inputDescription: '',
      inputSeverity:'',
      idProject:'',
      showModal:false,
      showDescription:false,
      emailUser:'',
      users:[],
      members:[]

    };
  }
    handleChangeSeverity=(event)=>{
        this.setState({
            inputSeverity:event.target.value
        })
    }
    handleChangeLink=(event)=>{
        this.setState({
            inputProjectLink:event.target.value
        })
    }
    handleChangePriority=(event)=>{
         this.setState({
            inputPriority:event.target.value
        })
    }
    handleChangeDescription=(event)=>{
        this.setState({
            inputDescription:event.target.value
        })
    }

  componentDidMount() {

axios.get('http://localhost:3001/api/bugs')
      .then(response=>{
         this.setState(previousState=>{
          return {
            bugs: response.data
          }
        })
      }).catch(error => {
        console.log(error);
      });
      
      axios.get('http://localhost:3001/api/projects')
      .then(response=>{
         this.setState(previousState=>{
          return {
            projects: response.data
          }
        })
      }).catch(error => {
        console.log(error);
      });
      
  }
  
  handleClose = () => {
    this.setState(previousState => {
      return {
        showModal: false
      }
    })
  };
  
    handleCloseDescription = () => {
    this.setState(previousState => {
      return {
        showDescription: false
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
  
  handleChangeDescriptionPressed=() =>{
    console.log("Description pressed");
    this.setState(previousState => {
      return {
        showDescription:true
      }
    });
    
    
  }
  
  handleAddNewDescription=()=>{
    console.log("new Description");
    this.handleCloseDescription();
  }

  handleNewProject = () => {

    let idProiect;
    for(let p of this.state.projects)
    { console.log(p.id_project+" ");
      if(p.link===this.state.inputProjectLink){
        idProiect=p.id_project;
        console.log(idProiect+" this is the id");
    }
      
    }
    
    axios
      .post('http://localhost:3001/api/bug',  {link_commit: this.state.inputProjectLink, 
      priority: this.state.inputPriority,description:this.state.inputDescription,severity:this.state.inputSeverity, id_project:idProiect})
      .then(response => {
        this.handleClose();
      }).catch(error => {
        this.handleClose();
      });
  }

  render() {
    var project;
     project=this.state.projects.map((el)=>
       
        
        <option  key={el.id_project}>{el.link}</option>
        
        
      );
    const rows = this.state.bugs.map(el => 
      <tr key={el.id_bug}>
        <th scope="row">{el.id_bug}</th>
        <td><a href={el.link_commit} target="_blank" rel="noopener noreferrer">{el.link_commit}</a></td>
         <td>{el.priority}</td>
          <td onClick={this.handleChangeDescriptionPressed}>{el.description}</td>
           <td>{el.severity}</td>
        <td>{el.createdAt}</td>
      </tr>
    );

    return (
  
        <div className="projects">
          <div className="call-to-action">
            <button className="btn btn-primary center" type="button" onClick={this.handleShow}>Add new bug</button>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Link commit</th>
                <th scope="col">Priority</th>
                <th scope="col">Description</th>
                <th scope="col">Severity</th>
                <th scope="col">Created at</th>
              </tr>
            </thead>
            <tbody>  
              { rows }
            </tbody>
          </table>
          
          <Modal show={this.state.showDescription} onHide={this.handleCloseDescription}>
            <Modal.Header closeButton>
              <Modal.Title>Change the description of the bug</Modal.Title>
            </Modal.Header>
             <Modal.Body>
             <div className="form-group">
                <label htmlFor="severity">Description</label>
                <input type="text" className="form-control" 
                       id="idDescription" 
                       placeholder="Update the description of the bug" 
                       value = { this.state.inputDescription } onChange = { event => this.handleChangeDescription(event) }/>
                <small id="idDescription" className="form-text text-muted">The description should say a few things about the bug.</small>
              </div>
             </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseDescription}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleAddNewDescription}>
                Change Description
              </Button>
            </Modal.Footer>
          </Modal>
          
          
          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new bug</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
             <div className="form-group">
                    <label htmlFor="projectNameInputTeam">Project name</label>
                    <select  label="dsadsa" className="form-control" 
                           onChange={ event => this.handleChangeLink(event) }>
                           <option key="0">---Choose a project link---</option>
                         {project}
                    </select>
           </div>

              <div className="form-group">
                <label htmlFor="severity">Priority</label>
                <input type="text" className="form-control" 
                       id="idPriority" 
                       placeholder="Enter the priority of the bug" 
                       value = { this.state.inputPriority } onChange = { event => this.handleChangePriority(event) }/>
                <small id="idPriority" className="form-text text-muted">The priority field establish the importance of fixing the bug.</small>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" 
                       id="idDescription" 
                       placeholder="Enter the description of the bug" 
                       value = { this.state.inputDescription} onChange = { event => this.handleChangeDescription(event) }/>
                <small id="idDescription" className="form-text text-muted">The description field.</small>
              </div>
                 <div className="form-group">
                <label htmlFor="severity">Severity</label>
                <input type="text" className="form-control" 
                       id="idSeverity" 
                       placeholder="Enter the severity of the bug" 
                       value = { this.state.inputSeverity } onChange = { event => this.handleChangeSeverity(event) }/>
                <small id="idSeverity" className="form-text text-muted">The severity should say the impact of the bug in the application.</small>
              </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleNewProject}>
                Save new bug
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default Bug;