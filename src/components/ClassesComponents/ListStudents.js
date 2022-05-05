import {Component} from "react";
import Student from "./Student";

export default class ListStudents extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.showFlag) {
            return (
                <div>
                    <Student loginVal={'Maxim'} ageVal={'27'} />
                    <Student loginVal={'Nina'} ageVal={'45'} />
                    <Student loginVal={'George'} ageVal={'18'} />
                </div>
            );
        } else {
            return (
                <div>
                    <h1>List is hidden</h1>
                </div>
            );
        }
    }
}
