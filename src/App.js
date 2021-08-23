import logo from './logo.svg';
import {Modal,Button ,InputGroup,FormControl,} from "react-bootstrap";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import Tabs from'./tab';
//import "bootstrap/dist/css/bootstrap.min.css";
import Staking1 from './Staking';
import './App.css';
import token from './token';
import vabi from "./vault.js";
import back from './back.png'
import Staking from './Staking';
//import Unstake from './unstake';
//import Stake from './stake';
import Sc1 from './sc1';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepIcon from '@material-ui/core/StepIcon';
import Sc2 from './sc2';
function MyVerticallyCenteredModal1(props) {
    
  var stake1=async()=>{
  document.getElementById("mymodal").style.visibility="hidden";

    let account = await web3.eth.getAccounts();

var am =document.getElementById("tid").value;
alert(am);
if(am!=0){
    await Staking1.methods.deposit(am).send({from:account[0]});

}

  }

    return (
   
      <Modal
        {...props}
        dialogClassName="custom-modal"
      bsClass="my-modal"
        aria-labelledby="contained-modal-title-vcenter"
        id="mymodal"
        centered
      >
        <Modal.Header className="myModal" style={{backgroundColor:"#191919",color:"white"}} >
           
          <Modal.Title id="contained-modal-title-vcenter" >
            Amount to Stake
          </Modal.Title><br/><br/>
         
        </Modal.Header>
        
        <Modal.Body style={{backgroundColor:"#191919", color:"white"}}  className="myModal">
          <InputGroup>
    <InputGroup.Prepend>
    
    </InputGroup.Prepend>
    <FormControl className="myInput"  id="tid" aria-label="Amount (to the nearest dollar)" /><br/>
    <InputGroup.Append>
    
 
    </InputGroup.Append>
  </InputGroup><br/>
  
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#191919"}}  className="myModal">
          <button class="btn-flat" onClick={stake1}>Stake</button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal2(props) {
    
    var wid1=async()=>{
        document.getElementById("mymodal").style.visibility="hidden";

      let account = await web3.eth.getAccounts();
  
  var wi =document.getElementById("tid1").value;
  alert(wi);
  if(wi!=0){
      await Staking1.methods.withdraw(wi).send({from:account[0]});
  
  }
  
    }
  
      return (
     
        <Modal
          {...props}
    
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          id="mymodal"
          centered
        >
          <Modal.Header className="myModal" style={{backgroundColor:"#191919",color:"white"}} >
             
            <Modal.Title id="contained-modal-title-vcenter" >
              Amount to Unstake
            </Modal.Title><br/><br/>
           
          </Modal.Header>
          
          <Modal.Body style={{backgroundColor:"#191919", color:"white"}}  className="myModal">
            <InputGroup>
      <InputGroup.Prepend>
      
      </InputGroup.Prepend>
      <FormControl className="myInput"  id="tid1" aria-label="Amount (to the nearest dollar)" /><br/>
      <InputGroup.Append>
      
   
      </InputGroup.Append>
    </InputGroup><br/>
    
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:"#191919"}}  className="myModal">
            <button className="btn-flat" onClick={wid1}>Unstake</button>
          </Modal.Footer>
        </Modal>
      );
    }
  
    
    function MyVerticallyCenteredModal3(props) {
    
      var wid1=async()=>{
          document.getElementById("mymodal").style.visibility="hidden";
  
        let account = await web3.eth.getAccounts();
    
    var wi =document.getElementById("tid1").value;
    //alert(wi);
    if(wi!=0){
        await Staking.methods.withdraw(wi).send({from:account[0]});
    window.location.reload();
    }
    
      }
    
        return (
       
          <Modal
            {...props}
      
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            id="mymodal"
            centered
          >
            <Modal.Header className="myModal" style={{backgroundColor:"#191919",color:"white"}} >
               
              <Modal.Title id="contained-modal-title-vcenter" >
                Amount to Unstake
              </Modal.Title><br/><br/>
             
            </Modal.Header>
            
            <Modal.Body style={{backgroundColor:"#191919", color:"white"}}  className="myModal">
              <InputGroup>
        <InputGroup.Prepend>
        
        </InputGroup.Prepend>
        <FormControl className="myInput"  id="tid1" aria-label="Amount (to the nearest dollar)" /><br/>
        <InputGroup.Append>
        
     
        </InputGroup.Append>
      </InputGroup><br/>
      
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:"#191919"}}  className="myModal">
              <button className="btn-flat" onClick={wid1}>Unstake</button>
            </Modal.Footer>
          </Modal>
        );
      }
        
 
 
 
 
 

function App() {

  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
const [userinfo,setuserinfo]=useState([]);
  const [reward,setReward]=useState("");
const [tbs,setTbs]=useState("");
 const[acc1,setacc1]=useState("");
 const [lock ,setlock]=useState("");
 var [time, settime]=useState("");
 const [lock1 ,setlock1]=useState("");
 const[t11,setTim11 ] = useState("");
 const[t21,setTim21] = useState("");
 const[t31,setTim31 ] = useState("");
const[t41,setTime41] = useState("");
const [modalShow3,setModalShow3] = React.useState(false);
var [hour1, sethour1]=useState("");
var [time1, settime1]=useState("");
const[activeStep,setActiveStep]=useState(0);
    const[bb ,setbb]=useState("");
var [date1, setdate1]=useState("");
const[done,setdone]=useState("");
var [checki,setchecki]=useState("");
const[b2,setb2 ] = useState("");
const[b1,setb1 ] = useState("");


 const [toggleState, setToggleState] = useState(1);

  //const [modalShow2, setModalShow2] = React.useState(false);


  const toggleTab = (index) => {
    setToggleState(index);
  };


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
//  alert(am);
if(am!=0){
    await Staking1.methods.deposit(am).send({from:account[0]});
setdone("Successfully done");
//var done1 =document.getElementById("done");
window.s=7;

}

  }

function st(activeStep){

switch(activeStep){
    case 0:{
      function ch(){
        
      
setchecki(true);

      }
        
        return(
            <div >
 <div>
 <div class="check" id="c1" class="container" style={{backgroundColor:"#0000 " ,padding:"20px", borderRadius:"20px"}}>
        <h5>Checkpoints</h5>
        
                  <p>
                  The following conditions must be met to proceed:
        </p>
        {acc1!=0?((
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

              {
                (acc1!=0&& checki!=true)?((
                  <div>
 <input  class="form-check-input"  type="checkbox" onClick={ch}  id="c4"/>&nbsp;
 
 I have read the <a href="https://blacktermsandconditions.vercel.app/">Terms and Conditions</a><br/><br/>
                  </div>
                )):
                <div>
                   <input  class="form-check-input"  type="checkbox" onClick={ch} disabled  id="c4"/>&nbsp;
 
 I have read the <a href="https://blacktermsandconditions.vercel.app/">Terms and Conditions</a><br/><br/>
                </div>
              }
               
 <button onClick={previousStep} class="btn-flat">Previous</button>   &nbsp; &nbsp; 

 {
(acc1!=0&& checki==true) ?((
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
      
        var balance = await token.methods.balanceOf(acc1[0]).call();
        balance=balance/1000000000;
        document.getElementById("max").value=balance;
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
                    <input type="text" id="max"   value={window.v} onChange={onc} class="txtf"/>
                    </div>
                    <div class="col-sm">
                    <button class="btn-flat" onClick={max}>Max</button>
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

         &nbsp; &nbsp; 

{
(acc1!=0&& window.v!=0) ?((
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
<h4>Click Next  to continue your staking </h4><br/><br/>
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
<button class="btn-flat" onClick={lo} id="done" >Done</button>

)):
((
<h5>please wait Transaction being processed
</h5>
))

}
</div>
      
      );
      
    }

}

}







  const wi11=async()=>{
    let account = await web3.eth.getAccounts();

    await Staking1.methods.emergencyWithdraw().send({from:account[0]});
  }



 const cr=async()=>{
  let account = await web3.eth.getAccounts();
if(reward>10000000000){
  await Staking1.methods.claimReward().send({from:account[0]});

}
else{
  alert("Insufficent Rewards.[Your rewards must be greater than 10]");
}
} 
const bal= async()=>{
document.body.style.backgroundColor="black";

if(acc1!=0){
  
  setbb(await token.methods.balanceOf(acc1[0]).call());
  setb1( await vabi.methods.getBurnVaultBNBBalance().call());
  setb2(await token.methods.balanceOf(acc1[0]).call());
setReward(await Staking1.methods.pendingBlack(acc1[0]).call());
setTbs(await token.methods.balanceOf("0xf1ff561190950Ed9020fe62DB83045dED760A606").call());
setuserinfo(await Staking1.methods.userInfo(acc1[0]).call());
// await Staking1.methods.userInfo(account[0]).call()
var us =await Staking.methods.holderUnstakeRemainingTime(acc1[0]).call();
var now = new Date().getTime();
if(us<=now){
setlock(true);
}
else{
  setlock(false);
}

var us=await Staking.methods.holderUnstakeRemainingTime(acc1[0]).call();
var ff=new Date(us*1000);
setdate1(ff.toDateString());
var hours = ff.getHours();
var minutes = ff.getMinutes();
var ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
settime1( hours + ':' + minutes + ' ' + ampm);
//settime(lock);
var countDowndate   =us*1000;
//console.log(countDowndate);
// var countDownDate = new Date().getTime() + (lock * 1000) ;
//alert(time);
var x = setInterval(function() {
   var now = new Date().getTime();
  var distance = countDowndate - now ;
 // console.log(now);
  // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 // document.getElementById("demo").innerHTML = hours + "h "
 // + minutes + "m " + seconds + "s ";
setTime41(days);
setTim11(hours);
setTim21(minutes);
setTim31(seconds);




  // If the count down is over, write some text 
  if (distance < 0) {
        clearInterval(x);
        setlock1(true);

       // console.log('CountDown Finished');
    }
    else{
     setlock1(false);
    }


  
}, 1000);

}
else{
  

}




}
const connect = async() => {
  window.ethereum.enable();
  setacc1(await web3.eth.getAccounts());
 // let account = await web3.eth.getAccounts();
 
//document.getElementById("cc").style.visibility="hidden";
//window.location.reload();

}
function backk(){
  window.location.href="https://dashboard-beryl-ten.vercel.app/";
}
useEffect(()=>{bal()})

  return (
    <div className="App">
      <br/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <div class="container-fluid">
<div class="row justify-content-between">
<div class="col-2">
 <img src ={back} alt="" height={40} onClick={backk} width={40}/>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src={logo} alt="" height={80} width={80}/>
</div>
<div class="col-4">
{acc1!=0 ?((
  <button id="cc" class="btn-flat  btn-bloc cc">{acc1}</button>

)):
((
  <button id="cc" class="btn-flat  btn-bloc cc"  onClick={connect}>connect wallet</button>

))

}
</div>
</div>



<div class="row">
    <div class="col-sm-9">
    <div className="container">
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
<div>
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



    </div>

            </div>
    
            <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
             <div>
            {acc1!=0&&lock1==true?((
              <div>
                <h4>By clicking Unstake button you can unstake your Black Token</h4><br/><br></br>
 <button class="btn-flat"  id="swap2" onClick={() => setModalShow2(true)} >
          Unstake
        </button>&nbsp;
  
        <MyVerticallyCenteredModal3
          show={modalShow3}
          onHide={() => setModalShow3(false)}
        />  
              </div>  
            )):
((
  <div>
    <h4>After staking ,you need to wait till this <span style={{color:"#5bc0de"}}>{date1} {time1} </span> for unstake your Black token and reward.</h4>
            <br/>
            <br/>
            <button class="btn-flat"  id="swap2" onClick={() => setModalShow2(true)} disabled>
          Unstake
        </button>&nbsp;
  
        
  </div>  
))
            }
            
        </div>
    
    
            </div>
    
            <div
              className={toggleState === 3 ? "content  active-content" : "content"}
            >
                        <br/><br/>
    {
      acc1!=0? ((
<div>
<h2 style={{color:"#ffff",textTransform:"uppercase"}}>Emergency Withdraw</h2>
              <br/>
              
             <button class="btn-flat" onClick={wi11} id="emerwid">Withdraw</button><br/><br/>
             <p style={{textAlign:"left",}}><b>Note:</b> When executing an emergency withdraw, you get back your funds immediately but with this function, you don't received any rewards.</p>
             
</div>
      )):
      ((
        <div>
            <h2 style={{color:"#ffff",textTransform:"uppercase"}}>Emergency Withdraw</h2>
              <br/>
              
             <button class="btn-flat" onClick={wi11} id="emerwid" disabled>Withdraw</button><br/><br/>
             <p style={{textAlign:"left",}}><b>Note:</b> When executing an emergency withdraw, you get back your funds immediately but with this function, you don't received any rewards.</p>
             
        </div>
      ))
    }
            
              <br/><br/>
              <br/><br/>
              <br/><br/>
              <br/><br/>
            </div>
          </div>
        </div>
    </div>
    <div class="col-sm-3">
    <div class=" col-ele"><h5 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>Staked</b></h5><hr style={{height:"0px", width:"90%",margin: "auto"}}/>{(userinfo[0]/1000000000)||0}</div><br/>
 
    <div class=" col-ele"><h5 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>Total BLACK Staked</b></h5><hr style={{height:"0px", width:"90%",margin: "auto"}}/>{tbs/1000000000}</div><br/>
    <div class=" col-ele"><h5 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>APY</b></h5><hr style={{height:"0px", width:"90%",margin: "auto"}}/>....</div><br/>
    <div class="container-fluid col-ele"><h5 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>Rewards</b></h5><hr  style={{width:"90%", height:"0px",margin: "auto"}}/>{(reward/1000000000).toFixed(9)}
    
    <br/><br/>
<div class="row" >
  <div class="col-sm-2">
  {
  acc1!=0?((
    <div>
    <button class="btn-flat btn-sm"  id="swap1" onClick={() => setModalShow1(true)}>
    Stake
  </button>

  <MyVerticallyCenteredModal1
    show={modalShow1}
    onHide={() => setModalShow1(false)}
  /> 

  </div>
  )):((
    <div>
    <button class="btn-flat btn-sm"  id="swap1" onClick={() => setModalShow1(true)} disabled>
    Stake
  </button>

  <MyVerticallyCenteredModal1
    show={modalShow1}
    onHide={() => setModalShow1(false)}
  /> 
  </div>
  ))
}
  </div>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="col-sm-3">
  {
  (acc1!=0&&lock==true)?((
    <div>
 <button class="btn-flat btn-sm"  id="swap2" onClick={() => setModalShow2(true)}>
          Unstake
        </button>
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />  
      </div>
  )):
  ((
    <div>
       <button class="btn-flat btn-sm"  id="swap2" onClick={() => setModalShow2(true)} disabled>
          Unstake
        </button>
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />  
      </div>
  ))
}
  </div>
  <div class="col-sm-6">
  {  
  acc1!=0?((
<div>
<button class="btn-flat btn-sm" id="swap3" onClick={cr}>Claim Rewards</button>

  </div>
  )):((
    <div>
    <button class="btn-flat btn-sm" id="swap3" onClick={cr} disabled>Claim Rewards</button>

  </div>
  ))
}
  </div>
</div>
   </div><br/>

    </div>
</div>

</div>
<br/><br/>

    </div>
  );
}

export default App;
