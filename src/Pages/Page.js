import React from 'react';
import Card from '../Components/Card';
import data from "../data.json";


const Page = () => {
    const webData = data
    return (
        <div className="page container">
            {
                webData.map(data => {
                    return <Card data={data} />
                })
            }
        </div>
    )
}

export default Page
