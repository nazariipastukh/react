import {User} from './User'

export const Users = ({user}) => (
    <User
        key={user.id}
        user={user}
    />
)


