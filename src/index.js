// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import store from "./redux/store";
  

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter> 
//         <App /> 
//     </BrowserRouter>
//   </Provider>
//   ,
//   document.getElementById('root')
// );




import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducers';
import thunk from 'redux-thunk';
import { initializeApp } from "firebase/app";

// 1
// redux firestore -> db add 
import { reduxFirestore, getFirestore, createFirestoreInstance }
  from 'redux-firestore';
// redux firebase -> auth  
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
// Ye extension hame yaad rakni hai 
import { composeWithDevTools } from 'redux-devtools-extension'
 

  
const firebaseConfig = {
  apiKey: "AIzaSyBzgsU8IphYoCzofgYS5SG1gJwt8JZCOKE",
  authDomain: "resumebuilder-72d47.firebaseapp.com",
  projectId: "resumebuilder-72d47",
  storageBucket: "resumebuilder-72d47.appspot.com",
  messagingSenderId: "1095196416860",
  appId: "1:1095196416860:web:9aa8ad64418e418a783f99",
  measurementId: "G-XV7Q18ZBRW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// 2. to integrate firebase with redux store
const reduxStore = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase) // redux bindings for firestore,
  )
);
// 3. 
ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      {/* to integrate firabase with your redux app  */}
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        // redux storage change 
        dispatch={reduxStore.dispatch}
        // firestore
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);