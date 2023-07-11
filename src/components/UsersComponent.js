import {User} from './User'

export const UsersComponent = ({setUserId, users}) => (
    <div>
        {users.map(user => (
            <User key={user.id} user={user} setUserId={setUserId}/>
        ))}
    </div>
)
