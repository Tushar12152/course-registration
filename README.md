  * 3 features of project

• Data 'fatch' from  'data.json' file (fake data)
• Maximum of 20 credit hours.
• A card cannot be clicked more than once.


*How useState() is used in the project is discussed

•const [cards,setCards]=useState([])

=> After fetch data.json file ,Set the state value to an array using setcards and sent the card value as props to the <Card/> component.

• const [cart,setCart]=useState([])
=> The value of cart from the handle select function is set as an array. Later, the course names are shown in a loopthrough on the cart.

•const [credit,setCredit]=useState(0)
=> The value of credit from the handle select function is set as an number. which initail value is 0.Later, set as the value of total credit

•const [remaining,setRemaining]=useState(20)
=> The value of remaining from the handle select function is set as an number. which initail value is 20. Later, set as the value of Credit Hour Remaining.

•const [total,setTotal]=useState(0)
=> The value of total from the handle select function is set as an number. which initail value is 0. Later, set as the value of Total Price.