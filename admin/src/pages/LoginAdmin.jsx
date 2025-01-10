import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginAdmin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
 
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/admin/login', {
                email: formData.email,
                password: formData.password
            });
            
            if (response.status === 200) {
                toast.success('Connexion admin réussie !', {
                    position: "top-right",
                    autoClose: 2000
                });

                localStorage.setItem('admin_token', response.data.token);
                localStorage.setItem('admin_role', 'admin');

                setTimeout(() => {
                    navigate('/list');
                }, 1500);
            }
        } catch (error) {
            toast.error('Échec de la connexion admin. Veuillez réessayer.', {
                position: "top-right",
                autoClose: 3000
            });
            console.error('Error during admin login:', error.response?.data || error.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Connexion Administrateur
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="admin@gsb.fr"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Mot de passe</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Mot de passe"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Se connecter
                        </button>
                    </div>
                </form>
                
                <div className="text-center">
                    <button 
                        onClick={() => window.location.href = 'http://localhost:5173/login'} 
                        className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                        Retour à la connexion client
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
