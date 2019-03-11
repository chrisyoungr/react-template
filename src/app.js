import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './components/home/home'
import Admin from './components/admin/admin'
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
                  exact path="/admin" render={(props)=>{
                      return <Admin {... props} />
                    }}
                />
                <Footer />
            </div>
        )
    }
}