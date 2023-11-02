import React from 'react'
import NavBar from './MyComponents/NavBar'
import ShoppingCard from './MyComponents/ShoppingCard'
import data from './constants/addToCart.json'
import './App.css'

export default function AddToCart() {

    let total = 0
    let items = 0

    let finalData = []
    data.forEach(element => {
        if (element.count != 0) {
            finalData.push(element)
        }
    })
    finalData.forEach(element => {
        total += parseFloat(element.price.slice(0, element.price.length-1)) * element.count
        items += element.count
    });

    function removeAllData() {
        window.location.reload();
    }

    return (
        <>
            <NavBar />
            <h2 id='headingShopping'>Shopping Cart</h2>
            <h3 id='noOfItems'>No of items in cart : {items}</h3>
            <button onClick={removeAllData} id="removeAll">Remove All</button>
            {finalData.map((element, id) => (
                <ShoppingCard key={id} image={`./assets/${element.id}`} proname={element.desc} proprice={element.price} qty={element.count} />
            ))}
            <hr className='divider'/>
            <h2 id="totalBill">Total Payable Amount : {total}$</h2>
            <hr className='divider'/>
        </>
    )
}