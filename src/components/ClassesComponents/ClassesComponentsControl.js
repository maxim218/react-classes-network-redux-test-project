import ListStudents from "./ListStudents";
import ButtonHideShow from "./ButtonHideShow";
import {Component} from "react";

export default class ClassesComponentsControl extends Component {
    constructor(props) {
        super(props);
        this.state = {showFlag: true};
    }

    customOnBtnClick(isListShown, clicksCount) {
        const message = `${isListShown} ${clicksCount}`;
        console.log(message);
        // control to avoid loop
        if(this.state.showFlag !== isListShown) {
            this.setState({showFlag: isListShown});
        }
    }

    render() {
        return (
            <div>
                <ButtonHideShow customBackground={'grey'} customOnBtnClick={this.customOnBtnClick.bind(this)} />
                <ListStudents showFlag={this.state.showFlag}/>
            </div>
        );
    }
}