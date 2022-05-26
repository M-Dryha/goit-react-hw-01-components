import PropTypes from 'prop-types';
import FriendListItem from 'components/friend-item';


const FriendList = (friends) => {
    // console.log(friends);
    return (<ul class="friend-list">
        {friends.friends.map(({id, avatar,isOnline,name}) => {
           
            return ( <FriendListItem
                    avatar={avatar}
                    key={id}
                    isOnline={isOnline}
                    name={name}
                
                />)
                
         })}
        
         </ul>)
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}

export default FriendList;