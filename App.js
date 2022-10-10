// import { StatusBar } from 'expo-status-bar';
import { Switch, Text } from 'react-native';
import React  from 'react';
// import { ReactDOM } from 'react';
import Toast from 'react-native-toast-message';
import Login from './screens/auth_screen.js/Login';
// import { createRoot } from 'react-dom/client';
import SignUp from './screens/auth_screen.js/SignUp'
export default function App() {

  // const root = createRoot(document.getElementById("root"));
  // root.render(<App />);
  
  return (
    <>
     {/* <View style={styles.container}> */}
       <Text>Open on your app!</Text> 
     
    <BrowserRouter>
    <Switch>
      <Route exact path='Login' component={Login} />
    </Switch>
    </BrowserRouter>
    <Login />
    <Toast refs={(refs)=> Toast.setRef(refs)} />
    {/* </View>  */}
    </>
    
  );
  
};



