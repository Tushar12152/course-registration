import PropTypes from 'prop-types'
import { BsCurrencyDollar,BsBook } from 'react-icons/bs'
const Card = ({card}) => {
    const {img,course_name,details,price,credit}=card
    console.log(card)

    return (
        <div>
             <div className='w-[300px] bg-white rounded-lg'>
                 <img className='mx-auto p-2' src={img} alt="" />
                 <h1 className='font-semibold text-[#1C1B1B] text-center text-lg'>{course_name}</h1>
                 <p className='p-2 text-center leading-6 text-gray-600'>{details}</p>
                 <div className='flex justify-between w-[95%]'>
                     <div className='flex items-center gap-2 p-4'>
                     <BsCurrencyDollar></BsCurrencyDollar>
                     <h2 className='text-gray-600'> Price:{price}</h2>
                     </div>
                     <div className='flex items-center gap-2 p-4'>
                        <BsBook></BsBook>
                     <h2 className='text-gray-600 '>Credit:{credit}</h2>
                     </div>
                 </div>
                <div className='pb-4'>
                <button className='w-5/6 ml-4 p-2 rounded-lg text-white bg-[#2F80ED]'>Select</button>
                </div>

             </div>
        </div>
    );
};

Card.propTypes={
    card:PropTypes.object.isRequired,
}
export default Card;
