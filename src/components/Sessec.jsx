import React, { useEffect } from 'react';
import './sessec.css';

function Sessec(props){

    const setIsMeValue = useEffect(() => {
        props.setIsMe(false)
    },[])

    return(
        <div>
            <div className="img_box">
                <img src="/assets/sessec.png"/>
            </div>
        </div>
    )
}

export default Sessec