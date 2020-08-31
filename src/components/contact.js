import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { DiGithubBadge } from 'react-icons/di';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={5}>
                        <h2>Dominique Youmans</h2>
                        <img
                            src="https://lh3.googleusercontent.com/am5YhCrALpqjGdtypKDkZ1aps67gQBPKjnGed0Qf8aUwuEbrpOHQXwK5DaheDSU3ZDgipEsLMUE6=s1500"
                            alt="avatar"
                            style={{height: '250px'}}
                            />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Web Developer</p>

                    </Cell>
                    <Cell col={6}>
                     
                    

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <a href="https://github.com/21-Coding"><DiGithubBadge /></a>
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