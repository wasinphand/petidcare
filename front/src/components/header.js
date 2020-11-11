import React from 'react';
import './style.css'
export function Header(){
    return(
        <div style={{
            backgroundColor:"#E5A04F",
            height:"75px",
            color : "white",
            fontSize : "25px", 
            justifyContent:"space-between",
            display:"flex"
          }}>
              <div style={{display:"flex",marginTop:"15px",marginLeft:"15px"}}>
              Mr.Parinphat
              </div>
              <div style={{
                  fontSize:"50px",
                  marginRight:"40px",
                  fontFamily:' "Comic Sans MS", cursive, sans-serif',
                  color : "#FFFCDD"
              }}>
                  Petidcare
              </div>
                <div style={{marginTop:"8px",marginRight:"10px"}}>
                    <img src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/15781712_1605934312769069_9144177322222858747_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHpwurRIDcAG_81HAaU9BMRi8mvwVCmvLmLya_BUKa8uX0XpOhzmJhuXST8dJY0ch4jCzppE6mVEjDcpqWfoA4_&_nc_ohc=wEgXOWAUoBYAX-treIa&_nc_ht=scontent.fbkk22-1.fna&oh=8332125ad8665f601cfcbd85676589b3&oe=5FD2B4A9" width="60px" height="60px"/>
                </div>
          </div>
    )
 
}