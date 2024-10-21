import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import LoginHeader from '../../login/LoginHeader';
import LoginInput from '../../login/LoginInput';
import LoginButton from '../../login/LoginButton';
import IconEmail from '../../icons/IconEmail';
import IconLock from '../../icons/IconLock';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            login(data.token);
            navigate('/admin');
        } else {
            alert(data.message);
        }
    };

    return (
        <section className='h-screen flex justify-center items-center'>
            <div className='absolute inset-0 z-0 bg-dark w-1/2'></div>
            <div className='w-1/2 shadow-2xl border border-gray-300 bg-white py-5 rounded-lg relative'>
                <LoginHeader />
                <form onSubmit={handleSubmit} className='py-5 px-10'>
                    <LoginInput 
                        type='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='Escribe tu email...'
                    >
                        <IconEmail/>
                    </LoginInput>
                    <LoginInput 
                        type='password'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='Escribe tu password...'
                    >
                        <IconLock/>
                    </LoginInput>
                    <LoginButton type='submit'>Iniciar Sesión</LoginButton>
                </form>
            </div>
        </section>
    );
};
export default LoginForm;
