import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router , Route, Link, Switch, Redirect} from 'react-router-dom';

export default class HomePage extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null)
        {
            loggedIn = false
        }
        else
        {
            console.log(token)
        }
        
        this.state = {
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false)
        {
            console.log(this.state.loggedIn)
            return <Redirect to ='/' />
        }
        return (
            <div>
             <Navbar collapseOnSelect expand="lg" bg=" bg-light" variant="">
                    <Navbar.Brand href="/">React</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/emplyeelist">EmployeeList</Nav.Link>
                          
                            
                         
                         
                        </Nav>
                        <Nav>
                       
                            <Nav.Link href="/logout">Logout</Nav.Link>
                            
                         
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

              
               <h1 style={{textAlign:'center',marginTop:'20%'}}>Welcome To My First App</h1>
            </div>
        )
    }
   
}


