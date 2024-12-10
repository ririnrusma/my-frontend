import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Login = ({ setIsLoggedIn }) => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        console.log('Logging in with:', email, password);
        
        setIsLoggedIn(true);
        navigate('/beranda');
    };

    return (
        <div className="login" id="login">
            <div className="parent-log">
                <img className="child-log" alt="" src="assets/img/logsign.png" />
                <form onSubmit={handleLogin}>
                    <div className="input-log">
                        <div className="uname-log">
                            <FontAwesomeIcon icon={faUser } />Email
                        </div>
                        <div className="wrapper-log">
                            <input 
                                type="text" 
                                value={email} 
                                onChange={(e) => setUsername(e.target.value)} 
                                placeholder="Masukkan email" 
                                className="input-field" 
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">
                            <FontAwesomeIcon icon={faLock} /> Kata sandi
                        </div>
                        <div className="wrapper-log">
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Masukkan kata sandi" 
                                className="input-field" 
                            />
                        </div>
                    </div>

                    <button type="submit" className="button-log">
                        <div className="button">Masuk</div>
                    </button>
                </form>

                <div className="account-check-log">
                    <div className="separator-log" />
                    <div className="or-log">atau</div>
                    <div className="separator-log" />
                </div>

                <div className="social-button-log">
                    <div className="flatColorIconsgoogleParent">
                        <FontAwesomeIcon icon={faGoogle} className="flatColorIconsgoogle" />
                        <div className="masukDenganGoogle">Masuk dengan Google</div>
                    </div>
                </div>

                <div className="account-check-log">
                    <div className="tidakPunyaAkun">Tidak punya akun?</div>
                    <Link to="/register" className="link-log">Buat akun</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;