import '../App.scss';
import { connect, Provider } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { toggleDelete, toggleToFavourite } from '../redux/GlobalActions';
function FriendItem(props) {
    const onDelete = () => {
        if (props.item.isDelete){
            props.dispatch(toggleDelete(props.item))
        }
        else if(window.confirm("Do u really want to delete your friend?")){
            props.dispatch(toggleDelete(props.item))
        }
    }
    return (
        <div className={`item ${props.item.isFav ? 'blue': 'orange'} `}>
            <div className={`data ${props.item.isDelete && 'deleted'}` }>
                <div className="title">{props.item.name}</div>
                <div className="subTitle">is your friend</div>
            </div>
            <div className="action-button">
                <FontAwesomeIcon onClick={() => props.dispatch(toggleToFavourite(props.item))}  icon={props.item.isFav ? faStar : farStar} />
                <FontAwesomeIcon onClick={() => onDelete()} icon={faTrash} />
            </div>
        </div>
    );
}

const mapStateToProps = (data) => ({
    data: data.globalData.data
})
export default connect(mapStateToProps)(FriendItem)
