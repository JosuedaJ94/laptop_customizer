import React from 'react';
import Feature from '../Feature/Feature.js'

export default function Customize(props) {

    const features = Object.keys(props.features).map((feature, idx) => {
        return <Feature feature={feature} features={props.features} updateFeature={props.updateFeature} 
        selected={props.selected}/>
    });

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    );
};