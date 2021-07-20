import '../App.scss';
import { connect, Provider } from 'react-redux';
import Header from '../component/Header';
import AddFriend from '../component/AddFriend';
import FriendItem from '../component/FriendItem';
import Pagination from '../component/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from '../component/Search';
import Sorting from '../component/Sorting';
const boolMap = {
    true: 1,
    false: 0
}
const applyFilter = (data, search, page, pageSize,  nameSort, favSort) => {
    data = applySort(data, nameSort, favSort)
    if (search && search.trim()) {
        data = data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
    }
    data = data.slice(page * pageSize, (page * pageSize) + pageSize)
    return data
}

function applySort(data, nameSort, favSort){
    if (favSort){
        return data.sort((a,b) => boolMap[b.isFav] - boolMap[a.isFav])
    }else{
        return data.sort((a,b) => boolMap[a.isFav] - boolMap[b.isFav])
    }
}

function Home(props) {
    const { data, search, page, pageSize, nameSort, favSort } = props
    return (
        <div className="container">
            <Header></Header>
            <AddFriend></AddFriend>
            <div className="line"></div>
            <Sorting></Sorting>
            <div className="items">
                {applyFilter(data, search, page, pageSize, nameSort, favSort).map((item, index) =>
                    <FriendItem key={index} item={item} index={index}></FriendItem>
                )}
            </div>
            <Search></Search>
            <Pagination></Pagination>
        </div>
    );
}



const mapStateToProps = (data) => ({
    data: data.globalData.data,
    page: data.globalData.page,
    search: data.globalData.searchText,
    pageSize: data.globalData.pageSize,
    favSort: data.globalData.favSort,
    nameSort: data.globalData.nameSort,
})
export default connect(mapStateToProps)(Home)
