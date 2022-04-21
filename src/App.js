import { Component } from "react";
import './App.css';
import MyComponent from "./Component";
import Counter from "./Counter";
import Say from "./Say";

class App extends Component {
    render() {
        const name = 'react';
        return (
            <MyComponent name={'방기진'} favoriteNumber={7}>율&연</MyComponent>,
            <Counter />,
            <Say />
        )
    };
}

export default App;
