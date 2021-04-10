import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import{ Button, Table,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class UpdateCustomer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              id:"",
              name:"",
              gender:"",
              balance:"",
              account_no:"",
              accounttype:"",
              email:"",
        }
        this.onHandlechange=this.onHandlechange.bind(this);
    }
    componentDidMount(){
        this.setState({
            id:this.props.location.state.getId,
           name: this.props.location.state.name,
           gender:this.props.location.state.gender,
           balance:this.props.location.state.balance,
           account_no:this.props.location.state.account_no,
           accounttype:this.props.location.state.accounttype,
           email:this.props.location.state.email
        })
    }
    onHandlechange(event){
       const name = event.target.name;
       const value =event.target.value;
       this.setState({
           [name]:value
       }) 
    }
    update=() =>{
    var Id = this.state.id
       // console.log(Id);
        let register={
            "name":this.state.name,
            "gender":this.state.gender,
            "balance":this.state.balance,
            "account_no":this.state.account_no,
            "accounttype":this.state.accounttype,
            "email":this.state.email,
            "password":this.state.password
                }
              //  console.log(register);
                axios.put(" http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/"+Id+"/",register)
                .then(response => {
                   console.log(response);
                   alert("Your Record Update Successfully!!!")
                }).catch(error =>{
                   // console.log("error:",error)
                    alert("Not submite");
                })
    }

    render() {
        return (
            <div>
                <Link to='/emplyeelist' style={{backgroundColor:'#ffc107',margin:'1rem',marginTop:'1rem',padding:'7px',borderRadius:'5px', fontSize:'1.5rem',color:'black' }}>
                    Back
                </Link>
               
                <br></br>
                <br></br>
                <h1   style={{textAlign: 'center'}}>Update Customer</h1>
                <Form>
                <Table style={{textAlign:'center',margin:'4rem'}}>
                <tr>
                    
                    <th>ID:</th>
                    <td><input type="text" disabled name="id" onChange={this.onHandlechange}  value={this.state.id} /></td>
                </tr>
                   
                        <tr>
                    
                            <th>Name:</th>
                            <td><input type="text" name="name" onChange={this.onHandlechange}  value={this.state.name} /></td>
                        </tr>
                        <tr>
                            <th>Gender:</th>
                            <td><input type="text" name="gender" onChange={this.onHandlechange} placeholder="gender" value={this.state.gender} /></td>
                        </tr>
                        <tr>
                            <th>account_no:</th>
                            <td><input type="text" name="account_no" onChange={this.onHandlechange} placeholder="account_no" value={this.state.account_no} /></td>
                        </tr>
                        <tr>
                            <th>Balance:</th>
                            <td><input type="text" name="balance" onChange={this.onHandlechange} placeholder="balance" value={this.state.balance} /></td>
                        </tr>
                        <tr>
                            <th>Account Type:</th>
                            <td><input type="text" name="accounttype" onChange={this.onHandlechange} placeholder="accounttype" value={this.state.accounttype} /></td>
                        </tr>
                   <tr>
                      { <td colSpan="2"> <Button type="button" variant="warning" onClick={()=> this.update(this.state.id)} >Update</Button>
                      </td>}
                </tr>
                  
                </Table>
                </Form>
     
            </div>
        )
    }
}