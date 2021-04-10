import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        this.state = {
             
        }
    }
    
    render() {
        
        return (
            <div style={{textAlign:'center',marginTop:'20%', fontSize:'30px'}}>
                  <Redirect to ='/' />
                {/* <Link to='/'   >Login again</Link> */}
               
            </div>
        )
    }
}