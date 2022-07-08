import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
// import SellGiftCard from './SellGiftCard';
import {Outlet} from 'react-router-dom';


const index = () => {
    
    return (
        <div className='d-flex w-100'>
            <Sidebar/> 
         
            <Outlet />
        </div>
    )
}



export default index;