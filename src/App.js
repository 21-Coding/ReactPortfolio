import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';



class App extends Component {
  render(){
  return (
    <div className="App">
{/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        
        <Header title="" scroll>
        <img
            src="https://media.giphy.com/media/VJO1f4M74IAXKTMYF8/giphy.gif"
            alt="avatar"
            className="avatar-img"
            style={{height: '95px'}}
            />

        </Header>
        <Drawer title="">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    </div>
  );
}
}

export default App;
