import '../App.scss';
import { connect, Provider } from 'react-redux';
import AddFriend from './AddFriend';
import FriendItem from './FriendItem';
function Header() {
    return (
            <div className="nav">

                <h4>Friends List</h4>
            </div>


    );
}

const mapStateToProps = (data) => ({
    user: data.globalData.user
})
export default connect(mapStateToProps)(Header)
