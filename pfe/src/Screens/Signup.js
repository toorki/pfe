import React, { useState } from "react"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBCheckbox,MDBIcon}from 'mdb-react-ui-kit';
import { addNewUser } from "../Redux/Actions/userActions";
import Alert from 'react-bootstrap/Alert';



function Signup(){
  const [cred, setCred] = useState({})
  const dispatch = useDispatch()
  const handlSignUp=()=>{
    dispatch(addNewUser(cred))
  }
    const {loading,message, error} = useSelector (state => state.addNewUser)
    return(
        <>
        <Header/>
      {loading && "loading"}
      
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
                The best Application <br />
                <span style={{color: 'hsl(218, 81%, 75%)'}}>for your Community</span>
            </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='full name' id='form1' type='text'
                   onChange={(e)=>setCred({...cred,fullName:e.target.value})} />
                </MDBCol>

               
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' 
              onChange={(e)=>setCred({...cred,email:e.target.value})}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' 
              onChange={(e)=>setCred({...cred,password:e.target.value})}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={handlSignUp}>sign up</MDBBtn>

              <div className="text-center">
              {['sucess',].map((variant) => (message &&
                <Alert key={variant} variant={variant}>
                    {message.message} </Alert>))}
              

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    {['danger',].map((variant) => (error &&
                <Alert key={variant} variant={variant}>
                    {error} </Alert>))}
        </>
    )
}

export default Signup