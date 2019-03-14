import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './components/home/home'
import Admin from './components/admin/admin'
import Appointments from './components/appointments/appointments'
import AppointmentsDetail from './components/appointments/appointments-detail'
import MonthlyReport from './components/monthly-report/monthly-report'
import CallTracker from './components/call-tracker/call-tracker'
import history from './components/history'
import Login from './components/authentication/login';

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
                  exact path="/appointments" render={(props)=>{
                      return <Appointments {... props} />
                    }}
                />
                <Route
                  exact path="/appointments-detail" render={(props)=>{
                      return <AppointmentsDetail {... props} />
                    }}
                />
                <Route
                  exact path="/monthly-report" render={(props)=>{
                      return <MonthlyReport {... props} />
                    }}
                />
                <Route
                  exact path="/call-tracker" render={(props)=>{
                      return <CallTracker {... props} />
                    }}
                />
                <Route
                  exact path="/admin" render={(props)=>{
                      return <Admin {... props} />
                    }}
                />
                <Route
                  exact path="/login" render={(props)=>{
                      return <Login {... props} />
                    }}
                />
                <Footer />
            </div>
        )
    }
}