import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    } 

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://media.giphy.com/media/12BYUePgtn7sis/giphy.gif)'}}></CardTitle>
                     <CardText>
                         React code description.
                     </CardText>
                     <CardActions border>
                         <Button colored>GitHub</Button>
                         <Button colored>LinkedIn</Button> 
                     </CardActions>

                </Card>

                
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://media.giphy.com/media/MCAV63rqDcnHG/giphy.gif)'}}></CardTitle>
                    <CardText>
                        Lorem ipsum
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LinkedIn</Button> 
                    </CardActions>

               </Card>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://media.giphy.com/media/kH78ASiw737uGac1JX/giphy.gif)'}}></CardTitle>
                    <CardText>
                        Lorem ipsum
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LinkedIn</Button> 
                    </CardActions>

               </Card>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <Card shadow={5} stlye={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media.giphy.com/media/J5XaDN7mg3lHLoUJbu/giphy.gif)'}}></CardTitle>
                     <CardText>
                         Lorem ipsum
                     </CardText>
                     <CardActions border>
                         <Button colored>GitHub</Button>
                         <Button colored>LinkedIn</Button> 
                     </CardActions>

                </Card>
            )
        }

    }
    render() {
        return(
          <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>React</Tab>
              <Tab>C#</Tab>
              <Tab>Ruby</Tab>
              <Tab>Unity</Tab>
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