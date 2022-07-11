import React, { useState } from "react";

import Sidebar from '../../components/dashboard/Sidebar';
// import SellGiftCard from './SellGiftCard';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Bell from '../../assets/image/home/notification_icon.svg'
import ModalContent from "../../components/Modal/index";
import { FormsModal } from "../../components/Modal/style";


const Index = () => {
    const [show, setShow] = useState(false);

    const handleShowDetails = (doc) => {
        // setDetails(doc);
        setShow(!show);
    };

    const closeShowModal = () => {
        setShow(!show);
    };
    return (
        <div className='d-flex'>
            <Sidebar />

            <div className='w-100 container'>
                <AppBar position="static" style={{ background: "#21242d",height:'40px'}}
                >
                    {show && (
                        <FormsModal onClick={closeShowModal} show={show}>
                            <ModalContent />
                        </FormsModal>
                    )}
                    <button
                        color="inherit"
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",


                        }}
                        onClick={handleShowDetails}
                    >
                        <img src={Bell} alt="notification" style={{
                            
                        }} />
                    </button>

                </AppBar>
                <Outlet />

            </div>
        </div>
    )
}



export default Index;