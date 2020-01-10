import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import State from '../global-state';

import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      showModal: false,
      inputProjectName: '',
      inputProjectLink: '',
    };
  }

  updateProjectNameInputValue(evt) {
    this.setState({
      inputProjectName: evt.target.value
    });
  }

  updateProjectLinkInputValue(evt) {
    this.setState({
      inputProjectLink: evt.target.value
    });
  }

  componentDidMount() {
    console.info(`Trying to get projects for user with email: ${State.getUser().email}`);
    const user = State.getUser() === null? {} : State.getUser();

    axios
      .get(`http://18.224.136.104:3001/api/users/${user.id_user}/projects`)
      .then(response => {
        this.setState(previousState => {
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

  handleShow = () => {
    this.setState(previousState => {
      return {
        showModal: true
      }
    })
  };

  handleNewProject = () => {
    axios
      .post('http://localhost:3001/api/project', {name: this.state.inputProjectName, link: this.state.inputProjectLink})
      .then(response => {
        this.handleClose();
      }).catch(error => {
        this.handleClose();
      });
  }

  render() {
    const rows = this.state.projects.map(el => 
      <tr key={el.id_project}>
        <th scope="row">{el.id_project}</th>
        <td>{el.name}</td>
        <td><a href={el.link} target="_blank" rel="noopener noreferrer">{el.link}</a></td>
        <td>{el.createdAt}</td>
      </tr>
    );

    return (
        <div className="projects">
          <div className="call-to-action">
            <button className="btn btn-primary center" type="button" onClick={this.handleShow}>Add new project</button>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Repository link</th>
                <th scope="col">Creation date</th>
              </tr>
            </thead>
            <tbody>  
              { rows }
            </tbody>
          </table>

          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="projectNameInput">Project name</label>
                <input type="text" className="form-control" 
                       id="projectNameInput" 
                       placeholder="Enter the project name" 
                       value = { this.state.inputProjectName } onChange = { event => this.updateProjectNameInputValue(event) } />
                <small id="projectNameInput" className="form-text text-muted">The project name should be short and describe what the project does.</small>
              </div>

              <div className="form-group">
                <label htmlFor="repositoryLinkInput">Repository link</label>
                <input type="text" className="form-control" 
                       id="repositoryLinkInput" 
                       placeholder="Enter the repository link" 
                       value = { this.state.inputProjectLink } onChange = { event => this.updateProjectLinkInputValue(event) }/>
                <small id="repositoryLinkInput" className="form-text text-muted">The link should be a reference to GitHub, Bitbucket or any other SCM.</small>
              </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleNewProject}>
                Save new project
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default Project;