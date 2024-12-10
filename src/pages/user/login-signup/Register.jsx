import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Register = ({ setIsLoggedIn }) => { 
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!email || !fullName || !password || !confirmPassword) {
            setError('Semua field harus diisi!');
            return;
        }

        if (password !== confirmPassword) {
            setError('Kata sandi dan konfirmasi kata sandi tidak cocok!');
            return;
        }

        console.log('Registering:', { email, fullName, password, confirmPassword });

        setIsLoggedIn(true); 
        setError('');
        navigate('/beranda');
    };

    return (
        <div className="login" id="register">
            <div className="parent-log">
                <img className="child-log" alt="" src="assets/img/logsign.png" />
                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                <form onSubmit={handleRegister}>
                    <div className="input-log">
                        <div className="uname-log">
                            <FontAwesomeIcon icon={faUser} /> Email
                        </div>
                        <div className="wrapper-log">
                            <input
                                type="email"
                                placeholder="Masukkan email"
                                className="input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">
                            <FontAwesomeIcon icon={faUser} /> Nama lengkap
                        </div>
                        <div className="wrapper-log">
                            <input
                                type="text"
                                placeholder="Masukkan nama lengkap"
                                className="input-field"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
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
                                placeholder="Masukkan kata sandi"
                                className="input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">
                            <FontAwesomeIcon icon={faLock} /> Konfirmasi kata sandi
                        </div>
                        <div className="wrapper-log">
                            <input
                                type="password"
                                placeholder="Masukkan kata sandi"
                                className="input-field"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="button-log">
                        <button type="submit" className="button">
                            Daftar
                        </button>
                    </div>
                </form>

                <div className="account-check-log">
                    <div className="tidakPunyaAkun">Punya akun?</div>
                    <Link to="/login" className="link-log">
                        Masuk
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
