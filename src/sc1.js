import React, { useState,useEffect} from "react";
import './App.css';
import web3 from './web3';
import vabi from "./vault.js";

import token from "./token";
window.count=0;


function Sc1(){
    const[b1,setb1 ] = useState("");
    const[b2,setb2 ] = useState("");
    const[account , setaccount] =useState("");
    
    useEffect(async()=>{
    setaccount( await web3.eth.getAccounts());
        if(account!=0){
          setb1( await vabi.methods.getBurnVaultBNBBalance().call());
          setb2(await token.methods.balanceOf(account[0]).call());
          
        }
     

    })

    return(

        <div>
 <div class="check" id="c1" class="container" style={{backgroundColor:"#0000 " ,padding:"20px", borderRadius:"20px"}}>
        <h5>Checkpoints</h5>
        
                  <p>
                  The following conditions must be met to proceed:
        </p>
        {account!=0?((
            <div >
 <div class="container">
 <div class="row justify-content-center">
   <div class="col-sm col-ele1">
     <div class="row">
       <div class="col-sm-9" style={{textAlign:"left"}}>
       <b style={{textAlign:"left"}}>Connected with MetaMask</b> <br/>
    If not connected, click the "Connect Wallet" button in the top right corner
    
       </div>
   <div class="col-sm">
<input  class="form-check-input" type="radio" value="" id="checklist11" checked />

</div>
     </div>


   </div>
   <div class="col-sm col-ele1">
   <div class="row">
       <div class="col-sm-9" style={{textAlign:"left"}}>
       <b>BLACK available to deposit</b>  <br/><br/>
   <b> Current Balance:{b2/1000000000}</b>

       </div>
   <div class="col">
       {
           b2!=0?((
               <div><input  class="form-check-input" type="radio" value="" id="checklist2" checked />

                   </div>
           )):
           ((
               <div>
                <input  class="form-check-input" type="radio" value="" id="checklist2" disabled />

                </div>

           ))
       }

</div>
     </div>
   
   </div>
   <div class="col-sm col-ele1">
   <div class="row">
   <div class="col-sm-9" style={{textAlign:"left"}}>

   <b>BNB available in wallet</b>  <br/>
    BNB is required to pay transaction fees on the Binance Smart Chain network.<br/>
<b>BNB Balance: {b1/1000000000}  </b>
 </div>
   <div class="col">
   {
           b1!=0?((
               <div><input  class="form-check-input" type="radio" value="" id="checklist3" checked />

                   </div>
           )):
           ((
               <div>
                <input  class="form-check-input" type="radio" value="" id="checklist3" disabled />

                </div>

           ))
       }
</div>
     </div>
  </div>   
   <div class="col-sm col-ele1">
   <div class="row">
       <div class="col-sm-9" style={{textAlign:"left"}}>
       <b>Eligible to stake</b>  <br/>
    You cannot stake if you have an active BLACK unstake/withdrawal request    </div>
 
    <div class="col">
    {
           b2!=0&&b1!=0 ?((
               <div><input  class="form-check-input" type="radio" value="" id="checklist4" checked />

                   </div>
           )):
           ((
               <div>
                <input  class="form-check-input" type="radio" value="" id="checklist4" disabled />

                </div>

           ))
       }
</div>
       </div>
  
     </div>
   </div>
</div><br/>
</div>
        )):
        ((
<div>
<div class="container">
          <div class="row justify-content-center">
            <div class="col-sm col-ele1">
              <div class="row">
                <div class="col-sm-9" style={{textAlign:"left"}}>
                <b style={{textAlign:"left"}}>Connected with MetaMask</b> <br/>
             If not connected, click the "Connect Wallet" button in the top right corner
             
                </div>
            <div class="col-sm">
        <input  class="form-check-input" type="radio" value="" id="checklist11" disabled />
        
        </div>
              </div>
        
        
            </div>
            <div class="col-sm col-ele1">
            <div class="row">
                <div class="col-sm-9" style={{textAlign:"left"}}>
                <b>BLACK available to deposit</b>  <br/><br/>
            <b> Current Balance:{b2/1000000000}</b>
        
                </div>
            <div class="col">
        <input  class="form-check-input" type="radio" value="" id="checklist2"  disabled/>
        
        </div>
              </div>
            
            </div>
            <div class="col-sm col-ele1">
            <div class="row">
            <div class="col-sm-9" style={{textAlign:"left"}}>
        
            <b>BNB available in wallet</b>  <br/>
             BNB is required to pay transaction fees on the Binance Smart Chain network.<br/>
       <b>BNB Balance: {b1/1000000000}  </b>
          </div>
            <div class="col">
        <input  class="form-check-input" type="radio" id="checklist3" disabled />
        
        </div>
              </div>
           </div>   
            <div class="col-sm col-ele1">
            <div class="row">
                <div class="col-sm-9" style={{textAlign:"left"}}>
                <b>Eligible to stake</b>  <br/>
             You cannot stake if you have an active BLACK unstake/withdrawal request    </div>
          
             <div class="col">
        <input  class="form-check-input "  type="radio"  id="checklist4" disabled />
        
        </div>
                </div>
           
              </div>
            </div>
        </div><br/>
       


    </div>
        ))

        }
       
        
        </div>
        </div>
    );
}

export default Sc1;