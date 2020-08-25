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
                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-cgbgg&psig=AOvVaw1hVRedMwXsLtMGuU-nYpM8&ust=1598446660193000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDt6IW0tusCFQAAAAAdAAAAABAE)'}}></CardTitle>
                     <CardText>
                         Lorem ipsum
                     </CardText>
                     <CardActions border>
                         <Button colored>GitHub</Button>
                         <Button colored>LinkedIn</Button> 
                     </CardActions>

                </Card>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is react</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is react</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>This is react</h1></div>
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
            </Tabs>

            <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col={12}>
        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                {this.toggleCategories()}
            </section>
          </div>  
            )
    }
}

export default Projects;