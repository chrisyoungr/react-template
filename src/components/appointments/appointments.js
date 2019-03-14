import React from 'react';
import {Table} from 'react-bootstrap';
import history from '../history';
import cyService from '../../services/cyServices';

export default class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.message = cyService.getData();
        const notePromise = cyService.getAsync();
        notePromise.then((n) =>{
            this.note = n;
        })
        .catch(error=>{
            console.log("error is:",error);
        });

    }

    render() {
        return(
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Appointments</h1>
                            <div>{this.message}</div>
                            <div>{this.note}</div>
                            <Table className="table table-sm table-striped dataTable table-responsive" id="tblAppointments">
                                <thead>
                                    <tr>
                                        <th>Client</th>
                                        <th>Type</th>
                                        <th>ISA</th>
                                        <th>Agent</th>
                                        <th>Created Time</th>
                                        <th>Status</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="appointments-detail">Tiger Nixon</a></td>
                                        <td>Buyer</td>
                                        <td>Chris Y</td>
                                        <td>CY</td>
                                        <td>11/4/2018 2:35 PM</td>
                                        <td>APT. MET</td>
                                        <td><button>Edit</button></td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="appointments-detail">Garrett Winters</a></td>
                                        <td>Seller</td>
                                        <td>Chris Y</td>
                                        <td>CY</td>
                                        <td>1/9/2019 12:45 PM</td>
                                        <td>APT. SET</td>
                                        <td><button>Edit</button></td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}