import axios from 'axios';
import React, { Component } from 'react';
import { Table, Dropdown, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            "name": " ",
            "gender": " ",
            "balance": 0.0,
            "account_no": 0,
            "accounttype": "  ",
            "email": " ",
            "password": " "
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        let emp = {
            "name": this.state.name,           
            "gender": this.state.gender,
            "balance": this.state.balance,
            "account_no": this.state.account_no,
            "accounttype": this.state.accounttype,
            "email": this.state.email,
            "password": this.state.password
        }
        axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/register", emp).then(response => {
            console.log(response)
            alert("Record Save Successfully!!!")
        }).catch(error => {
            console.log(error)
            alert("Enter Your Full Details")
        })
    }

    render() {
        return (
            <div align="center"  style={{ marginLeft: '2px',  }} >
                
           
                <Form onSubmit={this.handleSubmit} >
                 <div  style={{width:'45%',border:'1px Solid black',textAlign:'left', marginTop:'3%',backgroundColor:'white'}}>
                   <div>
                   <span> <Link to="/" style={{width:'30%',float:'Right',marginRight:'-7%',fontSize:'20px'}}>Login</Link> </span> <span><h2 style={{ width:'70%', marginLeft:'10%' }}>Registration Form</h2></span> 
                       </div>
                    <hr></hr>
                        <Form.Group controlId="formBasicName" style={{ width:'70%', marginLeft:'10%' }}>
                            <Form.Label><b>Name</b> </Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name"  onChange={this.handleChange} />
                        </Form.Group>
                       

                        <Form.Group controlId="formBasicgender" style={{ marginLeft:'10%' }}>
                            <Form.Label><b>Gender </b> </Form.Label><br></br>
                            <input type="radio" name="gender" value="Male" onChange={this.handleChange}></input> Male{" "}{" "}{" "}{" "}
                            <input type="radio" name="gender" value="Female" onChange={this.handleChange}></input> Female {" "}{" "}{" "}{" "}
                            <input type="radio" name="gender" value="Other" onChange={this.handleChange}></input>   Other

                        </Form.Group>

                        <Form.Group controlId="formBasicbalance" style={{ width:'70%', marginLeft:'10%' }}>
                            <Form.Label><b>Balance</b> </Form.Label>
                            <Form.Control type="text"  placeholder="Enter balance" name="balance" value={this.state.balance} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicaccount_no" style={{width:'70%', marginLeft:'10%'  }}>
                            <Form.Label><b>Account No</b> </Form.Label>
                            <Form.Control type="number" placeholder="Enter account no" name="account_no" value={this.state.account_no} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicaccounttype" style={{width:'70%', marginLeft:'10%' }}>
                            <Form.Label><b>Account Type</b> </Form.Label>
                            <Form.Control as="select" name="accounttype" value={this.state.accounttype} onChange={this.handleChange}>
                                <option >Default select</option>
                                <option> Current </option>
                                <option>Savings </option>
                                <option> Salary </option>
                                <option>Fixed deposit </option>
                                <option>NRI </option>
                            </Form.Control>
                        </Form.Group>
                       
                        <Form.Group controlId="formBasicemail" style={{ width:'70%', marginLeft:'10%' }}>
                            <Form.Label><b>Email</b> </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group  controlId="formGridPassword" style={{ width:'70%', marginLeft:'10%' }}>
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control type="password" name="password" value={this.state.Password} onChange={this.handleChange} placeholder="Enter password" />
                        </Form.Group>
                        

                    <Button variant="primary" type="submit" style={{ width: '30%', marginLeft: '33%' }}>
                        Submit
             </Button>
                    
                   </div>
                    
                   
                </Form>
            </div >
        )
    }
}
