import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import 'firebase/auth';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
// import { useDB } from './Components/Hooks/useDB';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyA1xwUXNrpC4RfWM2rwY8LYNP9QeffGa7U",
  authDomain: "mrdonalds-5e613.firebaseapp.com",
  databaseURL: "https://mrdonalds-5e613.firebaseio.com",
  projectId: "mrdonalds-5e613",
  storageBucket: "mrdonalds-5e613.appspot.com",
  messagingSenderId: "524764578039",
  appId: "1:524764578039:web:71d5345294a14ed20093f2",
  measurementId: "G-E5WT2S9V21"
};

firebase.initializeApp(firebaseConfig);

function App() {
    const auth = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrders();
    // const firebaseDatabase = firebase.database();
    useTitle(openItem.openItem);
    const orderConfirm = useOrderConfirm();
    
    
  
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase : firebase.database, 
    }}>
      <GlobalStyle/>
      <NavBar />
      <Order />
      <Menu/>
      { openItem.openItem && <ModalItem />}
      { orderConfirm.openOrderConfirm && 
      <OrderConfirm />
      }
      
      

    </Context.Provider>
    
  );
}

export default App;
