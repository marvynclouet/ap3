import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Login = () => {

    const currentState = 'Login';
    const [address, setaddress] = useState('');
    const [password, setPassword] = useState('');
    const { navigate } = useContext(ShopContext)
 
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/clients/login', { 
                address,
                password 
            });
            
            if (response.status === 200) {
                // Afficher le message de succès
                toast.success('Connexion réussie !', {
                    position: "top-right",
                    autoClose: 2000
                });

                // Correction de l'accès aux headers
                const token = response.headers['authorization']?.replace('Bearer ', '');
                // ou utiliser response.headers.get('authorization') si disponible
                localStorage.setItem('token', token);

                // Attendre un peu pour que l'utilisateur voie le message
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }
        } catch (error) {
            toast.error('Échec de la connexion. Veuillez réessayer.', {
                position: "top-right",
                autoClose: 3000
            });
            console.error('Error during login:', error.response?.data || error.message);
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className=' border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Login' ? null : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required />}
            <input
                className='w-full px-3 py-2 border border-gray-800'
                type="address"
                placeholder='address'
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                required
            />
            <input
                className='w-full px-3 py-2 border border-gray-800'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                {/* Ajoutez ici des éléments supplémentaires si nécessaire */}
            </div>
            <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>
                {currentState === 'Login' ? 'Sign in' : 'Sign up'}
            </button>
        </form>
    )
}

export default Login

