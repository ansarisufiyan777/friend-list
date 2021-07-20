import './App.scss';
import { connect, Provider } from 'react-redux';
import Home from './screens/Home';
function App() {
  return (
    <Home></Home>
  );
}

const mapStateToProps = (data) => ({ 
  user: data.globalData.user
})
export default connect(mapStateToProps)(App)
