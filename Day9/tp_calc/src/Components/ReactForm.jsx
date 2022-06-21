import React, { Component } from 'react'
import "./ReactForm.css"
export class ReactForm extends Component {
    constructor() {
        super();
        this.state = {
            user: {
            }
        }
    }
    changeName = (e) => {
        this.setState((prevState) => ({
            user: { ...prevState.user, name: e.target.value }
        }))
        console.log(e);
        // this.setState({...this.state.user,name:e.target.value});
        // console.log("name");
    }
    changeCity = (e) => {
        this.setState((prevState) => ({
            user: { ...prevState.user, city: e.target.value }
        }))
        console.log(e);

        // this.setState({...this.state.user,city:e.target.value});
        // console.log(this.state.city);
    }
    changeAge = (e) => {
        this.setState((prevState) => ({
            user: { ...prevState.user, age: e.target.value }
        }))
        // this.setState({...this.state.user,age:e.target.value});
        // console.log("age");
    }
    onSubmit = () => {
        alert('submitted!!! ', this.state.user.toString());
        console.log(this.state.user)
    }
    clear = () => {
        alert("clear")
        this.setState({
            // e.preventDefault()
            user: {
                name: '',
                age: '',
                city: ''
            }
        });
    }
    render() {
        return (
            <div className="Main-Card">
                Name : <Input funcName={this.changeName} name={'nameBox'} val={this.state.user.name} />
                Age :  <Input funcName={this.changeAge} name={'ageBox'} val={this.state.user.age} />
                City :  <Input funcName={this.changeCity} name={'cityBox'} val={this.state.user.city} />

                <Button label={"submit"} formAction={this.onSubmit} />
                {/* <button label={"clear"} onClick={this.clear.bind(this)}>Reset</button> */}
                <Button label={"clear"} formAction={this.clear} />
            </div>
        )
    }
}



function Input(props) {
    console.log(...[props]);
    return (
        <>
            <input onChange={(event) => props.funcName(event)} name={props.name} value={props.val} />
        </>
    )
}


function Button(props) {
    return (
        <>
            <button onClick={props.formAction}>{props.label}</button>
        </>
    )
}


export default ReactForm;