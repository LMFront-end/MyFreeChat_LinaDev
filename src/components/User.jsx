import React, { useEffect, useState } from 'react'
import Img from '../../assets/avatar3.png';
import { onSnapshot, doc } from "firebase/firestore";
import { db } from '../../data/configFirebase';

const User = ({ user1, user, selectUser, chat }) => {

    const user2 = user?.uid;
    const [data, setData] = useState("");



  return (
    <div>User</div>
  )
}

export {User}