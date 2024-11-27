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
    const res = await getAccountAPI();
    console.log("check res:",res.data);
    if(res.data){
      setUser(res.data)
    }
    setIsAppLoading(false);
  };
  return (
    <>
      {isAppLoading ? (
        <Spin />
      ) : (
        <>
          <Header />
          <Outlet />
    
        </>
      )}
    </>
  );
};

export default App;