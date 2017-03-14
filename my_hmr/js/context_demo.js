import React, {PropTypes, Component} from "react";
import ReactDom from "react-dom";

class Button extends Component {

    click() {
        console.log("clicked this is " + this.props.children);
    }

    render() {
        return (
            <button style={{color: this.context.color}} onClick={()=> {
                this.click();
            }}>
                {this.props.children}
            </button>
        )
    }
}

Button.propTypes = {
    children: PropTypes.string.isRequired
};

Button.contextTypes = {
    color: PropTypes.string.isRequired
};

class Message extends Component {
    render() {
        return (
            <li>
                {this.props.text}<Button>Delete</Button>
            </li>
        )
    }
}

Message.propTypes = {
    text: PropTypes.string.isRequired
};

class MessageList extends Component {
    getChildContext() {
        return {
            color: "Red"
        };
    }

    render() {
        var children = this.props.messages.map((value, index)=> {
            return <Message text={value} key={index}/>
        });

        return (
            <ul>
                {children}
            </ul>
        );
    }
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired
};

MessageList.childContextTypes = {
    color: PropTypes.string.isRequired
};


const messages = [
    "aa",
    "cc"
];

var demo = <MessageList messages={messages}/>;
console.log(demo);

ReactDom.render(demo, document.body);

if (module.hot) {
    module.hot.accept();
}