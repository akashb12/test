import React, { useEffect, useState } from 'react'
import Axios from 'axios';

function LandingPage(props) {
return(
<div style={{
    display : "flex",
    justifyContent:"center",
    textAlign:"center",

}}>welcome back {props.user.userData && props.user.userData.name}</div>
)

}

export default LandingPage
