import React from 'react'
import Card1 from '../../components/dashboard/Home/card1';
import Card2 from '../../components/dashboard/Home/card2';
import SectionTab from '../../components/dashboard/Home/Section2/index';
import Section3 from '../../components/dashboard/Home/Section3/index';



const Home = () => { 
    return (
       <> <div className='d-flex justify-content-around'>
       <Card1 />
       <Card2  />
   </div>
   <SectionTab />
   <Section3 />
       </>
    );
}



export default Home;