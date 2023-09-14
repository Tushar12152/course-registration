import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";

const Cards = () => {
    const [cards,setCards]=useState([])

    useEffect(()=>{
        const loadData= async()=>{
               const res=await fetch('/public/data.json')
               const data=await res.json()
               setCards(data)
        }
        loadData()
    },[])

    // console.log(cards)
    return (
       <div>
           <h1 className="font-bold text-3xl text-center text-[#1C1B1B] p-12">Course Registration</h1>
         <div className="w-[90%] mx-auto flex justify-between gap-2">
           
         
             {/* <Card></Card> */}
            <div className="grid gap-6 grid-cols-3 w-6/8">
            {
                cards.map(card=><Card key={card.id} card={card}></Card>)
             }
            </div>
            <div className="border-2 w-2/8">
             <h1  className="font-bold text-4xl text-center">cart-section</h1>
            </div>
        </div>
       </div>
    );
};

export default Cards;