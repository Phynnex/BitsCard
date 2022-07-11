import React from 'react';
import CryptoTab from '../../components/dashboard/Crypto';
import TransactionTable from '../../components/dashboard/Home/Section3/TransactionTable';

const BuyCrypto = () => {
    return (
    <div className='d-flex'>
        <CryptoTab/>
        <TransactionTable />
    </div>
    );
}


export default BuyCrypto;