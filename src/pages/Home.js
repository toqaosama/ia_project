import React from 'react';
import styles from  './home.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Home = () => {
  return (
    <>
        <Card style={{ width: '100rem', height:"'100rem" ,textAlign:'center',marginTop:'250px',borderBlockColor:'transparent' }}>
      <Card.Body style={{display:'block'}} >
        <Card.Title>log in</Card.Title>
        <Card.Text>
          login with your E-mail
        </Card.Text>
        <Button variant="dark" style={{ width: '15rem' }}><a href='/Login' style={{textDecoration:'none',color:'white'}}>Log-in </a></Button>

      
      </Card.Body>
    </Card>
        
   </>

  )
}
export default Home