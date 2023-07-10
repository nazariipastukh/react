import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
import {useState} from "react";

const App = () => {
    const [userId, setUserId] = useState(null)

    return (
        <div>
            <Users setUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    )
}

export default App;
