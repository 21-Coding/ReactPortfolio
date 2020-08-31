import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Dominique Youmans</h2>
                        <img
                            src="url(https://lh3.googleusercontent.com/am5YhCrALpqjGdtypKDkZ1aps67gQBPKjnGed0Qf8aUwuEbrpOHQXwK5DaheDSU3ZDgipEsLMUE6=s500)"
                            alt="avatar"
                            style={{height: '250px'}}
                            />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>

                    </Cell>
                    <Cell col={6}>
                     
                    

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    📨:ddyoumans@icloud.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
         
        )
    }
}

export default Contact;