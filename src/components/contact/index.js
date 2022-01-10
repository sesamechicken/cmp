import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import './contact.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: null,
      webEmail: '',
      webName: '',
      webMessage: ''
    };
  }

  onChange = (e, field) => {
    const { value } = e.target;

    this.setState({
      [field]: value,
      errors: null
    });
  };

  sendMessage = () => {
    const { webName, webEmail, webMessage } = this.state;

    if (webName === '' || webEmail === '' || webMessage === '') {
      this.setState({ errors: 'no empty fields' });
    } else {
      // send it
      fetch('http://project107.net/calebparks/sendmail', { method: 'POST', mode: 'no-cors', body: JSON.stringify(this.state) });
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="contact-view">
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ textAlign: 'center', color: '#ed0361' }}>

            {errors}
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <TextField id="name" label="Your name" variant="outlined" onKeyUp={(e) => this.onChange(e, 'webName')} />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <TextField id="email" label="Your email" type="email" onKeyUp={(e) => this.onChange(e, 'webEmail')} />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <TextField multiline id="message" label="Your message" type="email" onKeyUp={(e) => this.onChange(e, 'webMessage')} />
          </Grid>
          <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
            <Button onClick={this.sendMessage}>Send</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Contact;
