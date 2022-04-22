import {useState} from "react";

const EPWithFunctionComponent = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e => {
        let nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        // '...form' 자체가 하나의 코드! <=> 기존의 form 내용을 이 자리에 복사한다는 의미!
        setForm(nextForm); //이부분에서 username 이 저장되지 않는 이유를 알아보자!
        /*
        console.log('username in nextFrom: ', form.username);
        console.log('message in from: ', form.message);
         */
    }
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };
    return (
        <div>
            <h1>Event Practice with Function Component</h1>
            <input
                type={'text'}
                name={'username'}
                placeholder={'Enter username.'}
                value={username}
                onChange={onChange}
                /><br />
            <input
                type={'text'}
                name={'message'}
                placeholder={'Enter whatever you want.'}
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
                /><br />
            <button onClick={onClick}
                >확인</button>
        </div>
    )
}

export default EPWithFunctionComponent;