import Image from "next/image";
import {faCcVisa, faCcMastercard, faCcDiscover, faCcAmazonPay, faCcPaypal} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUserData } from "../redux-config/actions";

const checkout = () => {
const { userData } = useSelector((state) => state);
const dispatch = useDispatch();

const [card, setCard] = useState(true);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [cardName, setCardName] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [expiryMonth, setExpiryMonth] = useState("");
const [expiryYear, setExpiryYear] = useState("");
const [cvv, setCvv] = useState("");

if(typeof(Storage) !== "undefined"){
  var price_tag: number = JSON.parse(localStorage.getItem('price_tag'));
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(card){
    if(username !== "" && email !== "" && address !== "" && city !== "" && state !== "" && cardName !== "" && cardNumber !== "" && expiryMonth !== "" && expiryYear !== "" && cvv !== ""){
      var data = [{
        username: username,
        email: email,
        address: address,
        city: city,
        state: state,
        cardName: cardName,
        cardNumber: cardNumber,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
        cvv: cvv
      }];
      dispatch(changeUserData(data));
      handleReset();
      alert("Your order has been placed successfully!");
    }
    else{
      alert("Please fill in all the fields!");
    }
  }
  else{
    alert("Your order has been placed!");
  }
}

const handleReset = () => {
  setUsername("");
  setEmail("");
  setAddress("");
  setCity("");
  setState("");
  setCardName("");
  setCardNumber("");
  setExpiryMonth("");
  setExpiryYear("");
  setCvv("");
}

console.log(userData);
  return (
    <div className="my-8">
      <h1 className="text-3xl lg:text-5xl text-center font-semibold">Checkout</h1>
      <div className=" bg-gray-200 text-center py-4 lg:py-8 my-4 lg:mx-96">
      <h1 className="font-semibold text-lg lg:text-2xl lg:pb-4">Product Details</h1>
      <div className="flex gap-12 xl:gap-48 justify-center">
        <h1 className="xl:text-xl xl:font-medium">{price_tag ? price_tag.make : null} {price_tag ? price_tag.model : null}</h1>
        <h1 className="xl:text-xl xl:font-medium">Rs.{price_tag ? price_tag.price : null}</h1>
        </div>
      </div>
      <div className=" bg-gray-200 text-center py-8 my-4 mx-8 lg:mx-96">
      <h1 className="font-semibold text-lg lg:text-2xl lg:pb-4">Payment Mode</h1>
      <div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center">
        <div>
      <input type="radio" name="mode" id="" onClick={() => setCard(true)} />
      <label htmlFor="" className="text-sm lg:text-base"> Prepaid (Credit Card)</label>
      </div>
      <div>
      <input type="radio" name="mode" id="" onClick={() => setCard(false)} />
      <label htmlFor="" className="text-sm lg:text-base"> Cash On Delivery (COD)</label>
      </div>
      </div>
      </div>
      <div>
        <form action="">
          <div className="mx-8 lg:mx-96 bg-gray-200 mt-4 p-8">
            <h1 className="text-2xl font-semibold text-center">Personal Details</h1>
            <label htmlFor="fname" className="text-base lg:text-lg">Full Name</label><br />
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="fname" name="firstname" placeholder="John M. Doe" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
            <label htmlFor="email" className="text-base lg:text-lg">Email</label><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" placeholder="john@example.com" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
            <label htmlFor="adr" className="text-base lg:text-lg">Address</label><br />
            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="adr" name="address" placeholder="542 W. 15th Street" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
            <label htmlFor="city" className="text-base lg:text-lg">City</label><br />
            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="city" name="city" placeholder="Delhi" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
            <label htmlFor="state" className="text-base lg:text-lg">State</label><br />
            <input value={state} onChange={(e) => setState(e.target.value)} type="text" id="state" name="state" placeholder="Register" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
          </div>
          {card ? <div className="mx-8 lg:mx-96 bg-gray-200 mt-4 p-8">
            <h1 className="text-2xl font-semibold text-center">Payment Details</h1>
            <div className="flex flex-col xl:flex-row xl:gap-4 my-4 bg-white p-2 rounded-3xl items-center justify-center">
            <h1 className="text-lg lg:text-xl font-semibold text-center">Accepted Cards:</h1>
            <FontAwesomeIcon icon={faCcVisa} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCcMastercard} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCcDiscover} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCcAmazonPay} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCcPaypal} size="2x"></FontAwesomeIcon>
            </div>
            <label htmlFor="cname" className="text-base lg:text-lg">Name on Card</label><br />
            <input value={cardName} onChange={(e) => setCardName(e.target.value)} type="text" id="cname" name="cardname" placeholder="John More Doe" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
            <label htmlFor="ccnum" className="text-base lg:text-lg">Credit card number</label><br />
            <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
            <label htmlFor="expmonth" className="text-base lg:text-lg">Exp Month</label><br />
            <input value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} type="text" id="expmonth" name="expmonth" placeholder="September" className="p-2 w-full mb-2 text-sm lg:text-base" />
            <div className="row">
              <div className="col-50">
                <label htmlFor="expyear" className="text-base lg:text-lg">Exp Year</label><br />
                <input value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} type="text" id="expyear" name="expyear" placeholder="2018" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
              </div>
              <div className="col-50">
                <label htmlFor="cvv" className="text-base lg:text-lg">CVV</label><br />
                <input value={cvv} onChange={(e) => setCvv(e.target.value)} type="text" id="cvv" name="cvv" placeholder="352" className="p-2 w-full mb-2 text-sm lg:text-base" /><br />
              </div>
            </div> 
          </div>: null}
          <div className="flex justify-center mt-4">
          <button type="submit" onClick={handleSubmit} className="bg-black text-base lg:text-lg font-semibold text-white py-2 px-6 rounded-full">Order</button>
          </div>
        </form>
      </div>
      </div>
  )
}

export default checkout;
