import React from 'react';
import {Link} from 'react-router';
import {Panel} from 'react-bootstrap';

class ContactDetail extends React.Component {
  render () {
    let contact = { firstName : "Paul", lastName : "Adams", email : "adams@jsmith.com" }
    return (
      <Panel>
        <p><strong>FirstName: </strong> {contact.firstName} </p>
      </Panel>
    );
  }
}

export default ContactDetail;