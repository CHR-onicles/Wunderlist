import React, { useState } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';

import emailjs from 'emailjs-com';
import {Form, Button} from 'react-bootstrap';
// import {Card, Button} from "react-bootstrap";

// import {FontAwesome} from 'react-fontawesome';
// import { Link } from 'react-router-dom'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
export const About = ()=>{

  const[submitted, setSubmitted] = useState("");

    function sendEmail(e){
      e.preventDefault();

      setSubmitted(true);

    emailjs.sendForm('service_pxu4k3n', 'template_wz7b1dn', e.target, 'user_oAv1YM1JDZyWv4PIcYGgH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <>
        <div className="App d-flex flex-column align-items-center mt-2">
            <h1 className="">Contact Me</h1>
            <p className="text-center">share your views and feedbacks <br/></p>
            <Form onSubmit={sendEmail} style={{ width: '300px' }}>
              <Form.Group className="mb-2">
                <Form.Label className="d-flex" >Name</Form.Label>
                <Form.Control name="name" type='text' required/>
              </Form.Group>
        
              <Form.Group className="mb-2">
                <Form.Label className="d-flex">Email</Form.Label>
                <Form.Control name="email" type='email' required/>
                <small id="emailHelp" class="form-text d-flex text-muted">I'll never share your email with anyone else</small>
              </Form.Group>
              <Form.Group>
                <Form.Label className="d-flex">Your Thoughts</Form.Label>
                <Form.Control name="msg" as='textarea' required/>
              </Form.Group>
              <Button id="yash" className="mt-3" type='submit'>Submit Review</Button>
            </Form>
            {submitted && <div className="success">Successfully submitted</div>}
    </div>

    <div className="about mt-3 shadow-sm container">
            <div className="container border-2 mt-2 pb-1 bg-">
                <div className="container d-flex pt-3 justify-content-around">
                    <a className="text-dark" href="https://www.linkedin.com/in/%F0%9D%97%AC%F0%9D%97%AE%F0%9D%98%80%F0%9D%97%B5-%F0%9D%97%9F%F0%9D%97%AE%F0%9D%97%B9%F0%9D%97%BD%F0%9D%97%BC%F0%9D%98%81%F0%9D%98%82-92b4931b4/"><LinkedInIcon fontSize="large"/></a>
                    <a className="text-dark" href="https://www.instagram.com/using_namespace__std/"><InstagramIcon fontSize="large"/></a>
                    <a className="text-dark" href="https://twitter.com/YLalpotu?s=08"><TwitterIcon fontSize="large"/></a>
                    <a className="text-dark" href="mailto:yashrlalpotu30@gmail.com"><EmailSharpIcon color="danger" fontSize="large"/></a>
                </div>
                <p className="text-center text mt-2">Developed by - Yash Lalpotu</p>
            </div>
        </div>
        </>
    );
}