import React, { useEffect, useState } from 'react'
import NavBar from './MyComponents/NavBar'
import { useLocation } from 'react-router-dom'

export default function AddToCart() {
    const [itemsCount, setItemsCount] = useState(0)
    const location = useLocation()
    var data
    var images = []

    function loadCart() {
        try {
            data = localStorage.getItem("data")
            data = data.split('|')
            data.pop()
            for(let i=0; i<data.length; i++){
                data[i] = data[i].split(",")
            }
            data.forEach(element => {
                images.push(element[1])
            });
            // console.log(images)
            // console.log(data.length)
            if (data.length != 0) {
                setItemsCount(data.length)
            }
        }
        catch (e) {
            null
        }
    }

    useEffect(()=>{
        loadCart()
    }, [location])

    function emptyCart(){
        localStorage.removeItem("data")
        setItemsCount(0)
    }
    return (
        <div>
            <NavBar />
            <button id="emptyCart" onClick={emptyCart}>Empty the Cart</button>
            <h1>Items in cart {itemsCount}</h1>
            {images.map((element) => (
                <h2>{element}</h2>
            ))}
        </div>
    )
}
