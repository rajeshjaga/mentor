import React from 'react';
import Card from '../Components/Card';
import image from '../temp-pic.jpg'
import data from "../data.json";


const Page = () => {
    const webData = data
    console.log(webData.forEach(data => console.log(data)))
    return (
        <div className="page container">
            <Card src={image}
                alt="react"
                title="hello"
                github="#"
                netlify="#"
            />
            <Card src={image}
                alt="react"
                title="hello"
                github="#"
                netlify="#"
            />
            <Card src={image}
                alt="react"
                title="hello"
                github="#"
                netlify="#"
            />
            <Card src={image}
                alt="react"
                title="hello"
                github="#"
                netlify="#"
            />
            <Card src={image}
                alt="react"
                title="hello"
                github="#"
                netlify="#"
            />
            <Card src={image}
                alt="react"
                title="hello"
                github="#"
                netlify="#"
            />
            <Card src={image}
                alt="react"
                title="hello"
                github="#"
                netlify="#"
            />
        </div>
    )
}

export default Page
