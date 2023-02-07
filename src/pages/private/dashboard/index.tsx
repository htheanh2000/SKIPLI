import { useEffect } from "react";
import SearchBar from "../../../components/searchbar";
import { useAppSelector } from "../../../store/hook";

const Dashboard = () => {
    const {data} = useAppSelector(state => state.github) 
    useEffect(()=> {
    },[data])
    return (
        <div>
            <SearchBar/>
            {
                data.map(user => <div key={user.id}>{user.login}</div>)
            }
        </div>
    )
}

export default Dashboard;