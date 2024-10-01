import { useEffect, useState } from "react"
import { fetchRepos } from "../api"
import { useNavigate } from "react-router-dom"
import { getDate } from "../utils"

const RepoList = () => {
    const [repos, setRepos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRepos()
                setRepos(data)
            } catch (error) {
                console.error("Error fetching repos", error)
            }
        }
        fetchData()
    }, []);

    const handleRepoClick = (repo) => {
        navigate(`/repo/${repo.name}`, { state: repo })
    }

    return (
        <div className="repository-list">
            <h1> Repositories</h1>
            <div className="repository-container">
                <table>
                    <tbody>
                        {repos.length > 0 ? repos.map((repo) => (
                            <tr>
                                <th key={repo.node_id} className={"repository-name"} onClick={() => handleRepoClick(repo)}>{repo.name}</th>
                                <th>{repo.visibility.charAt(0).toUpperCase() + repo.visibility.slice(1)} {repo.archived && "archived"}</th>
                                <th>{repo.language}</th>
                                <th>{
                                    getDate(repo.updated_at)
                                }
                                </th>
                            </tr>

                        )) : <>Loading...</>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RepoList