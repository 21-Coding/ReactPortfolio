import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
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
                {this.toggleCategories()}
            </section>
          </div>  
            )
    }
}

export default Projects;