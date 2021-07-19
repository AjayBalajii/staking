import React, {useEffect, useState } from "react";
import "./App.css";
import web3 from './web3';
//import {Modal,Button,InputGroup,FormControl,} from "react-bootstrap";
import Staking1 from './Staking';
import Stake from "./stake";
import Unstake from "./unstake";

function Tab(){
    const [toggleState, setToggleState] = useState(1);

  //const [modalShow2, setModalShow2] = React.useState(false);


  const toggleTab = (index) => {
    setToggleState(index);
  };



  const wi=async()=>{
    let account = await web3.eth.getAccounts();

    await Staking1.methods.emergencyWithdraw().send({from:account[0]});
  }

useEffect(async()=>{
  let account = await web3.eth.getAccounts();
  var eem=document.getElementById("emerwid");
if(account!=0){
  if(eem!=null){
    eem.disabled=false;
  }
}
else{
  eem.disabled=true;
}
})
    return( <div className="container">
    <link rel="stylesheet" href="bs-stepper.min.css"/>
    
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              STAKE
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              UNSTAKE
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              WITHDRAW
            </button>
           
        </div>
          
    
          <div className="content-tabs">
            <div
              className={toggleState === 1 ? "content  active-content" : "content"}
            >
           <Stake/>
    
            </div>
    
            <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
            <Unstake/>
    
    
            </div>
    
            <div
              className={toggleState === 3 ? "content  active-content" : "content"}
            >
                        <br/><br/>
    
              <h2 style={{color:"#ffff",textTransform:"uppercase"}}>Emergency Withdraw</h2>
              <br/>
              
             <button class="btn-flat" onClick={wi} id="emerwid">Withdraw</button><br/><br/>
             <p style={{textAlign:"left",}}><b>Note:</b> When executing an emergency withdraw, you get back your funds immediately but with this function, you don't received any rewards.</p>
             
              <br/><br/>
              <br/><br/>
              <br/><br/>
              <br/><br/>
            </div>
          </div>
        </div>);
}
export default Tab;