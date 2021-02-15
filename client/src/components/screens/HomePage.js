import React from 'react'
import {useSelector} from 'react-redux'
import Nav from '../Nav/Nav'

const HomePage = () => {

    const result = useSelector(state => state.mood.result);
    return (
        <>
            <Nav />
            <h1>{result}</h1>
        </>
    )


}




export default HomePage;

