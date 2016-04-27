import React from 'react';
import {Table, Grid, Row, Col, Panel, Glyphicon, Button} from 'react-bootstrap';

class Home extends React.Component {

  fakeContacts() {
    return [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "email": "jsmith@jsmith.com"
      },
      {
        "id": 2,
        "firstName": "Paul",
        "lastName": "Adams",
        "email": "adams@jsmith.com"
      }
    ];
  }

  render () {
    let contacts = this.fakeContacts()
    return (
      <Grid>
        <Row>
          <Col xsOffset={9} xs={3}>
            <Panel>
              <Button bsStyle="primary" bsSize="large">
                Create New Contact               
              </Button>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ContactsTable contacts={contacts} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

class ContactRow extends React.Component {
  render () {
    let contact = this.props.contact
    let name = `${contact.firstName}, ${contact.lastName}`
    return (
      <tr>
        <td>{name}</td>
        <td>View | Edit | Delete </td>
      </tr>
    );
  }
}

class ContactsTable extends React.Component {
  render() {
    let rows = this.props.contacts.map(c => {
      return <ContactRow key={c.id} contact={c} />
    });

    return(
      <Table striped bordered condensed hover>
        <thead>
          <tr><th>Name</th><th>Actions</th></tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}

export default Home