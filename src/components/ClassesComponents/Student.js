import {Component} from "react";

export default class Student extends Component {
    render() {
        return (
            <div style={{background: 'wheat', padding: '8px', borderRadius: '8px', marginBottom: '10px'}}>
                <span>Login: {this.props.loginVal}</span> | <span>Age: {this.props.ageVal}</span>
            </div>
        );
    }
}
