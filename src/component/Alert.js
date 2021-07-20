import React from 'react';
import '../App.scss';
import { connect, Provider } from 'react-redux';
import AddFriend from './AddFriend';
import FriendItem from './FriendItem';
import { showAlert } from '../redux/GlobalActions';
function Alert(props) {
    const mounted = React.useRef();
    React.useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
        }
        setTimeout(() => {
            props.dispatch(showAlert(false))
        },2000)
    });

    return (
        <div className="alert">
            <h4>Friend added successfully</h4>
        </div>
    );
}

const mapStateToProps = (data) => ({
    showAlert: data.globalData.showAlert
})
export default connect(mapStateToProps)(Alert)
