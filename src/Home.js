import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import {Button} from 'react-bootstrap'


export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }
    
  
    render() {
      
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg=" bg-light" variant="">
                    <Navbar.Brand href="/">React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
                <Button variant="info" style={{marginLeft:'10%',marginTop:'3%'}} onClick={()=> this.setState({show:!this.state.show})}>showHide</Button>
                {
                    this.state.show ?
                    <p style={{ padding: '15px' }}>
                    <h1><u>Home page </u></h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the
             1500s, when an unknown printer took a galley of type and scrambled it to
             make a type specimen book. It has survived not only five centuries, but also
             the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
                :null

                }

             
         
               
            </div> 
        )
    }
   
}


