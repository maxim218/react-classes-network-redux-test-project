import {Component} from "react";

export default class ButtonHideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {isListShown: true, clicksCount: 0};
    }

    componentDidUpdate() {
        const isListShown = this.state.isListShown;
        const clicksCount = this.state.clicksCount;
        this.props.customOnBtnClick(isListShown, clicksCount);
    }

    customClickAction() {
        this.setState((oldState) => {
            const isListShown = !oldState.isListShown;
            const clicksCount = oldState.clicksCount + 1;
            return {isListShown: isListShown, clicksCount: clicksCount};
        });
    }

    render() {
        const blockStyleObj = {padding: '16px', marginBottom: '10px', background: this.props.customBackground};
        const btnStyleObj = {textAlign: 'center', padding: '8px', background: 'yellow', cursor: 'pointer', display: 'inline-block', width: '150px'};
        return (
            <div style={blockStyleObj}>
                <div style={btnStyleObj} onClick={this.customClickAction.bind(this)}>{this.state.isListShown ? "Hide" : "Show"}</div>
                <br/>
                <br/>
                <div>Clicks number: {this.state.clicksCount}</div>
            </div>
        );
    }
}