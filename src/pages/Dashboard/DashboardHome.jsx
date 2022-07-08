import React from 'react'
import Cards from '../../components/dashboard/Home/cards';



const Home = () => { 
    return (
        <div className='d-flex justify-content-between'>
            <Cards  />
            <Cards  />
        </div>
    );
}



export default Home;