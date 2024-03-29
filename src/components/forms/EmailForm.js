import React, { Component } from 'react'
import { Alert, Button, Fade, Form, FormGroup, Label, Input } from 'reactstrap'

class EmailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {error: '', recipientEmail: '', message: '', subject: '', emailSending: false, emailSent: false}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.resetStates = this.resetStates.bind(this)
  }

  async handleSubmit() {
    this.setState({emailSending: true})
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/emails`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        message: this.state.message,
        subject: this.state.subject,
        to_address: this.state.recipientEmail,
      }),
    })
    const jsonResponse = await response.json()
    if (response.status === 400) {
      this.setState({emailSending: false, error: jsonResponse.error})
    } else if (!response.ok) {
      this.setState({
        emailSending: false,
        error: `Email could not be delivered. We have tried ${jsonResponse.tryCount} time(s).`
      })
    } else {
      this.setState({emailSent: true, emailSending: false})
    }
  }

  handleFieldChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  resetStates() {
    this.setState({
      error: '',
      recipientEmail: '',
      message: '',
      subject: '',
      emailSending: false,
      emailSent: false
    })
  }

  render() {
    return this.state.emailSent ? (
      <Fade in={this.state.emailSent} unmountOnExit>
        <h1>CONGRATS!</h1>
        <Button color="primary" onClick={this.resetStates}>Send Another One</Button>
      </Fade>
    ) : (
      <Form>
        {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
        <h1 style={styles.title}>Send Email Painlessly</h1>
        <FormGroup>
          <Label for="recipientEmail">Subject</Label>
          <Input
            onChange={this.handleFieldChange}
            value={this.state.subject}
            type="text"
            name="subject"
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipientEmail">Recipient Email</Label>
          <Input
            onChange={this.handleFieldChange}
            value={this.state.recipientEmail}
            type="email"
            name="recipientEmail"
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Email Message</Label>
          <Input
            onChange={this.handleFieldChange}
            value={this.state.message}
            type="textarea"
            name="message"
          />
        </FormGroup>
        <Button color="primary" disabled={this.state.emailSending} onClick={this.handleSubmit}>{this.state.emailSending ? 'Please Wait...' : 'Submit'}</Button>
      </Form>
    )
  }
}

export default EmailForm

const styles = {
  title: {
    paddingBottom: '15px'
  },
}
