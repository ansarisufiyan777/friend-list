import React from 'react';
import '../App.scss';
import { connect, Provider } from 'react-redux';
import AddFriend from './AddFriend';
import FriendItem from './FriendItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { addFriend, searchFriend } from '../redux/GlobalActions';
function Search(props) {
    const [name, setName] = React.useState(props.search)
    const [isVisible, setVisible] = React.useState(false)
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && name != props.search) {
            props.dispatch(searchFriend(name))
        }
    }
    return (
        <div className="search">

            {isVisible ? <div className="input-container">
                <input value={name}
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={e => setName(e.target.value)}
                className="input-text" placeholder="Search friends" type="text" />
                <FontAwesomeIcon onClick={() => setVisible(!isVisible)} icon={faTimes}></FontAwesomeIcon>
            </div>
                :
                <div className="button" onClick={() => setVisible(!isVisible)}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            }
        </div>
    );
}

const mapStateToProps = (data) => ({
    data: data.globalData.data,
    search: data.globalData.searchText
})
export default connect(mapStateToProps)(Search)
