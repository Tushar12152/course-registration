import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Cards = () => {
    const [cards,setCards]=useState([])
    const [cart,setCart]=useState([])
    const [credit,setCredit]=useState(0)
    const [remaining,setRemaining]=useState(20)
    const [total,setTotal]=useState(0)

// console.log(cart)
    useEffect(()=>{
        const loadData= async()=>{
               const res=await fetch('/data.json')
               const data=await res.json()
               setCards(data)
        }
        loadData()
    },[])
    
    const handleSelect=(card)=>{
       const isTrue=cart.find(item=>item.id===card.id)
    //    isTrue?alert('selected'):setCart([...cart,card])
      let credit=card.credit
      let total=card.price;
      const fixedCredit=20;
       if(isTrue){
         return toast.warn( 'This course is already selected',{})
       }
       else{
          cart.forEach(item=>{
            credit+=item.credit
             total +=item.price

          }) 
          if(fixedCredit<0){
            return 
          }
          else{
            if(credit<=fixedCredit){
              setCredit(credit)
            }
            else{
              return toast.warn('Total credit Hour limit is 20')
            }
        setTotal(total)
          }
        
        setCart([...cart,card])
       }
    

    //    credit>fixedCredit?alert('20 up'):setCredit(credit)
    // if(credit>fixedCredit){
    //     return  toast.warn('Total credit limit is 20')
    // }
    // else{
    //     setCredit(credit)
    //     setTotal(total)
    // }

    const remaining=fixedCredit-credit;
    remaining<0? toast.warn('Remaining hour will not negative'):setRemaining(remaining)
    
    
    
    }

    // console.log(total)
  
    return (
       <div>
           <h1 className="font-bold text-3xl text-center text-[#1C1B1B] p-12">Course Registration</h1>
         <div className="w-[90%]  mx-auto flex-col lg:flex-row flex justify-between gap-6">
           
         
             {/* <Card></Card> */}
            <div className="grid gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-6/8">
            {
                cards.map(card=><Card key={card.id} handleSelect={handleSelect} card={card}></Card>)
             }
            </div>
            <div className=" lg:w-3/12">
            <div className=" bg-white rounded-lg">
             <h1  className="font-semibold text-center mx-auto py-4 text-[#2F80ED] border-b-2 border-gray-400 w-[80%] text-normal">Credit Hour Remaining  {remaining} hr</h1>
             <h1  className="font-semibold  mx-auto py-4 text-black border-b-2 border-gray-400 w-[80%] text-normal">Course Name</h1>
                
                   
               

                 {
                      cart.map((name,idx)=><li className="  list-decimal mx-auto w-[80%]" key={idx}>{name.course_name}</li>)
                 }
                 <ToastContainer></ToastContainer>
             <h1  className="font-normal  mx-auto py-4 text-black border-b-2 border-gray-400 w-[80%] text-normal">Total Credit Hour : {credit}</h1>
             <h1 className="font-normal  mx-auto py-4 text-black  w-[80%] text-normal">Total Price : {total} USD</h1>
            </div>
            </div>
        </div>
       </div>
    );
};

export default Cards;