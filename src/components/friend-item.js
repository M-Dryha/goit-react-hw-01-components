

const FriendListItem = ({ id, name, avatar, isOnline }) => {
    
   return (<li class="item" key={id}>
            <span class="status" style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
    </li>)
    }


export default FriendListItem;