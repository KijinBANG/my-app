import {Component} from "react";

class ScrollBox extends Component {

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        /* above code means as below
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;
         */
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            width: '300px',
            height: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {
                    this.box = ref
                }}>
                <div style={innerStyle}/>
            </div>
        );
    }

}

export default ScrollBox;