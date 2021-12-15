import React from 'react';
import { TextField, Button, Grid} from '@mui/material';
import './contact.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  onChange = (e, field) => {
    const { value } = e.target;

    this.setState({
      [field]: value
    });
  };

  render() {
    return (
      <div className="contact-view">
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <TextField id="name" label="Your name" variant="outlined" onKeyUp={(e) => this.onChange(e, 'name')} />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <TextField id="email" label="Your email" type="email" onKeyUp={(e) => this.onChange(e, 'email')} />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <TextField multiline id="message" label="Your message" type="email" onKeyUp={(e) => this.onChange(e, 'message')} />
          </Grid>
          <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
            <Button>Clicky</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Contact;
