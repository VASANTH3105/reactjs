import React from "react";
import GrowingPlant from "../growingPlant/GrowingPlant";

function Home() {

    const plantDetails = {
        name: 'SunFlower',
        icon: '(*)',
        size:50,
    }

    const plantDetails2 = {
        name: 'rose',
        icon: '(**)',
        size:50,
    }

    return (
        <div className="heading">
            <h2>Hi this is my React page!...</h2>
            <GrowingPlant plantDetails ={plantDetails}/>
            <GrowingPlant plantDetails = {plantDetails2}/>
            <GrowingPlant/>
            

        </div>
    )
}

export default Home
