import '../App.scss';
import { connect, Provider } from 'react-redux';
import { paginate } from '../redux/GlobalActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Pagination(props) {
    const pageCount = Math.ceil(props.data.length / props.pageSize)
    let pageList = []
    for (let i = 0; i < pageCount; i++) {
        pageList.push(i)
    }
    return (
        <div className="pagination">
            <div className="slider">
                <FontAwesomeIcon onClick={() => props.dispatch(paginate(Math.max(0, props.page - 1)))} className="number" icon={faAngleLeft} />
                {pageList.map((d, i) => <div key={i}
                    onClick={() => props.dispatch(paginate(i))}
                    className={`number ${i === props.page && 'selected'}`}>
                    {i + 1}
                </div>)}
                <FontAwesomeIcon onClick={() => props.dispatch(paginate(Math.min(pageCount-1, props.page + 1)))} className="number" icon={faAngleRight} />

            </div>
        </div>

    );
}


const mapStateToProps = (data) => ({
    data: data.globalData.data,
    page: data.globalData.page,
    pageSize: data.globalData.pageSize
})
export default connect(mapStateToProps)(Pagination)
