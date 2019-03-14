import React from 'react';
import {Table,Button} from 'react-bootstrap';
import history from '../history';

export default class AppointmentsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Appointment Detail:</h1>
                            <div className="row show-grid">
                                <div className="col-md-1"><Button variant="secondary">Edit</Button></div>
                                <div className="col-md-1"><Button variant="light">Delete</Button></div>
                            </div>
                            <div className="row show-grid">
                                <div className="col-md-6">CLIENT NAME: </div>
                                <div className="col-md-6">TYPE: </div>
                            </div>
                            <div className="row show-grid">
                                <div className="col-md-6">ISA: </div>
                                <div className="col-md-6">AGENT: </div>
                            </div>
                            <div className="row show-grid">
                                <div className="col-md-6">STATUS: </div>
                                <div className="col-md-6">PIPELINE: </div>
                            </div>
                            <div className="row show-grid">
                                <div className="col-md-6">SOURCE: </div>
                                <div className="col-md-6">.</div>
                            </div>
                            <div className="row show-grid">
                                <div className="col-md-6">CREATED BY: </div>
                                <div className="col-md-6">CREATED TIME: </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <h3>Status History</h3>
                            <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                <Table Responsive className="table table-sm table-striped dataTable" id="tblStatusHistory">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Changed By</th>
                                            <th>Status</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1/7/2019 12:35 PM</td>
                                            <td>Chris Y</td>
                                            <td>APT. MET</td>
                                            <td><Button variant="secondary">Edit</Button></td>
                                            <td><Button variant="light">Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>11/4/2018 2:35 PM</td>
                                            <td>Chris Y</td>
                                            <td>APT. SET</td>
                                            <td><Button variant="secondary">Edit</Button></td>
                                            <td><Button variant="light">Delete</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}