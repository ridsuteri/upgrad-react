import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import useMyHook from './useMyHook';

const Child = () => {
    let n = useMyHook(9);
    const {username} = useParams();
    useEffect(() => {
        return () => {
            console.log('unmounting happened')
        }
    });
    return (
        <div>
            {/* Value recevied from hook with 9 as an input : {n}  */}
            Value recevied from params are : {username}
        </div>
    
    )
}

export default Child