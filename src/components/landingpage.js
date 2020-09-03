import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FaReact } from 'react-icons/fa';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100px', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://lh3.googleusercontent.com/fife/ABSRlIprsY5-HL56Z-yaV9WrLmxQHTYusEvAUAqvZLI5BWrBfwoxHUEiIGs0SE2Y_pPewEJNrmx10MdExp2_mEtEzrtk6UpNr33aX6PRlC17Js5l_JOJsYCdpcMYcnsjVO2MnNRnBQPkiV3Cn5HHWjFmpcYTu1acPHslk4JYHe5mQ_KRzwawMa6x4rVY1xhcCPBiCeY1i-819plKQ_Ebwopy41FOZPehGNzmT5lLSPh4NX1spv7FQ7Sa1NYXHysRWZfUVrOmUYF6JF2RqFMhSlukdmzuafwIGbVwJ8wS7l-ILKRpdvImJUoJCGK-lc7RV9PZepmwv1kRvw4RRCkD0Jm0zlbRK-3fYj09ZZnCpZX6gIu7gbDRdzTgJdkPCVcJBpk5EhlfDsYCRqEy_Pt8V5YdVf8tVQUA96ZBwUQXC7t0Bb5h24GxINXoRR89dn8NrUxcBsxqkm-cz8rIaDlWJtu_izWPpaxZm-PUSgz0lybK_xKJZWzJtnBmntslX6IMahK-yQHrYhR3jGpISYNCOb-Ut5_I0M-43KyfZXVTbEu1XQDGnXzoHBbRQDtBS1HN_stWRQwcWpG5vtExxQrHAqItUD5oQDN1lIyvwv_hEclmwpp8ZoHId9S4eOmO8pG1A-ermuC3tIhsnoD2RFj3HSPU9DUQaW37L156xygq4et29lyV2o6VASN94GluPNFtZp4YNS6zNHFLFq0BQj0OW-qSQuz-hDwL1PFi=s1500"
                            alt="avatar"
                            className="avatar-img"
                            
                            />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | C# | Unity </p>
                            <div className="social-links">
                                
                                {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/ddy-connect/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                                                    {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                    
                                            
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;