import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
	const { user, loading } = useContext(AuthContext);
	if (loading) return <h1>Loading...</h1>;
	if (!user) return <Navigate to='/' />;

	//outlet son como los children pero para react router
	return <Outlet />;
};

export default ProtectedRoute;
