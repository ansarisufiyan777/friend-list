import '../App.scss';
import { connect, Provider } from 'react-redux';
import AddFriend from './AddFriend';
import FriendItem from './FriendItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faSortAlphaUp, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { applySortOnFav, applySortOnName } from '../redux/GlobalActions';
function Sorting(props) {
    return (
            <div className="sorting">
                <FontAwesomeIcon style={{visibility:"hidden"}} onClick={() => props.dispatch(applySortOnName())} 
                icon={props.nameSort ? faSortAlphaDown: faSortAlphaUp}/>
                <FontAwesomeIcon onClick={() => props.dispatch(applySortOnFav())} 

                icon={props.favSort ? faSortDown: faSortUp}/>
            </div>


    );
}

const mapStateToProps = (data) => ({
    nameSort: data.globalData.nameSort,
    favSort: data.globalData.favSort

})
export default connect(mapStateToProps)(Sorting)
