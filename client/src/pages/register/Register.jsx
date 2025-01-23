// import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Menu from '../../components/menu/Menu';
import { auth } from '../../config/firebase.config';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Register = () => {
	const { user, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	if (loading) return <h2>Loading...</h2>;
	if (user) return <Navigate to='/' replace />;
	return (
		<>
			<Menu />
			<h1>Register</h1>
			<form onSubmit={event => registerUser(event, navigate)}>
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

const registerUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const pass = event.target.pass.value;
	try {
		await createUserWithEmailAndPassword(auth, email, pass);
		console.log('user registered');
		event.target.reset();
		navigate('/');
	} catch (err) {
		console.error('ERROR registering user: ', err.code, err.message);
	}
};

export default Register;
