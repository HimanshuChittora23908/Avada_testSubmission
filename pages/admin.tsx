import { useSelector } from "react-redux"
import styles from '../styles/Home.module.css'

const admin = () => {
    const { userData } = useSelector((state) => state);
    const data_user = userData
    console.log(data_user)
    return (
        <div className={styles.card}>
            <h1 className="text-3xl lg:text-5xl text-center py-8 text-white font-bold">Orders</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-8">
            {data_user ? data_user.map((item, index) => {
                return (
                    <div key={index} className="bg-bg-two p-4 rounded-3xl text-lg">
                        <h1>Name: {item.username}</h1>
                        <h1>Email: {item.email}</h1>
                        <h1>Phone: {item.phone}</h1>
                        <h1>Address: {item.address}</h1>
                        <h1>City: {item.city}</h1>
                        <h1>Name on Card: {item.cardName}</h1>
                        <h1>Card Number: {item.cardNumber}</h1>
                        <h1>Expiry (MM/YYYY): {item.expiryMonth}/{item.expiryYear}</h1>
                        <h1>CVV: {item.cvv}</h1>
                    </div>
                )
            }) : <div>Loading...</div>}
        </div>
        </div>
    )
}

export default admin;
