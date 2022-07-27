import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from '../component/Payment';

const promise = loadStripe(
  "pk_test_51JcZErFpQdKr0M8BiAMFmFRgpPRrjlFm1D909RFV39ekxrZ7Zs3nugZxtqXWZtvDDknTkRjpdfC150igekmqelaa003igr0RJR"
);
export default function Home() {
  return (
  
     

    <div className='asd'>
      <Elements stripe={promise}>
                <Payment/>
              </Elements>
          Welcome to <a href="https://nextjs.org">Next.js!</a>


    </div>
   
      
  
  )
}
