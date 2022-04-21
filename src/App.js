import { Component } from "react";
import './App.css';
import MyComponent from "./Component";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EPWithFunctionComponent from "./EPWithFunctionComponent";

class App extends Component {
    render() {
        const name = 'react';
        return (
            <MyComponent name={'방기진'} favoriteNumber={7}>율&연</MyComponent>,
            <Counter />,
            <Say />,
            <EventPractice />,
            <EPWithFunctionComponent />
        )
    };
}

export default App;
