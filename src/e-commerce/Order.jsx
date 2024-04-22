import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Styles from './app.module.css';

const Order = () => {
  const { id } = useParams();
  const [state, setState] = useState(null);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const[data,setData]=useState(
    {
      userName:'',
      email:'',
      phoneNumber:'',
      deliveryAddress:'',
    }

  )

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/' + id)
      .then((res) => {
        setState(res.data);
        console.log(res);
      })
      .catch((err) => console.log("Error Fetching products", err));
  }, [id]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

 const navigate=useNavigate();
 const handleSubmit = (e) => {
  e.preventDefault();


  if (data.userName && data.email && data.phoneNumber && data.deliveryAddress) {
    console.log("Submitting form", data); 
    navigate('/profile', { state: { userData: data } });
  } else {
    
    console.log("Please fill in all the required fields");
  }
};


const handleChange = (e) => {
  const { name, value } = e.target;
  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  return (
    <div>
      {state ? (
        <center>
          <form>
            <div className={Styles.order}>
              <h2>Order Details</h2>
              <img className={Styles.img} src={state.image} alt="/" />
              <p>{state.title}</p>
              <p>{state.price}</p>
              <button className={Styles.btn} type="button" onClick={handleIncrease}>
                +
              </button>
              <button type="button">{count}</button>
              <button className={Styles.btn} type="button" onClick={handleDecrease}>
                -
              </button>
              <p><span className={Styles.totalPrice}>Total Price:</span> {state.price * count}</p>
              <button type="button" className={Styles.btn1}onClick={handleClick}>
                Proceed
              </button>
              {click ?(
                <div className={Styles.detailsDiv}>
                <form className={Styles.detailsForm} >
                <h3>Fill in your Details</h3>
                <p className={Styles.ordUser}>UserName:</p>
                  <input
                    type="text"
                    name="userName"
                    value={data.userName}
                    onChange={handleChange}
                    required
                  />
                  <p className={Styles.ordEmail}>Email:</p>
                  <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                  <p className={Styles.ordPhn}>Phone Number:</p>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <p className={Styles.ordAdd}>Delivery Address:</p>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={data.deliveryAddress}
                    onChange={handleChange}
                    required
                  /><br/><br/><br/>
                <button className={Styles.butn}type="submit" onClick={handleSubmit}>Proceed to Profile</button>
              </form>
              </div>
              ):''}
            </div>
          </form>
        </center>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default Order;
