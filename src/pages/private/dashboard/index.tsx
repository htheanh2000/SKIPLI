import { useEffect, useMemo, useState } from "react";
import LazyImage from "../../../components/image";
import Pagination from "../../../components/pagination";
import SearchBar from "../../../components/searchbar";
import { useAppDispatch, useAppSelector } from "../../../store/hook";

const Dashboard = () => {
    const {data,searchQuery,total_count} = useAppSelector(state => state.github) 
    const dispatch = useAppDispatch()
    let PageSize = 10;

    const onchangePage =(page: number)=> {
        const payload = {
            ...searchQuery,
            page: page,
        }
        dispatch({type: 'SEARCH_GITHUB_USER', payload})
    }

    return (
        <div>
            <SearchBar/>
                  <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>LOGIN</th>
                    <th>AVATAR</th>
                    <th>HTML</th>
                    {/* <th>PHONE</th> */}
                </tr>
                </thead>
                <tbody>
                {data.map(item => {
                    return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.login}</td>
                        <td><LazyImage width={100} height={100} src={item.avatar_url} alt={item.avatar_url}/></td>
                        <td><a href={item.html_url}>{item.html_url}</a></td>
                        {/* <td>{item.public_repos}</td> */}
                        {/* <td>{item.followers}</td> */}
                    </tr>
                    );
                })}
                </tbody>
            </table>

            <Pagination
                className="pagination-bar"
                currentPage={searchQuery.page}
                totalCount={total_count}
                pageSize={PageSize}
                onPageChange={onchangePage}
            />
        </div>
    )
}

export default Dashboard;