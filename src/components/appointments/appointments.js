import React from 'react';
import {Table,Button} from 'react-bootstrap';
import history from '../history';
import cyService from '../../services/cyServices';

export default class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details:[]
        };
        this.message = cyService.getData();
        const detailsPromise = cyService.getAppointmentDetail();
        detailsPromise.then((d) =>{
            console.log("detail promise here",d);
            this.setState({
                details: d
            });
            console.log("after",this.state)
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
                                    { this.state.details.map(detail => {
                                        return (
                                            <tr key={detail.row}>
                                                <td><a href={"appointments-detail/" + detail.row} >{detail.name}</a></td>
                                                <td>{detail.type}</td>
                                                <td>Chris Y</td>
                                                <td>{detail.isa}</td>
                                                <td>11/4/2018 2:35 PM</td>
                                                <td>APT. MET</td>
                                                <td><Button>Edit</Button></td>
                                                <td><Button>Delete</Button></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}