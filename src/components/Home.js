import React from 'react';
import './Home.css';

const Home=()=>{
    return(
        <div>
            <div className='cart'>
                <span>0</span>
                <img src='https://www.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg' alt='' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnXKy0PQBTxW08XeO4YomqLCGvUCOy8nwyOPAGoix9Qvuh4EvHpA52DTh1SVAxcPA90Ll8I-eoxidKwUhlqs95GYJ0Q5hZ0fDmKv4SISNtrzvKx1OcEeIvvQ' />
                </div>
                <div className='text-wrapper item'>
                    <div>I-Phone</div> 
                    <div>Price:$1000.00</div>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;