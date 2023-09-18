import React, { useState } from 'react'
import styles from './Form.module.css';
const Form = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass1,setPass1]=useState("");
  const [pass2,setPass2]=useState("");

  const [nameColor,setnameColor]=useState("");
  const [emailColor,setemailColor]=useState("");
  const [passwordColor,setpasswordColor]=useState("");
  const [passwordColor2,setpasswordColor2]=useState("");
  const reg = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;
  const [nameError,setnameError]=useState("");
  const [emailError,setemailError]=useState("");
  const [passwordError1,setpasswordError1]=useState("");
  const [passwordError2,setpasswordError2]=useState("");
  console.log(name,email,pass1,pass2);  
  const clickHandler=(e)=>{
        e.preventDefault();
        if(name.length<8)
        {
            setnameColor('Red');
            setnameError("Password Must be length of greater than 8");
        }
        else
        {
            setnameColor("Green");
            setnameError("");
        }

        if(email.includes("@gmail"))
        {
            setemailColor("Green");
            setemailError("");
        }
        else
        {
            setemailColor("Red");
            setemailError("The given mail is invalid");
        }

        if(pass1.length<6)
        {
            setpasswordColor("Red");
            setpasswordError1("Enter the password with length >6")
        }
        else
        {
            setpasswordColor("Green");
            setpasswordError1("")
        }

        if(reg.test(pass1))
        {
            setpasswordColor("Green");
            setpasswordError1("")
        }
        else
        {
            setpasswordColor("Red");
            setpasswordError1("include Special Characters and Digits")
        }

        if(pass1==pass2)
        {
            setpasswordColor2("Green");
            setpasswordError2("");
        }
        else
        {
            setpasswordColor2("Red");
            setpasswordError2("Password doesnt match");
        }
  }
  return (
    <div className={styles.for}>
      <form>
            <div className={styles.fields}>
                <div>
                    <label>Enter Your Name:<input style={{borderColor:nameColor,color:nameColor}} type="text" className='name'  onChange={(e)=>setName(e.target.value)} /></label>
                    <p className="nameError" style={{color:nameColor}}>{nameError}</p>
                </div>
                <div>
                    <label>Enter Your Email: <br /><input style={{borderColor:emailColor,color:emailColor}} type="email" className='email'  onChange={(e)=>setEmail(e.target.value)}/></label>
                    <p className='emailError' style={{color:emailColor}}>{emailError}</p>
                </div>
                <div>
                    <label >Enter Your Password: <br /><input style={{borderColor:passwordColor,color:passwordColor}} type="text" className='pass'  onChange={(e)=>setPass1(e.target.value)} /></label>
                    <p className='passwordError1' style={{color:passwordColor}}>{passwordError1}</p>
                </div>
                <div>
                    <label>ReEnter Your Password: <br /><input style={{borderColor:passwordColor2,color:passwordColor2}} type="text" id='pass2' onChange={(e)=>setPass2(e.target.value)}  /></label>
                    <p className='passwordError2'style={{color:passwordColor2}}>{passwordError2}</p>
               </div>
                <div>
                    <button className={styles.btn} onClick={clickHandler}>
                        Submit
                    </button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default Form
