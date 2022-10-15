import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../auth/authSlice';
import jwtDecode from 'jwt-decode';

const useAuth = () => {

    const token = useSelector(selectCurrentToken);
    let isSuperAdmin = false;
    let isAdmin = false;
    let status = 'user';

    if (token) {
        const decoded = jwtDecode(token);
        const { email, roles } = decoded.UserInfo;

        isSuperAdmin = roles.includes('superadmin');
        isAdmin = roles.includes('admin');

        if (isSuperAdmin) status = 'superadmin';
        if (isAdmin) status = 'admin';

        return { email, roles, isSuperAdmin, isAdmin, status }
    }

    return { email: '', roles: [], isSuperAdmin, isAdmin, status }
}

export default useAuth;