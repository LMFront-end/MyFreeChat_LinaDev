import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../../data/configFirebase.js'
import { signOut } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { AuthContext } from '../context/auth'
import { useNavigate } from 'react-router-dom';

const Nabvar = () => {

    const { user } = useContext(AuthContext);

    const handleSignOut = async () => {
        await updateDoc(doc(db, 'users', auth.currentUser.uid),{
            isOnline: false,
        })
        await signOut(auth);
    }

    const history = useNavigate();

  return (
    <div>

      {/* Component bootstrap */}

        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3 shadow-sm">

            <div className="container">
            <Link className="navbar-brand fw-bold fs-4" to="/">
                MyFreeDevChat
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/"}></Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/products"}></Link>
                    </li>

                </ul>

                    <div className="buttons">

                        {user ?
                        (
                        <>

                        <Link to={"/home"} className="btn btn-outline-light">
                        <i className="fa-solid fa-house"></i>
                        </Link>

                        <Link to={"/contacts"} className="btn btn-outline-light ms-5">
                        <i className="fa-solid fa-users"></i>
                        </Link>

                        <Link to={"/messenger"} className="btn btn-outline-light ms-5">
                        <i className="fa-solid fa-comments"></i>
                        </Link>


                        <Link to={"/profile"} className="btn btn-outline-light ms-5">
                        <i className="fa-solid fa-user"></i>
                        </Link>

                        <button onClick={handleSignOut} className="btn btn-outline-light ms-4">
                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                        </button>
                        </> 
                        )
                        : (
                        <>
                        <Link to={"/login"} className="btn btn-outline-light ">
                            <i className="fa fa-sign-in me-1"></i> Login
                        </Link>

                        <Link to={"/register"} className="btn btn-outline-light  ms-2">
                            <i className="fa fa-user-plus me-1"></i> Register
                        </Link>
                        
                        </>
                        )
                        }
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export {Nabvar}