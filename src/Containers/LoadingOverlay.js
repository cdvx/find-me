
import React from 'react';
import {ReactComponent as Loading} from '../Assets/loading.svg'


export default ({children, loading})=>{
    return (
        <div style={{ height: '85vh', width: '100%' }}>
            {loading? <Loading />: children}
        </div>
    )

}