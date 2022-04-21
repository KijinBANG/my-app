import { Component } from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        return <div>
            나의 새롭고 멋들어진 Component.<br/>
            안녕하세요. 제 이름은 {name} 입니다.<br/>
            children 의 값은 {children} 입니다.<br/>
            제가 제일 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    }
}

MyComponent.defaultProps = {
    name: 'GUEST'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}


export default MyComponent;