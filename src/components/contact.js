import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Dom Youmans</h2>
                        <img
                            src=""
                            alt="avatar"
                            style={{height: '250px'}}
                            />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>

                    </Cell>
                </Grid>
            </div>
         
        )
    }
}

export default Contact;