import React from 'react';
import GiftCardTable from './GiftCardTable';
import TransactionTable from './TransactionTable';

const index = () => {
    return (
        <div className='d-flex justify-content-between'>
            <TransactionTable />
            <GiftCardTable />
        </div>
    );
}


export default index;