import Header1 from './components/layout/header1';
import Header2 from './components/layout/header2';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api_service';
import { useEffect, useContext } from 'react';
import { AuthContext } from './components/context/auth_context';
import { Spin, message } from 'antd'; // Import Ant Design message for notifications

const App = () => {
  const { user, setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    
    if(res.data){
      setUser(res.data)
    }
    setIsAppLoading(false);
  };

  let header = <Header2 />;
  let footer;
  if((user.id == "")) {
    footer = <Footer />;
    header = <Header1 />;
  }

  return (
    <>
      {isAppLoading ? (
        <Spin />
      ) : (
        <>
          {header}
          <Outlet />
          {footer}
        </>
      )}
    </>
  );
};

export default App;