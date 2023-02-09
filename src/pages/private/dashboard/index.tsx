import Icon from "../../../components/icon";
import LazyImage from "../../../components/image";
import Pagination from "../../../components/pagination";
import SearchBar from "../../../components/searchbar";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import style from './style.module.scss'
const Dashboard = () => {
    const {data,searchQuery,total_count} = useAppSelector(state => state.github) 
    const {user} = useAppSelector(state => state.user) 
    const dispatch = useAppDispatch()
    const onchangePage =(page: number)=> {
        const payload = {
            ...searchQuery,
            page: page,
        }
        dispatch({type: 'SEARCH_GITHUB_USER', payload})
    }

    const onChangeFavorites = (github_user_id: number) => {
        const payload = {
            user,
            github_user_id
        }
        dispatch({type: 'UPDATE_FAVORITE_GITHUB_USER', payload})
    }

    return (
        <div className={style.container}>
            <SearchBar/>
                  <table>
                <thead>
                <tr>
                    <th>Github id</th>
                    <th>Username</th>
                    <th>Avatar</th>
                    <th>Github link</th>
                    <th>Like</th>
                    {/* <th>PHONE</th> */}
                </tr>
                </thead>
                <tbody>
                {data.map(item => {
                    return (
                    <tr className={style.row} key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.login}</td>
                        <td><LazyImage width={100} height={100} src={item.avatar_url} alt={item.avatar_url}/></td>
                        <td><a href={item.html_url}>{item.html_url}</a></td>
                        <td><Icon onClick={() => onChangeFavorites(item.id)} name={item.isLiked ? 'heart' : 'outline-heart'}/></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>

            <Pagination
                className={style.pagination}
                currentPage={searchQuery.page}
                totalCount={total_count}
                pageSize={searchQuery.per_page}
                onPageChange={onchangePage}
            />
        </div>
    )
}

export default Dashboard;