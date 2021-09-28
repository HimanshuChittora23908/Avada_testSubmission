import Image from "next/image";
import {faCcVisa, faCcMastercard, faCcDiscover, faCcAmazonPay, faCcPaypal} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const checkout = () => {
const [card, setCard] = useState(true);

  if(typeof(Storage) !== "undefined"){
    var price_tag: number = JSON.parse(localStorage.getItem('price_tag'));
    console.log(price_tag.img.src);
 }

  return (
    <div className="my-8">
      <h1 className="text-5xl text-center font-semibold">Checkout</h1>
      <div className=" bg-gray-200 text-center py-8 my-4 mx-96">
      <h1 className="font-semibold text-2xl pb-4">Product Details</h1>
      <div className="flex gap-48 justify-center">
        <h1 className="text-xl font-medium">{price_tag ? price_tag.make : null} {price_tag ? price_tag.model : null}</h1>
        <h1 className="text-xl font-medium">Rs.{price_tag ? price_tag.price : null}</h1>
        </div>
      </div>
      <div className=" bg-gray-200 text-center py-8 my-4 mx-96">
      <h1 className="font-semibold text-2xl pb-4">Payment Mode</h1>
      <div className="flex gap-12 justify-center items-center">
        <div>
      <input type="radio" name="mode" id="" onClick={() => setCard(true)} />
      <label htmlFor="">Prepaid (Credit Card)</label>
      </div>
      <div>
      <input type="radio" name="mode" id="" onClick={() => setCard(false)} />
      <label htmlFor="">Cash On Delivery (COD)</label>
      </div>
      </div>
      </div>
      <div>
        <form action="">
          <div className="mx-96 bg-gray-200 mt-4 p-8">
            <h1 className="text-2xl font-semibold text-center">Personal Details</h1>
            <label htmlFor="fname" className="text-lg">Full Name</label><br />
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" className="p-2 w-full mb-2" /><br />
            <label htmlFor="email" className="text-lg">Email</label><br />
            <input type="text" id="email" name="email" placeholder="john@example.com" className="p-2 w-full mb-2" /><br />
            <label htmlFor="adr" className="text-lg">Address</label><br />
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" className="p-2 w-full mb-2" /><br />
            <label htmlFor="city" className="text-lg">City</label><br />
            <input type="text" id="city" name="city" placeholder="Delhi" className="p-2 w-full mb-2" /><br />
            <label htmlFor="state" className="text-lg">State</label><br />
            <input type="text" id="state" name="state" placeholder="Register" className="p-2 w-full mb-2" /><br />
          </div>
          {card ? <div className="mx-96 bg-gray-200 mt-4 p-8">
            <h1 className="text-2xl font-semibold text-center">Payment Details</h1>
            <div className="flex gap-8 my-4 bg-white p-2 rounded-3xl items-center justify-center">
            <h1 className="text-xl font-semibold text-center">Accepted Cards:</h1>
            <FontAwesomeIcon icon={faCcVisa} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCcMastercard} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCcDiscover} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCcAmazonPay} size="2x"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCcPaypal} size="2x"></FontAwesomeIcon>
            </div>
            <label htmlFor="cname" className="text-lg">Name on Card</label><br />
            <input type="text" id="cname" name="cardname" placeholder="John More Doe" className="p-2 w-full mb-2" /><br />
            <label htmlFor="ccnum" className="text-lg">Credit card number</label><br />
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" className="p-2 w-full mb-2" /><br />
            <label htmlFor="expmonth" className="text-lg">Exp Month</label><br />
            <input type="text" id="expmonth" name="expmonth" placeholder="September" className="p-2 w-full mb-2" />
            <div className="row">
              <div className="col-50">
                <label htmlFor="expyear" className="text-lg">Exp Year</label><br />
                <input type="text" id="expyear" name="expyear" placeholder="2018" className="p-2 w-full mb-2" /><br />
              </div>
              <div className="col-50">
                <label htmlFor="cvv" className="text-lg">CVV</label><br />
                <input type="text" id="cvv" name="cvv" placeholder="352" className="p-2 w-full mb-2" /><br />
              </div>
            </div> 
          </div>: null}
        </form>
      </div>
      </div>
  )
}

export default checkout;
