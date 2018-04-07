import React, { Component } from 'react'
import {Button, Fade} from 'reactstrap'

import EmailForm from '../forms/EmailForm'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {fadeIn: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({fadeIn: !this.state.fadeIn})
  }

  render() {
    return (
      <div style={styles.container}>
        {!this.state.fadeIn && (
          <div style={styles.introSection}>
            <h1 style={styles.introTitle}>Your Reliable Email Service</h1>
            <div>
              <Button color="primary" onClick={this.toggle}>Start Sending Email</Button>
            </div>
          </div>
        )}
        <Fade style={styles.emailForm} in={this.state.fadeIn} unmountOnExit>
          <EmailForm />
        </Fade>
      </div>
    )
  }
}

export default LandingPage

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: 'AliceBlue',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
  },
  emailForm: {
    maxWidth: '600px',
    padding: '0 50px',
    width: '100%',
  },
  introSection: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1080px',
  },
  introTitle: {
    paddingBottom: '15px',
    textAlign: 'center',
  },
}
