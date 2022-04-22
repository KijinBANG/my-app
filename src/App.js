import {Component} from "react";
import './App.css';
import MyComponent from "./Component";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./eventPractice/EventPractice";
import EPWithFunctionComponent from "./eventPractice/EPWithFunctionComponent";
import ValidationSample from "./validataion/ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample1 from "./iteration/IterationSample1";
import IterationSample2 from "./iteration/IterationSample2";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

//random color 생성
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        const name = 'react';

        return (
            <div>
                <MyComponent name={'방기진'} favoriteNumber={7}>율&연</MyComponent>
                <Counter/>
                <Say/>
                <EventPractice/>
                <EPWithFunctionComponent/>
                <ValidationSample/>
                <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
                <button onClick={() => this.ScrollBox.scrollToBottom()}>
                    {/* 위의 code 에서 onClick = {this.ScrollBoc.scrollToBottom} 이라 하면 오류가 발생하는 이유를 생각 해 보자. */}
                    맨 밑으로
                </button>
                <IterationSample1/>
                <IterationSample2/>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        )
    };
}

export default App;
