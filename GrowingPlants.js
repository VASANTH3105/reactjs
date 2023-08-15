import React from "react";
import './GrowingPlant.scss';

function GrowingPlant(props) {

    //destructure
    

    const defaultData = {
        name: 'nonameoo',
        icon: 'nonameooicon',
        size: 40,
    }

    const { plantDetails = defaultData } = props

    //console.log('props', props)

    //const name = "Vasanth"

    //const result = "yes"

    /*const plant2 = {
        color: 'red'
    }
    const plantData = {
        name: 'rose',
        icon: 'rode',
        size: 30,

    }
    */

    return (
        <div className="plant">
            <h3>I am a {plantDetails.name}</h3>
            <div>
                I'm Growing
                <span style={{ fontSize: `${plantDetails.size}px` }}>
                    {plantDetails.icon}
                </span>
            </div>
        </div>

    )
}


export default GrowingPlant
