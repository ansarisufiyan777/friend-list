import '../App.scss';
import { connect, Provider } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { toggleDelete, toggleToFavourite } from '../redux/GlobalActions';
function FriendItem(props) {
    return (
        <div className={`item ${props.item.isFav ? 'blue': 'orange'} `}>
            <div className={`data ${props.item.isDelete && 'deleted'}` }>
                <div className="title">{props.item.name}</div>
                <div className="subTitle">is your friend</div>
            </div>
            <div className="action-button">
                <FontAwesomeIcon onClick={() => props.dispatch(toggleToFavourite(props.item))}  icon={props.item.isFav ? faStar : farStar} />
                <FontAwesomeIcon onClick={() => props.dispatch(toggleDelete(props.item))} icon={faTrash} />
            </div>
        </div>
    );
}

const mapStateToProps = (data) => ({
    data: data.globalData.data
})
export default connect(mapStateToProps)(FriendItem)
