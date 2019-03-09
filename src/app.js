import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './components/home/home'
import About from './components/about/about'
import history from './components/history'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="app">
                <Header />
                <Route
                  exact path="/" render={(props)=>{
                      return <Home {... props} />
                    }}
                />
                <Route
                  exact path="/about" render={(props)=>{
                      return <About {... props} />
                    }}
                />
                <Footer />
            </div>
        )
    }
}