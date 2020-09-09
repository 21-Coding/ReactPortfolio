import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { FaReact } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import { SiUnity } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { DiGithubFull } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    } 

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
             
                <div className="projects-grid">

                {/* Project #1 */}
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)'}}></CardTitle>
                     <CardText>
                         React code description.
                     </CardText>
                     <CardActions border>
                     <a href="https://github.com/21-Coding"><DiGithubBadge /><DiGithubFull /></a>
                         <Button colored>LinkedIn</Button> 
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                     </CardMenu>
                </Card>


                {/* Project #2 */}
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)'}}></CardTitle>
                     <CardText>
                         React code description.
                     </CardText>
                     <CardActions border>
                         <Button colored>GitHub</Button>
                         <Button colored>LinkedIn</Button> 
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                     </CardMenu>
                </Card>


                {/* Project #3 */}
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)'}}></CardTitle>
                     <CardText>
                         React code description.
                     </CardText>
                     <CardActions border>
                         <Button colored>GitHub</Button>
                         <Button colored>LinkedIn</Button> 
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                     </CardMenu>
                </Card>

                </div>

                
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png)'}}></CardTitle>
                    <CardText>
                        Lorem ipsum
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LinkedIn</Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                     </CardMenu>

               </Card>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://banner2.cleanpng.com/20180609/vss/kisspng-ruby-on-rails-computer-programming-programming-lan-meppel-5b1c3688d746b1.8695478715285756248818.jpg)'}}></CardTitle>
                    <CardText>
                        Lorem ipsum
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LinkedIn</Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                     </CardMenu>

               </Card>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png)'}}></CardTitle>
                     <CardText>
                         Lorem ipsum
                     </CardText>
                     <CardActions border>
                         <Button colored>GitHub</Button>
                         <Button colored>LinkedIn</Button> 
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                     </CardMenu>

                </Card>
            )
        }

    }
    render() {
        return(
          <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab><FaReact /></Tab>
              <Tab><SiCsharp /></Tab>
              <Tab><DiRuby /></Tab>
              <Tab><SiUnity /></Tab>
            </Tabs>

            <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col={12}>
        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            </section>
          </div>  
            )
    }
}

export default Projects;