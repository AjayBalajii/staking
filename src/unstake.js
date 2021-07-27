import React, { useEffect, useState } from 'react';
import './App.css';
import Staking from './Staking';
import web3 from './web3';
import {Modal,Button ,InputGroup,FormControl,} from "react-bootstrap";



function MyVerticallyCenteredModal2(props) {
    
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
          <Modal.Header className="myModal" style={{backgroundColor:"#191919",color:"white"}} closeButton>
             
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
      
 

function Unstake(){
const [uacc, setuacc]=useState("");
const [lock ,setlock]=useState("");
const[t1,setTim1 ] = useState("");
 const[t2,setTim2] = useState("");
 const[t3,setTim3 ] = useState("");
const[t4,setTime4] = useState("");
const [modalShow2, setModalShow2] = React.useState(false);
var [hour, sethour]=useState("");
var [time, settime]=useState("");

var [date, setdate]=useState("");

useEffect(async()=>{
setuacc(await web3.eth.getAccounts());
if(uacc!=0){
    var us=await Staking.methods.holderUnstakeRemainingTime(uacc[0]).call();
    var ff=new Date(us*1000);
setdate(ff.toDateString());
var hours = ff.getHours();
  var minutes = ff.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  settime( hours + ':' + minutes + ' ' + ampm);
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
    setTime4(days);
    setTim1(hours);
    setTim2(minutes);
    setTim3(seconds);
    
    
    
    
      // If the count down is over, write some text 
      if (distance < 0) {
            clearInterval(x);
            setlock(true);

           // console.log('CountDown Finished');
        }
        else{
         setlock(false);
        }

    
      
    }, 1000);
    
    var now1=(new Date().getTime());
   // var unstaketime=new Date(now1);
    //alert(unstaketime.toDateString());
 

}


})
    return(
        <div>
            {uacc!=0&&lock==true?((
              <div>
                <h4>By clicking Unstake button you can unstake your Black Token</h4><br/><br></br>
 <button class="btn-flat"  id="swap2" onClick={() => setModalShow2(true)} >
          Unstake
        </button>&nbsp;
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />  
              </div>  
            )):
((
  <div>
    <h4>After staking ,you need to wait till this <span style={{color:"#5bc0de"}}>{date} {time} </span> for unstake your Black token and reward.</h4>
            <br/>
            <br/>
            <button class="btn-flat"  id="swap2" onClick={() => setModalShow2(true)} disabled>
          Unstake
        </button>&nbsp;
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />  
  </div>  
))
            }
            
        </div>
    );
}
export default Unstake;