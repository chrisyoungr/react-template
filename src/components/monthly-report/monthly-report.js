import React from 'react';
import {Table,Tab,Tabs,Row} from 'react-bootstrap';
import history from '../history';

export default class MonthlyReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div id="page-wrapper">
                <div className="container-fluid">
                    <Row>
                        <div className="col-lg-12">
                            <h1 className="page-header">Monthly Report</h1>
                            <Tabs defaultActiveKey="Appointmentspn" id="uncontrolled-tab-example">
                                <Tab eventKey="#appointments" title="Appointments">Appointments</Tab>
                                <Tab eventKey="#call-tracker" title="Call Tracker">Call Tracker</Tab>
                            </Tabs>
                            <div className="tab-content">
                                <div id="appointments" role="tabpanel" className="tab-pane fade in active">
                                    <h3>Appointments Report</h3>
                                    <br />
                                    <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                        <Table border="0" cellspacing="5" cellpadding="5">
                                            <tbody>
                                                <tr>
                                                    <td>Month-Year: </td>
                                                    <td><input type="text" id="min" name="min" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Agent: </td>
                                                    <td><input type="text" id="max" name="max" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Type: </td>
                                                    <td><input type="text" id="max" name="max" /></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table Responsive className="table table-sm table-striped dataTable" id="tblReport">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Dials</th>
                                                    <th>Text/Emails</th>
                                                    <th>Nurtures</th>
                                                    <th>APT SET</th>
                                                    <th>APT MET</th>
                                                    <th>SIGNED</th>
                                                    <th>CLOSED</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Fri, Feb 1</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>Sat, Feb 2</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <div id="calltracking" role="tabpanel" className="tab-pane fade">
                                    <h3>Call Tracking Report</h3>
                                    <br />
                                    <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                        <Table border="0" cellspacing="5" cellpadding="5">
                                            <tbody>
                                                <tr>
                                                    <td>Month-Year: </td>
                                                    <td><input type="text" id="min" name="min" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Agent: </td>
                                                    <td><input type="text" id="max" name="max" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Type: </td>
                                                    <td><input type="text" id="max" name="max" /></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table Responsive className="table table-sm table-striped dataTable" id="tblReport">
                                            <thead>
                                                <tr>
                                                    <th>f</th>
                                                    <th colSpan="4">Sunday</th>
                                                    <th colSpan="4">Monday</th>
                                                    <th colSpan="4">Tuesday</th>
                                                    <th colSpan="4">Wednesday</th>
                                                    <th colSpan="4">Thursday</th>
                                                    <th colSpan="4">Friday</th>
                                                    <th colSpan="4">Saturday</th>
                                                </tr>
                                                <tr>
                                                    <th>f</th>
                                                    <th>Dial</th>
                                                    <th>TEXT</th>
                                                    <th>CONT</th>
                                                    <th>APPT</th>
                                                    <th>NURT</th>
                                                    <th>Dial</th>
                                                    <th>TEXT</th>
                                                    <th>CONT</th>
                                                    <th>APPT</th>
                                                    <th>NURT</th>
                                                    <th>Dial</th>
                                                    <th>TEXT</th>
                                                    <th>CONT</th>
                                                    <th>APPT</th>
                                                    <th>NURT</th>
                                                    <th>Dial</th>
                                                    <th>TEXT</th>
                                                    <th>CONT</th>
                                                    <th>APPT</th>
                                                    <th>NURT</th>
                                                    <th>Dial</th>
                                                    <th>TEXT</th>
                                                    <th>CONT</th>
                                                    <th>APPT</th>
                                                    <th>NURT</th>
                                                    <th>Dial</th>
                                                    <th>TEXT</th>
                                                    <th>CONT</th>
                                                    <th>APPT</th>
                                                    <th>NURT</th>
                                                    <th>Dial</th>
                                                    <th>TEXT</th>
                                                    <th>CONT</th>
                                                    <th>APPT</th>
                                                    <th>NURT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Fri, Feb 1</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <td>Sat, Feb 2</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>119</td>
                                                    <td>12</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        )
    }
}