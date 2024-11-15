import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api_service';
import { useEffect, useContext } from 'react';
import { AuthContext } from './components/context/auth_context';
import { Spin, message } from 'antd'; // Import Ant Design message for notifications

const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const res = await getAccountAPI();
      console.log("API Response:", res); // Log the API response
      if (res && res.data && res.data.user) {
        setUser(res.data.user);
        console.log("User state updated:", res.data.user); // Check if user state updates
      } else {
        console.error("Invalid user data:", res);
      }
    } catch (error) {
      message.error('Failed to load user information');
      console.error("Error fetching user info:", error); // Log the error for debugging
    } finally {
      setIsAppLoading(false);
    }
  };
  return (
    <>
      {isAppLoading ? (
        <Spin />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;