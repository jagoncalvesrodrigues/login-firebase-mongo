import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';

const Menu = () => {
	const { user, loading } = useContext(AuthContext);
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>HOME</Link>
				</li>
				{!user && !loading && (
					<>
						<li>
							<Link to='/login'>LOGIN</Link>
						</li>
						<li>
							<Link to='/register'>REGISTER</Link>
						</li>
					</>
				)}
				{user && (
					<>
						<li>
							<Link to='/profile'>PROFILE</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Menu;
