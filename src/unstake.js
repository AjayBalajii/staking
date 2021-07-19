import React, { useEffect, useState } from 'react';
import './App.css';
import Staking from './Staking';
import web3 from './web3';


function Unstake(){
const [uacc, setuacc]=useState("");
const [lock ,setlock]=useState("");
const[t1,setTim1 ] = useState("");
 const[t2,setTim2] = useState("");
 const[t3,setTim3 ] = useState("");
var[ltime,setltime] = useState("");
const[t4,setTime4] = useState("");
useEffect(async()=>{
setuacc(await web3.eth.getAccounts());
if(uacc!=0){
    setlock(await Staking.methods.holderUnstakeRemainingTime(uacc[0]).call());
    var countDownDate = new Date().getTime() + (lock * 1000) ;

    var x = setInterval(function() {
       var now = new Date().getTime();
      var distance = countDownDate - now ;
        
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
            console.log('CountDown Finished');
        }
    
      
    }, 1000);
    
    

}
})
    return(
        <div>
            {

            }
            <h4>After staking ,you need to wait {t4} days  {t1} hours  {t2} minutes  {t3} seconds to unstake your Black token and reward.</h4>
            
        </div>
    );
}
export default Unstake;