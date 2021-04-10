import React, { Component } from 'react';
import axios from 'axios';
import { Table , Button} from 'react-bootstrap';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Redirect, Link} from 'react-router-dom';
export default class EmployeeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cusList:[],
             getId:"",
             name:"",
             gender:"",
             account_no:"",
             balance:"",
             accounttype:"",
             email:""
        }

    }
    componentDidMount() {
        this.getCusList()
    }


  
    getCusList() {
        axios.get('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/').then(response => {
            let list = response.data
            this.setState({
                cusList: list
            })
            console.log(this.state.cusList)
        }
        )

        
    }
   
    update = (getUser) => {
    
        this.setState((state)=>(
            {
                getId:getUser.id,
                name:getUser.name,
                gender:getUser.gender,
                account_no:getUser.account_no,
                balance:getUser.balance,
                accounttype:getUser.accounttype,
                email:getUser.email
            }
        ))
    }

  onDeleteEmpRecord(empID) {
        alert(empID);
        axios.delete('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/' + empID + '/', { empId: empID,}).then(response => {
            console.log("Data:", response);
           this.getCusList()
        })
            .catch(error => {
                console.log("Error:", error)
            })
    }
   
  


    render() {
        if(this.state.name !== "" && this.state.email !== "")
        {
        //    console.log(this.state.name);
            return <Redirect
            to={{
            pathname: "/update",
            state: { 
                getId:this.state.getId,
                name: this.state.name ,
                gender:this.state.gender,
                account_no:this.state.account_no,
                balance:this.state.balance,
                accounttype:this.state.accounttype,
                email:this.state.email,
            }
          }}
        />
        }
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
                <Table border='1px' style={{ backgroundColor: 'lightblue', textAlign: 'center' }}>
                    <thead style={{ backgroundColor: 'olive', color: 'white' }}>
                        <tr>
                            <th>Name:</th>
                            <th>Gender:</th>
                            <th>Account No.:</th>
                            <th>Balance:</th>
                            <th>Account Type:</th>
                            <th>Email:</th>
                            <th colSpan="2"></th>
                           

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cusList.map((cust) =>

                            <tr>
                                <td>{cust.name}</td>
                                <td>{cust.gender}</td>
                                <td>{cust.account_no}</td>
                                <td>{cust.balance}</td>
                                <td>{cust.accounttype}</td>
                                <td>{cust.email}</td>
                                
                                {<td><Button variant="danger"
                                    onClick={() => this.onDeleteEmpRecord(cust.id)}>Delete</Button></td>}
                                
                         {<td> <Button variant="info"
                               onClick={()=> this.update(cust)}>Update</Button></td>}
                                </tr>
                            
                        )}
                         
                         
                     
                      
                    </tbody>
                </Table>
            </div>
        )
    }
}
