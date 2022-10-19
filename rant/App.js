// import { StatusBar } from 'expo-status-bar';
import { Switch, Text } from 'react-native';
import React  from 'react';

import { ReactDOM } from 'react';
import Toast from 'react-native-toast-message';
import Login from './screens/auth_screen.js/Login.js';
// import { createRoot } from 'react-dom/client';
import SignUp from './screens/auth_screen.js/SignUp'
import HomeScreen from './screens/homescreen/HomeScreen'
import CartScreen from './screens/cart_screen/CartScreen.js';
import { NavigationContainer } from 'react-navigation';
import Route from './navigation/mainNavigation'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
export default function App() {

  // const root = createRoot(document.getElementById("root"));
  // root.render(<App />);
  
  return (
    <>
    <NavigationContainer>
      <Route />
    </NavigationContainer>
     {/* <View style={styles.container}> */}
       {/* <Text>Open on your app!</Text>  */}
       
        {/* <Router>
          <Routes> */}
          {<SignUp />}
          {/* <Route path ="/Login" component={<Login />}></Route>
          <Route path ="/sign-up" component={<SignUp />}></Route>
          <Route path ="/home" component={<HomeScreen />}></Route>  */}

        {/* { <Toast refs={(refs)=> Toast.setRef(refs)} />} */}

          {/* </Routes>
        </Router> */}
       


        
      
  
  
        
      
    
    {/* <BrowserRouter>
    <Switch>
      <Route exact path='Login' component={Login} />
    </Switch>
    </BrowserRouter>
    <Login /> */}
   
    {/* </View>  */}
    </>
    
  );
  
};



