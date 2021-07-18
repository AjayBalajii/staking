import React, { useState,useEffect } from "react";
import "./App.css";
import web3 from './web3';
import token from './token.js';
import l from "./l.png"


function Sc2(){
const [tid3,setId3]=useState("");
    const bal=async()=>{
        let account = await web3.eth.getAccounts();

        var allowan = await token.methods.allowance(account[0],"0x4783aD97Df0C00C2ef8305F94885bA0Ff7c20547").call();

        if(allowan == 0){
            setId3(true);
            }
            else{
         setId3(false);
            }
    }
    useEffect(()=>{bal()})

    const approve = async() => {
        let account = await web3.eth.getAccounts();
        await token.methods.approve("0xf1ff561190950Ed9020fe62DB83045dED760A606",1000000000000000).send({from:account[0]});
      }

    return(
        <div class="check"  style={{backgroundColor:"#0000 " ,padding:"20px", borderRadius:"20px"}}>
<br/>
<br/>
<br/>
{ tid3 === true ? 
(
(
<div>
<h5>Before Swap we want to approve first</h5>
<br />
<button class="btn btn-dark" onClick={approve}>Approve</button>
</div>
)
):
(
(
<div>
 <img src={l} alt="" height={100} width={150}/><br/>
 <h4>Approved</h4>
</div>
)
)}
<br/>
<br/>

</div>
    );
}
export default Sc2;