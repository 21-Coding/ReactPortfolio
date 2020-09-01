import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
          <div>
              <Grid>
                  <Cell col={4}>
                      <div style={{textAlign: 'center'}}>
                          <img
                            src="https://lh3.googleusercontent.com/fife/ABSRlIprsY5-HL56Z-yaV9WrLmxQHTYusEvAUAqvZLI5BWrBfwoxHUEiIGs0SE2Y_pPewEJNrmx10MdExp2_mEtEzrtk6UpNr33aX6PRlC17Js5l_JOJsYCdpcMYcnsjVO2MnNRnBQPkiV3Cn5HHWjFmpcYTu1acPHslk4JYHe5mQ_KRzwawMa6x4rVY1xhcCPBiCeY1i-819plKQ_Ebwopy41FOZPehGNzmT5lLSPh4NX1spv7FQ7Sa1NYXHysRWZfUVrOmUYF6JF2RqFMhSlukdmzuafwIGbVwJ8wS7l-ILKRpdvImJUoJCGK-lc7RV9PZepmwv1kRvw4RRCkD0Jm0zlbRK-3fYj09ZZnCpZX6gIu7gbDRdzTgJdkPCVcJBpk5EhlfDsYCRqEy_Pt8V5YdVf8tVQUA96ZBwUQXC7t0Bb5h24GxINXoRR89dn8NrUxcBsxqkm-cz8rIaDlWJtu_izWPpaxZm-PUSgz0lybK_xKJZWzJtnBmntslX6IMahK-yQHrYhR3jGpISYNCOb-Ut5_I0M-43KyfZXVTbEu1XQDGnXzoHBbRQDtBS1HN_stWRQwcWpG5vtExxQrHAqItUD5oQDN1lIyvwv_hEclmwpp8ZoHId9S4eOmO8pG1A-ermuC3tIhsnoD2RFj3HSPU9DUQaW37L156xygq4et29lyV2o6VASN94GluPNFtZp4YNS6zNHFLFq0BQj0OW-qSQuz-hDwL1PFi=s1500"
                            alt="avatar"
                            style={{height: '200px'}}
                          />
                      </div>
                      <h2 style={{paddingTop: '2em'}}>Dominique Youmans</h2>
                      <h4 style={{color: 'grey'}}>Web Developer</h4>
                      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                      <p>Developing applications that empower.</p>
                      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                  </Cell>
                  <Cell className="resume-right-col" col={8}>
                      <h2>Education</h2>

                      <Education
                        startYear={2009}
                        endYear={2013}
                        schoolName="SNOW College"
                        schoolDescription="Community College"

                        />

                            <Education
                            startYear={2013}
                            endYear={2014}
                            schoolName="South Carolina State"
                            schoolDescription="University"

                            />

                  </Cell>
              </Grid>
          </div>
        )
    }
}

export default Resume;