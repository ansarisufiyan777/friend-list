import '../App.scss';
import React from 'react';
import { connect, Provider } from 'react-redux';
import { addFriend } from '../redux/GlobalActions';

function AddFriend(props) {
    const [name, setName] = React.useState('')
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && name.trim().length) {
            if (props.data.map(d => d.name.toLowerCase()).includes(name.toLowerCase())){
                alert("User with same name already exists.")
            }else{
                props.dispatch(addFriend(name))
                setName('')
            }
        }
    }
    return (
        <input value={name} 
        onChange={e => setName(e.target.value)} 
        onKeyPress={handleKeyPress}
        className="input-text" placeholder="Enter your friend's name" type="text" />
    );
}


const mapStateToProps = (data) => ({
    data: data.globalData.data

})
export default connect(mapStateToProps)(AddFriend)
