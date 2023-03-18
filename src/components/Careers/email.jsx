import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import career from "../../images/career.jpg";
// npm i @emailjs/browser
// npm install styled-components

const Contact = ({data,index}) => {
  console.log(data,index)
  const form = useRef();
 const [inputData,setInputData] = useState({
  name:'',
  email:'',
  contact:'',
  position:`${data[index].job_description}`,
  skills:'',
  experience:'',
  notice_period:'',
  message:''
 })
 const handleChange = (e)=>{
   const name = e.target.name
   const value = e.target.value;
   if(name !== 'position'){
   setInputData({
    ...inputData,
    [name]:value
   })}
 }
  const sendEmail = (e) => {
    e.preventDefault();
    // const Regex = /[^\s]*@[a-z0-9.-]*/i
   if(inputData.name.length<3  || inputData.message.length<1){
      alert('Please Provide Correct information')
   }
   else{
    emailjs
      .sendForm(
        "service_6wvwdw9",
        "template_3y5p9u7",
        form.current,
        "RBbIpioPG62k7yecV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mail was sent Successfully!");
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      setInputData({
        name:'',
        email:'',
        contact:'',
        skills:'',
        experience:'',
        notice_period:'',
        message:''
      })
    }
  };

  return (
    <div className="form_container">
      <div className="image">
        <img  style={{width:"100%",height:'1256px',opacity:'0.7'}}src={career} alt="" />
      </div>
    <div style={{margin: '0 auto',position:'absolute',top:'12%',right:'8%',width:'571px',marginBottom:'-5px'}}>
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" value={inputData.name} onChange={handleChange} name="name"/>
        <label>Email</label>
        <input type="email" value={inputData.email} onChange={handleChange} name="email" />
        <label>Contact</label>
        <input type="tel" value={inputData.contact} onChange={handleChange} name="contact" />
        <label>Degree</label>
        <select name = "degree" className="dropdown"><option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="Phd">Phd</option>
        </select>
        <label>Year of Graduation</label>
        <input type="date"  name="graduation_year"/>
        <label>Position</label>
        <input type="text" value={inputData.position} name="position"/>
        <label>Skills</label>
        <input type="text" value={inputData.skills} onChange={handleChange} name="skills"/>
        <label>Experience (in years)</label>
        <input type="text" value={inputData.experience} onChange={handleChange} name="experience"/>
        <label>Notice Period (in days)</label>
        <input type="text" value={inputData.notice_period} onChange={handleChange} name="notice_period"/>
        <label>Why you want to join us?</label>
        <textarea name="message" onChange={handleChange}  value={inputData.message}/>
       

        {/* <label>Send Your Resume</label>
        <input type="file" name = "Resume"/> */}
        <input type="submit" value="Apply" />
        
        

      </form>
    </StyledContactForm>
    </div>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin : 0 auto;
    font-size: 20px;
    
    input {
      width: 98%;
      height: 35px;
      margin-bottom:15px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      font-size:18px;
      
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 98%;
      width: 98%;
      max-height: 100px;
      min-height: 100px;
      padding: 3px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin: 0.5rem 0rem;

      color: white;
    }
    
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      height:50px;
      font-size:26px;
      width:100%;
      background: #0a5c97;
      color: white;
      border: none;
      padding:7px;
    transition: transform .3s ease-out,background-color .3s,box-shadow .4s,-webkit-transform .3s ease-out;

    }
    input[type="submit"]:hover {
      background-color: black;
      color: #0a5c97;
   /* box-shadow:0px 30px 33px -7px #444343; */
   border-color: blue;
    }
    .dropdown{
      font-size: 18px;
      width: 99%;
      height: 46px;
      margin-bottom: 15px;
      padding: 3px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
}

option{
  height:50px;
  border-radius:5px
}
   
`;
