import React from 'react'
import NavBar from './MyComponents/NavBar'
import ShoppingCard from './MyComponents/ShoppingCard'
import './App.css'

export default function AddToCart() {
    let data = []
    let finalData = []
    try{
        data = localStorage.getItem("data")
        data = data.split("|")
        data.pop()
        data.forEach(element => {
            element = element.split("^")
            finalData.push(element)
        });
    }
    catch(e){
        console.log(e)
    }

    function removeAllData(){
        localStorage.removeItem("data")
    }

    return(
        <>
            <NavBar/>
            <h2 id='headingShopping'>Shopping Cart</h2>
            <h3 id='noOfItems'>No of items in cart : {data.length}</h3>
            <button onClick={removeAllData} id="removeAll">Remove All</button>
            {finalData.map((element, id) => (
                <ShoppingCard key={id} image={element[1]} proname={element[0]} proprice={element[2]}/>
            ))}
        </>
    )
}