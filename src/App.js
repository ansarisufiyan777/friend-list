import './App.scss';
import React from 'react';
import { connect, Provider } from 'react-redux';
import Home from './screens/Home';
import Alert from './component/Alert';
function App(props) {
  
  return (
    <React.Fragment>
      <Home></Home>
      {props.showAlert && <Alert></Alert>}
    </React.Fragment>
  );
}

const mapStateToProps = (data) => ({
  showAlert: data.globalData.showAlert
})
export default connect(mapStateToProps)(App)
