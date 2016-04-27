import React from 'react';
import {Panel, Form, FormControl, FormGroup, Col, Button} from 'react-bootstrap';

class CreateContact extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName : "",
      lastName : "",
      email : ""
    }
  }

  onFirstNameChange(e) {
    this.setState({firstName : e.target.value})
  }
  onLastNameChange(e) {
    this.setState({lastName : e.target.value})
  }
  onEmailChange(e) {
    this.setState({email : e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
  }

  formInstance () {
    return(
      <Form horizontal>
        <FormGroup controlId="firstName" ref="firstName">
          <Col xs={2}>
            First Name
          </Col>
          <Col xs={8}>
            <FormControl type="text" placeholder="First Name"
              onChange={this.onFirstNameChange.bind(this)}/>
          </Col>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="lastName">
          <Col xs={2}>
            Last Name
          </Col>
          <Col xs={8}>
            <FormControl type="text" placeholder="Last Name"
              onChange={this.onLastNameChange.bind(this)}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="email">
          <Col xs={2}>
            Email
          </Col>
          <Col xs={8}>
            <FormControl type="email" placeholder="Email"
              onChange={this.onEmailChange.bind(this)}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xsOffset={2} xs={10}>
            <Button type="submit" onClick={this.onSubmit.bind(this)}>
              Create
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }

  render() {
    return <Panel>{this.formInstance()}</Panel>;
  }
}

export default CreateContact;