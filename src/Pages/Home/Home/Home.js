import React from 'react';
import Company from '../../Shared/Company/Company';
import Slider from '../../Shared/slider/Slider';
import Advertise from '../Advertise/Advertise';
import CategoryHome from '../CategoryHome/CategoryHome';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           {/* <Advertise></Advertise> */}
           <CategoryHome></CategoryHome>
           <Company></Company>
        </div>
    );
};

export default Home;