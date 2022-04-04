import React, { useState, useEffect } from 'react';
import { Camera } from '../components/svg/Camera'

import Img from '../../assets/user.png';

const Profile = () => {

    const [img, setImg] = useState("");
    console.log(img);

    return (
    <section>
        <div className="profile_container">
            <div className="img_container">
                <img src={Img} alt="avatar" />
                <div className="overlay">
                    <label htmlFor="photo">
                        <Camera />
                    </label>
                    <input 
                    type="file" accept="image/*" 
                    style={{display: "none"}} 
                    id='photo' 
                    onChange={(e) => setImg(e.target.files[0])}
                    />
                </div>
            </div>
            <div className="text_container">
                <h3>Name</h3>
                <p>User email</p>
                <hr />
                <small>Joined on: ---</small>
            </div>
        </div>

    </section>
    )
}

export {Profile}