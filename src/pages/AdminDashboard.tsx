import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BarChart3, Package, Users, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AdminDashboardProps {
  onNavigate: (page: any) => void;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useLanguage();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="w-64 bg-gray-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'products'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Package className="w-5 h-5" />
              Products
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'users'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Users className="w-5 h-5" />
              Users
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                activeTab === 'settings'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Settings className="w-5 h-5" />
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-red-400 hover:bg-red-900 hover:bg-opacity-30"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </nav>
        </div>

        <div className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600 text-sm mb-2">Total Revenue</p>
                  <p className="text-4xl font-bold text-amber-600">₹0</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600 text-sm mb-2">Total Orders</p>
                  <p className="text-4xl font-bold text-blue-600">0</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600 text-sm mb-2">Total Users</p>
                  <p className="text-4xl font-bold text-green-600">0</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600 text-sm mb-2">Active Products</p>
                  <p className="text-4xl font-bold text-purple-600">0</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                <p className="text-gray-600">No recent activity yet.</p>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Manage Products</h2>
                <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                  Add Product
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Product Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Price</th>
                      <th className="text-left py-3 px-4 font-semibold">Stock</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="text-center py-8 text-gray-600">
                        No products yet. Add your first product!
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Manage Users</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Email</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Joined</th>
                      <th className="text-left py-3 px-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="text-center py-8 text-gray-600">
                        No users yet.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Store Information</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Store Name</label>
                      <input
                        type="text"
                        defaultValue="SaloniOil"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="info@salonimail.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Settings</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600">
                        <option>₹ Indian Rupee</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Timezone</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600">
                        <option>Asia/Kolkata</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                    >
                      Save Settings
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
