import React from 'react';
import ReactDom from 'react-dom';

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

class A extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log("A will unmount");
    }

    render() {
        let random = Math.random();
        return <div>A {random}</div>
    }
}


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            toggleState: true,
        }
    }

    toggle() {
        this.setState(prevState=> {
            return {
                toggleState: !prevState.toggleState
            }
        });
    };

    componentDidMount() {
        this.timerId = setInterval(()=> {
            this.tick()
        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        let random = Math.random();
        if (random < 0.5) {
            return (
                <div>
                    Hello world
                    <A/>
                    <FormattedDate date={this.state.date}/>
                    <button onClick={(e)=>this.toggle(e)}>{this.state.toggleState ? 'on' : 'off'}</button>
                </div>
            );
        } else {
            return (
                <div>
                    <A/>
                    Hello world
                    <FormattedDate date={this.state.date}/>
                    <button onClick={(e)=>this.toggle(e)}>{this.state.toggleState ? 'on' : 'off'}</button>
                </div>
            );
        }

    }
}

class FormattedDate extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUpdate() {
        console.log("FormattedDate will update")
    }

    componentWillUnmount() {
        console.log("FormattedDate will unmount");
    }

    render() {
        return <h1>Now is {this.props.date.toLocaleTimeString()}</h1>
    }
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>
}

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>
}

class LoginCtrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        this.setState({isLoggedIn: true});
    }

    logout() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return <div>
            {isLoggedIn ? "Hello" : "plz login"}
            {isLoggedIn ? (<LogoutButton onClick={this.logout}/>) : (<LoginButton onClick={this.login}/>)}
        </div>
    }
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textarea: "Plz input sth",
            select: "coconut"
        };
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.textInput.value = e.target.value;
        console.log(this.selectWidget);
    }


    submit(e) {
        alert("submit!");
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input name="uncontrolled"  defaultValue={123} ref={input=>this.textInput = input}/>
                <textarea name="textarea" value={this.state.textarea} onChange={this.onValueChange}></textarea>
                <select ref={(selectWidget)=> {
                    this.selectWidget = selectWidget;
                    console.log("setup selectWidget ref")
                }} name="select" value={this.state.select}
                        onChange={this.onValueChange}>
                    <option value="coconut">Coconut</option>
                    <option value="apple">Apple</option>
                </select>
                <input type="submit"/>
            </form>
        )
    }

}

ReactDom.render(
    <div>
        <Clock/>
        <LoginCtrl/>
        <ul>{listItems}</ul>
        <p></p>
        <MyForm/>
    </div>
    , document.body);
