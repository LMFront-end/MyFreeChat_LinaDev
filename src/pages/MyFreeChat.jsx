import React from 'react'
import { Footer } from '../components/Footer'

const MyFreeChat = () => {
  
  return (
    <div className="hero">
        <div className="card bg-dark text-white image_home">
            <img className="welcome"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">

            <div className="container">

                <h5 className="card-title display-3 fw-bolder mb-0">MY FREECHAT LINADEV</h5>

                <p className="card-text lead fs-2">
                    I'M TRYING TO HAVE A CONVERSATION!
                </p>
            </div>
        </div>
    </div>
    <Footer />
    </div>
    );
}

export {MyFreeChat}