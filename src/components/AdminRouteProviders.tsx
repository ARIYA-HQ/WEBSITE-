import { AuthProvider } from '../context/AuthContext';
import { CmsProvider } from '../context/CmsContext';
import AdminLayout from './layout/AdminLayout';

export default function AdminRouteProviders() {
    return (
        <AuthProvider>
            <CmsProvider>
                <AdminLayout />
            </CmsProvider>
        </AuthProvider>
    );
}
