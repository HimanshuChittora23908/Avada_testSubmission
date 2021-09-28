import {data} from "./index";
import { GetStaticPaths } from 'next'
import { GetStaticProps } from 'next'
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = data.map(items => ({
      params: { id: items.id.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  }

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id as string;
  const item = data.find(items => items.id === parseInt(id));
  return {
    props: {
      item
    }
  }
}

const Details = ({item}) => {
  const setLocal = () => {
    window.localStorage.setItem('price_tag', JSON.stringify(item));
    window.location.href = '/checkout';
}
    return (
        <div className="bg-black py-8 px-2 sm:px-8 lg:px-24">
            <div className="bg-bg-one pt-1 grid-flow-row rounded-3xl lg:grid lg:grid-cols-4 lg:grid-flow-col">
                <div className="bg-bg-two m-3 p-3 lg:pt-8 lg:p-8 lg:m-8 rounded-3xl col-span-3">
                  <div className="rounded-t-4xl overflow-hidden"><Image src={item.img} alt="car"></Image></div>
                    <h1 className="text-3xl lg:text-4xl text-center pt-2 lg:pt-6 font-mono font-bold">{item.make} {item.model}</h1>
                    <h2 className="text-lg lg:text-xl text-center pt-1 lg:pt-2 pb-2 lg:pb-6 font-mono font-bold text-gray-500">{item.year} | {item.type}</h2>
                    <h3 className="text-justify text-sm lg:text-base">{item.description}</h3>
                  <div className="flex justify-center"><button className="bg-white font-bold py-2 px-8 mt-6 mb-6 lg:mb-0 rounded-full" onClick={setLocal}>Buy Now</button></div>
                </div>
                <div className="rounded-r-3xl mx-8 lg:mx-0 lg:col-span-1 text-center">
                  <h3 className="font-semibold text-xl pt-4 lg:pt-16 lg:pr-16 pb-2 text-white">Buy Now @ Rs. {item.price}</h3>
                  <div className="flex justify-center lg:pr-16"><button className="bg-white font-bold py-2 px-8 mt-2 mb-12 rounded-full" onClick={setLocal}>Buy Now</button></div>
                  <h3 className="font-semibold text-2xl lg:pt-8 lg:pr-16 pb-2 text-white">Customer Feedback:</h3>
                  <h3 className="text-white italic pb-8 lg:pb-0 lg:pr-16 text-justify">" {item.review} "</h3>
                </div>
            </div>
            
        </div>
    );
} 

export default Details;