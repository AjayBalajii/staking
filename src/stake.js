import React from 'react';
import './App.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepIcon from '@material-ui/core/StepIcon';
import {useState,useEffect } from "react";
import n from "./n.png"
import web3 from './web3';
//import vabi from "./vault.js";
import Staking1 from './Staking';
import token from './token';
import Sc1 from './sc1';
import Sc2 from './sc2';
//import {BrowserRouter as Router , Route , Link , Switch } from "react-router-dom";

window.v=0;
function Stake(){
    const[activeStep,setActiveStep]=useState(0);
    const[bb ,setbb]=useState("");

  const[sacc ,setsacc]=useState("");
    const[done,setdone]=useState("");
  useEffect(async()=>{
setsacc(await web3.eth.getAccounts());

if(sacc!=0){
  setbb(await token.methods.balanceOf(sacc[0]).call());

  
}
  });
  
  
  const nextStep =()=>{
        if(activeStep<4){
          setActiveStep((currentStep)=>currentStep+1)
          st();
         
  
        }
          if(activeStep==3){
            stake1();
          }
         
        
      }
      const previousStep =()=>{
        if(activeStep!=0){
          setActiveStep((currentStep)=>currentStep-1)
  
        }
      }
      function onc(){
        var next=document.getElementById("next");
              
        window.v=document.getElementById("max").value;
        if(next!=null&&window.v!=0){
          document.getElementById("next").disabled=false;
        }
      }
      var stake1=async()=>{
    
        let account = await web3.eth.getAccounts();
    
    var am =window.v*1000000000;
    alert(am);
    if(am!=0){
        await Staking1.methods.deposit(am).send({from:account[0]});
    setdone("Successfully done");
    var done1 =document.getElementById("done");
  if(done1!=null){
    document.getElementById("done").disabled=false;
    window.s=7;
  }
    }
    
      }

function st(activeStep){
    
    switch(activeStep){
        case 0:{
          function ch(){
            var next=document.getElementById("next");
            if(next!=null){
              document.getElementById("next").disabled=false;
            }
            var ch1=3;
            window.a=ch1;
            
          }
            
            return(
                <div >
                  <Sc1/>
                    <input  class="form-check-input"  type="checkbox" onClick={ch}  id="c4"/>&nbsp;
     
     I have read the <a href="#">Terms and Conditions</a><br/><br/>
     <button onClick={previousStep} class="btn-flat">Previous</button>   &nbsp; &nbsp; 

     {
  (sacc!=0&& window.a==3) ?((
    <button onClick={nextStep} id="next" class="btn-flat" >Next</button>  

  )):
  ((
    <button onClick={nextStep} id="next" class="btn-flat" disabled>Next</button>  

  ))
}
 
                </div>
            );
        }
        case 1:{
          
          var max = async() =>{
            var next=document.getElementById("next");
            if(next!=null){
              document.getElementById("next").disabled=false;
            }
          
            var balance = await token.methods.balanceOf(sacc[0]).call();
            balance=balance/1000000000;
            document.getElementById("max").placeholder=balance;
  window.v=balance; 
  
        }
          return(
  
            <div class="check" style={{backgroundColor:"#0000 " ,padding:"20px", borderRadius:"20px"}}>
            <br/>
            
            <h4>Please enter the amount of BLACK you want to stake</h4><br/>
            <br/>
            <div class="">
              <div class="row">
                  
                <div class="col-sm-6 offset-sm-3 col-ele ">
                <label>
                <p>Amount</p>
                  <div class="row justify-content-center">
                        <div class="col-sm">
                        <input type="text" id="max"   placeholder={0} onChange={onc} class="txtf"/>
                        </div>
                        <div class="col-sm">
                            <button class="btn-flat" onClick={max}>MAX</button>
                        </div>
                    </div>
                          <br/>
            
            </label>
            <div class="row">
                
  
                </div>
                </div>
                <p style={{textAlign:"center"}}>Balance:&nbsp;{bb/1000000000}</p>
  
                </div>
            </div>
            <br/><br/>

            <button onClick={previousStep} class="btn-flat">Previous</button>   &nbsp; &nbsp; 

{
(sacc!=0&& window.v!=0) ?((
<button onClick={nextStep} id="next" class="btn-flat" >Next</button>  

)):
((
<button onClick={nextStep} id="next" class="btn-flat" disabled>Next</button>  

))
}
 </div>
  
  
          );

        }
        case 2:{
          return(
            <div>

              <Sc2/>
              <button onClick={previousStep} class="btn-flat">Previous</button>   &nbsp; &nbsp; 
              <button onClick={nextStep} id="next" class="btn-flat" >Next</button>  
            </div>
          );

        }
        case 3:{
          return(
<div>
<h4>Click next Button to continue your staking </h4><br/><br/>
<button onClick={previousStep} class="btn-flat">Previous</button>   &nbsp; &nbsp; 
<button onClick={nextStep} id="next" class="btn-flat" >Next</button>  

</div>
          );
        }
        case 4:{
          function lo(){
            window.location.reload();
          }
          return(
<div>
<h2>{done}</h2><br/><br/>
{window.s==7?((
          <button class="btn-flat" id="done" onClick={lo} >Done</button>

)):
((
  <button class="btn-flat" onClick={lo} id="done" disabled>Done</button>

))

}
</div>
          
          );
          
        }

    }

}

    return(<div>
        <h2>STAKE YOUR BLACK</h2>
<Stepper orientation="horizontal" activeStep={activeStep} style={{backgroundColor:"black",color:"white"}}>
<Step>
<StepIcon></StepIcon>
</Step>
<Step >
<StepLabel></StepLabel>
</Step>


<Step>
<StepLabel></StepLabel>

</Step>
<Step>
  <StepLabel></StepLabel>
  
</Step>

</Stepper>


<div>
  {st(activeStep)}
</div>



    </div>);
}

export default Stake;