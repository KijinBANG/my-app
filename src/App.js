import {Component} from "react";
import './App.css';
import MyComponent from "./Component";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EPWithFunctionComponent from "./EPWithFunctionComponent";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample1 from "./IterationSample1";
import IterationSample2 from "./IterationSample2";

class App extends Component {
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
            </div>
        )
    };
}

export default App;
