import React, { Component } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


export default class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        else {
            console.log(token)
        }
        this.initialState = {
            email: "",
            password: "",
            loggedIn
        }
        this.state = this.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        const { email, password } = this.state;
        let emp = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login", emp).then(response => {
            // console.log(response.data)

            let result = (response.data.message)
            let data = response.data

            if (result === undefined) {
                console.log(data)
            }

            else {
                alert( " Please enter valid email password")
                return < Redirect to='/' />

            }
            if (email === this.state.email && password === this.state.password) {
                localStorage.setItem("token", "logincheck")
                this.setState({
                    loggedIn: true
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/homepage' />

        }

        return (

            <div align="center" style={{ marginLeft: '2px', paddingTop: '5%', }} >

                <Form onSubmit={this.handleSubmit} >

                    <div style={{ width: '40%', height: '350px', textAlign: 'left', border: '1px Solid black', backgroundColor: 'white' }}>
                        <div>

                            <h1 style={{ marginLeft: '30px', width: '30%' }}>Log in</h1>
                            <Link to="/register" style={{ float: 'Right', marginRight: '5%' }} >Sign Up</Link>

                        </div>

                        <br></br>
                        <Form.Group controlId="formBasicemail" style={{ width: '70%', marginLeft: '5%' }}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicpassword" style={{ width: '70%', marginLeft: '5%', paddingBottom: '2%' }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ marginLeft: '29px' }}>
                            Submit
  </Button>
                    </div>




                </Form>


            </div>
        )
    }
}
