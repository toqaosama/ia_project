import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
function Login() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <Card.Title style={{textAlign:'center' , fontSize:'50px' , color:'black' ,margin:'15px'}}>log in</Card.Title>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#" style={{color:'black'}}>Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" style={{backgroundColor:'black' , borderBlockColor:'black'}}><a href="#" style={{color:'white',textDecoration:'none'}}>Sign in</a></MDBBtn>
      <MDBBtn className="mb-4" style={{backgroundColor:'black' , borderBlockColor:'black'}}> <a href="/Signup" style={{color:'white',textDecoration:'none'}}>Sign up</a></MDBBtn>
      <div className="text-center">
        <p>Not a member? <a href="#!" style={{color:'black'}}>Register</a></p>
        
      </div>

    </MDBContainer>
  );
}

export default Login;