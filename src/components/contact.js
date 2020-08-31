import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { DiGithubBadge } from 'react-icons/di';
import { DiGithubFull } from 'react-icons/di';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={5}>
                        <h2>Dominique Youmans</h2>
                        <img
                            src="https://lh3.googleusercontent.com/fife/ABSRlIprsY5-HL56Z-yaV9WrLmxQHTYusEvAUAqvZLI5BWrBfwoxHUEiIGs0SE2Y_pPewEJNrmx10MdExp2_mEtEzrtk6UpNr33aX6PRlC17Js5l_JOJsYCdpcMYcnsjVO2MnNRnBQPkiV3Cn5HHWjFmpcYTu1acPHslk4JYHe5mQ_KRzwawMa6x4rVY1xhcCPBiCeY1i-819plKQ_Ebwopy41FOZPehGNzmT5lLSPh4NX1spv7FQ7Sa1NYXHysRWZfUVrOmUYF6JF2RqFMhSlukdmzuafwIGbVwJ8wS7l-ILKRpdvImJUoJCGK-lc7RV9PZepmwv1kRvw4RRCkD0Jm0zlbRK-3fYj09ZZnCpZX6gIu7gbDRdzTgJdkPCVcJBpk5EhlfDsYCRqEy_Pt8V5YdVf8tVQUA96ZBwUQXC7t0Bb5h24GxINXoRR89dn8NrUxcBsxqkm-cz8rIaDlWJtu_izWPpaxZm-PUSgz0lybK_xKJZWzJtnBmntslX6IMahK-yQHrYhR3jGpISYNCOb-Ut5_I0M-43KyfZXVTbEu1XQDGnXzoHBbRQDtBS1HN_stWRQwcWpG5vtExxQrHAqItUD5oQDN1lIyvwv_hEclmwpp8ZoHId9S4eOmO8pG1A-ermuC3tIhsnoD2RFj3HSPU9DUQaW37L156xygq4et29lyV2o6VASN94GluPNFtZp4YNS6zNHFLFq0BQj0OW-qSQuz-hDwL1PFi=s1500"
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
                                    <a href="https://github.com/21-Coding"><DiGithubBadge /><DiGithubFull /></a>
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