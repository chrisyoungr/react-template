import React from 'react';
import {Table,Form, Button} from 'react-bootstrap';
import history from '../history';

export default class CallTracker extends React.Component {
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
                            <h1 className="page-header">Call Tracker</h1>
                            <div className="panel-body">
                                <Form role="form" className="js-form">
                                    <fieldset>
                                        <div className="form-group">
                                            <input id="js-agent" className="form-control" placeholder="Agent" name="agent" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-call-date" className="form-control" placeholder="Date Delivered" name="date-delivered" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials1" className="form-control" placeholder="Dials 8A-9A" name="dials1" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail1" className="form-control" placeholder="Text/Email 8A-9A" name="textemail1" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts1" className="form-control" placeholder="Contacts 8A-9A" name="contacts1" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures1" className="form-control" placeholder="Nurtures 8A-9A" name="nurtures1" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials2" className="form-control" placeholder="Dials 9A-10A" name="dials2" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail2" className="form-control" placeholder="Text/Email 9A-10A" name="textemail2" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts2" className="form-control" placeholder="Contacts 9A-10A" name="contacts2" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures2" className="form-control" placeholder="Nurtures 9A-10A" name="nurtures2" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials3" className="form-control" placeholder="Dials 10A-11A" name="dials3" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail3" className="form-control" placeholder="Text/Email 10A-11A" name="textemail3" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts3" className="form-control" placeholder="Contacts 10A-11A" name="contacts3" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures3" className="form-control" placeholder="Nurtures 10A-11A" name="nurtures3" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials4" className="form-control" placeholder="Dials 11A-12P" name="dials4" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail4" className="form-control" placeholder="Text/Email 11A-12P" name="textemail4" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts4" className="form-control" placeholder="Contacts 11A-12P" name="contacts4" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures4" className="form-control" placeholder="Nurtures 11A-12P" name="nurtures4" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials5" className="form-control" placeholder="Dials 12P-1P" name="dials5" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail5" className="form-control" placeholder="Text/Email 12P-1P" name="textemail5" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts5" className="form-control" placeholder="Contacts 12P-1P" name="contacts5" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures5" className="form-control" placeholder="Nurtures 12P-1P" name="nurtures5" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials6" className="form-control" placeholder="Dials 1P-2P" name="dials6" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail6" className="form-control" placeholder="Text/Email 1P-2P" name="textemail6" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts6" className="form-control" placeholder="Contacts 1P-2P" name="contacts6" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures6" className="form-control" placeholder="Nurtures 1P-2P" name="nurtures6" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials7" className="form-control" placeholder="Dials 2P-3P" name="dials7" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail7" className="form-control" placeholder="Text/Email 2P-3P" name="textemail7" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts7" className="form-control" placeholder="Contacts 2P-3P" name="contacts7" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures7" className="form-control" placeholder="Nurtures 2P-3P" name="nurtures7" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials8" className="form-control" placeholder="Dials 3P-4P" name="dials8" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail8" className="form-control" placeholder="Text/Email 3P-4P" name="textemail8" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts8" className="form-control" placeholder="Contacts 3P-4P" name="contacts8" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures8" className="form-control" placeholder="Nurtures 3P-4P" name="nurtures8" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials9" className="form-control" placeholder="Dials 4P-5P" name="dials9" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail9" className="form-control" placeholder="Text/Email 4P-5P" name="textemail9" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts9" className="form-control" placeholder="Contacts 4P-5P" name="contacts9" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures9" className="form-control" placeholder="Nurtures 4P-5P" name="nurtures9" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials10" className="form-control" placeholder="Dials 5P-6P" name="dials10" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail10" className="form-control" placeholder="Text/Email 5P-6P" name="textemail10" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts10" className="form-control" placeholder="Contacts 5P-6P" name="contacts10" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures10" className="form-control" placeholder="Nurtures 5P-6P" name="nurtures10" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials11" className="form-control" placeholder="Dials 6P-7P" name="dials11" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail11" className="form-control" placeholder="Text/Email 6P-7P" name="textemail11" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts11" className="form-control" placeholder="Contacts 6P-7P" name="contacts11" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures11" className="form-control" placeholder="Nurtures 6P-7P" name="nurtures11" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-dials12" className="form-control" placeholder="Dials 7P+" name="dials12" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-textemail12" className="form-control" placeholder="Text/Email 7P+" name="textemail12" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-contacts12" className="form-control" placeholder="Contacts 7P+" name="contacts12" type="text" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input id="js-nurtures12" className="form-control" placeholder="Nurtures 7P+" name="nurtures12" type="text" autoFocus />
                                        </div>
                                        <button id="js-submit-delivered" className="btn btn-primary">Submit</button>
                                    </fieldset>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}