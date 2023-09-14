import PropTypes from 'prop-types'
const Card = ({card}) => {
    const {img,course_name,details}=card
    console.log(card)

    return (
        <div>
             <div className='w-[300px]'>
                 <img src={img} alt="" />
                 <h1>{course_name}</h1>
                 <p>{details}</p>
             </div>
        </div>
    );
};

Card.propTypes={
    card:PropTypes.object.isRequired,
}
export default Card;
