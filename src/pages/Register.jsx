import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../data/configFirebase';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        error: null,
        loading: false,
    });

    const history = useNavigate();

    const {name, email, password, error, loading} = data;

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async (e) => {

        e.preventDefault();
        console.log(data);

        setData({
            ...data,
            error: null,
            loading: true
        })
        if(!name || !email || !password) {
            setData({
                ...data,
                error: 'fields must not be empty'
            })
        }
        try{
            const result = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
            );

            await setDoc(doc(db, 'users', result.user.uid), {
                uid: result.user.uid,
                name,
                email,
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true,
            });


            setData({
                name: '',
                email: '',
                password: '',
                error: null,
                loading: false
            })

            history("/home")
        }catch(err){
            setData({
                ...data,
                error: err.message,
                loading: false
            })
        }
    }

  return (
    <section>
        <h3>Create An Account</h3>

        <form className="form" onSubmit={handleOnSubmit}>

            <div className="input_container">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={handleChange}/>
            </div>

            <div className="input_container">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={handleChange}/>
            </div>

            <div className="input_container">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={handleChange}/>
            </div>
            {error ? <p className="error">{error}</p> : null}
            <div className="btn_container" disabled={loading}>
                <button className="btn_register">
                    {loading ? 'Creating ...' : 'Register'}
                    </button>
            </div>
        </form>
    </section>
  )
}

export {Register}