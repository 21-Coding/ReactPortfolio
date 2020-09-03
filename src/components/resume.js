import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { FaReact } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import { SiUnity } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';


class Resume extends Component {
    render() {
        return(
          <div>
              <Grid>
                  <Cell className="resume-right-col"col={4}>
                      <div style={{textAlign: 'center'}}>
                          {/* Profile headshot */}
                          <img
                            src="https://lh3.googleusercontent.com/fife/ABSRlIprsY5-HL56Z-yaV9WrLmxQHTYusEvAUAqvZLI5BWrBfwoxHUEiIGs0SE2Y_pPewEJNrmx10MdExp2_mEtEzrtk6UpNr33aX6PRlC17Js5l_JOJsYCdpcMYcnsjVO2MnNRnBQPkiV3Cn5HHWjFmpcYTu1acPHslk4JYHe5mQ_KRzwawMa6x4rVY1xhcCPBiCeY1i-819plKQ_Ebwopy41FOZPehGNzmT5lLSPh4NX1spv7FQ7Sa1NYXHysRWZfUVrOmUYF6JF2RqFMhSlukdmzuafwIGbVwJ8wS7l-ILKRpdvImJUoJCGK-lc7RV9PZepmwv1kRvw4RRCkD0Jm0zlbRK-3fYj09ZZnCpZX6gIu7gbDRdzTgJdkPCVcJBpk5EhlfDsYCRqEy_Pt8V5YdVf8tVQUA96ZBwUQXC7t0Bb5h24GxINXoRR89dn8NrUxcBsxqkm-cz8rIaDlWJtu_izWPpaxZm-PUSgz0lybK_xKJZWzJtnBmntslX6IMahK-yQHrYhR3jGpISYNCOb-Ut5_I0M-43KyfZXVTbEu1XQDGnXzoHBbRQDtBS1HN_stWRQwcWpG5vtExxQrHAqItUD5oQDN1lIyvwv_hEclmwpp8ZoHId9S4eOmO8pG1A-ermuC3tIhsnoD2RFj3HSPU9DUQaW37L156xygq4et29lyV2o6VASN94GluPNFtZp4YNS6zNHFLFq0BQj0OW-qSQuz-hDwL1PFi=s1500"
                            alt="avatar"
                            style={{height: '200px'}}
                          />
                      </div>
                      {/* Headline Begin */}
                      <h2 style={{paddingTop: '2em'}}>Dominique Youmans</h2>
                      <h4 style={{color: 'grey'}}>Web Developer</h4>
                      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                      <p>Developing applications that empower.</p>
                      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                  </Cell>
                  <Cell className="resume-right-col" col={8}>
                      {/* Start education section */}
                      <h2>Education</h2>
                      {/* logo for SNOW College */}
                      <img
                        src="https://www.snow.edu/images/infographics/Rank1-300x265.png"
                        alt="avatar"
                        style={{height: '70px'}}
                          />
                        
                          <img
                            src="https://www.snow.edu/_resources/images/snowcollegelogo-275x72.png"
                            alt="logo"
                            style={{height: '100px'}}
                            />
                          {/* 1st school */}
                      <Education
                        startYear={2009}
                        endYear={2013}
                        schoolName="SNOW College"
                        schoolDescription="Associate of Science (AS)"

                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                          <hr />
                        {/* logo for South Carolina State */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/SC_State_Univ_Logo.svg/1200px-SC_State_Univ_Logo.svg.png"
                            alt="avatar"
                            style={{height: '150px', alignContent: "center"}}
                                />
                            {/* Second school */}
                            <Education
                                startYear={2013}
                                endYear={2014}
                                schoolName="South Carolina State"
                                schoolDescription="BS Family Consumer Science"
                                />
                                <hr style={{borderTop: '3px solid #e22947'}} />
                                  <hr />
                                {/* Logo for Epicodus */}
                                <img
                                src="https://static1.squarespace.com/static/5524448ee4b0d6f6b83ab9e2/t/57cf3de246c3c4d2933aa57c/1598541724111/"
                                alt="avatar"
                                style={{height: '200px', alignContent: "center"}}
                                />
                                {/* Third school */}
                                 <Education
                                    startYear={2019}
                                    endYear={2020}
                                    schoolName="Epicodus"
                                    schoolDescription="Full Stack Web Development Certificate"
                                    />
                                    <hr style={{borderTop: '3px solid #e22947'}} />
                                     <hr />
                    <h2>Experience</h2>
                   
                    {/* Start Experience section */}
                    {/* 1st experience coding */}
                    {/* Logo */}
                    <img
                            src="https://images.squarespace-cdn.com/content/v1/5524448ee4b0d6f6b83ab9e2/1571169073874-MI6UV8DH4WIIWTGTTNO3/ke17ZwdGBToddI8pDm48kDnrEEhVia6EQe4EeMGMQtp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0h2zeMyxpRRrRUmVnCHMxT3FffrP46bu0Ye52p0ol8KAMrZPGfWMwLPVHfdlFR-U_w/coursereport-best.png"
                            alt="avatar"
                            style={{height: '200px', alignContent: "center"}}
                            />
                    <Experience
                        startYear={2019}
                        endYear={2020}
                        jobName="Epicodus"
                        jobDescription="Epicodus is a coding bootcamp offering part- and full-time courses online and in Portland, Oregon, and Seattle, Washington. Students learn everything they need to know to get a job as a web developer by learning JavaScript, Ruby on, Rails, C#, .NET, and React. More important than any particular skill, cohorts are taught how to think like a programmer, write good code, and pick up new languages and technologies in this fast-changing industry. Epicodus focuses on collaboration and inclusivity. Students work together in pairs and teams almost every day, and a diversity, equity, and inclusion approach is a core part of the program design."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                          <hr />
                        {/* 2nd experience coding */}
                        {/* Logo */}
                        <img
                            src="https://www.incluvie.com/img/main_logo-01.png"
                            alt="avatar"
                            style={{height: '200px', alignContent: "center"}}
                            />
                        <Experience
                            startYear={2020}
                            endYear={2020}
                            jobName="Incluvie"
                            jobDescription="Incluvie is the IMDb for diversity in film. See the incluvie score for any movie or TV show, or leave your own rating! Films have the ability to inspire empathy for the protagonists. When film leads are women and people of color, we achieve an array of diverse world views that exist in our colorful world."
                            />
                <hr style={{borderTop: '3px solid #e22947'}} />
                <hr />
                {/* Start Skills section */}
                <h2>Skills</h2>
                {/* 1st skill */}
                
                
                <Skills
                    skill="React"
                    progress={85}
                    />
                    {/* 2nd skill */}
                    <Skills
                        skill="C#"
                        progress={90}
                         />
                         {/* 3rd skill */}
                         <Skills
                            skill="Unity"
                            progress={70}
                             />
                             {/* 4th skill */}
                             <Skills
                                skill="Personable"
                                progress={100}
                                />



                  </Cell>
              </Grid>
          </div>
        )
    }
}

export default Resume;