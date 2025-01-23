// import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Menu from '../../components/menu/Menu';
import { auth } from '../../config/firebase.config';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Login = () => {
	const { user, loading } = useContext(AuthContext);
	//esto sirve para redirigirte al home luego de hacer login
	const navigate = useNavigate();

	//esto es para que si entras con el usuario se te devuelva al home
	if (loading) return <h2>Loading...</h2>;
	if (user) return <Navigate to='/' replace />;

	return (
		<>
			<Menu />
			<h1>Login</h1>
			<form onSubmit={event => loginUser(event, navigate)}>
				<div>
					<label htmlFor=''>Email</label>
					<input type='text' name='email' id='email' />
				</div>
				<div>
					<label htmlFor=''>Pass</label>
					<input type='text' name='pass' id='pass' />
				</div>
				<input type='submit' value='Login User' />
			</form>
		</>
	);
};

const loginUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const pass = event.target.pass.value;
	try {
		await signInWithEmailAndPassword(auth, email, pass);
		console.log('user logged');
		event.target.reset();
		navigate('/');
	} catch (err) {
		console.error('ERROR login user: ', err.code, err.message);
	}
};

export default Login;
