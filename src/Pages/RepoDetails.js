import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeFork, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom"

const RepoDetails = () => {
    const location = useLocation()
    const {
        name, description, visibility, forks_count, watchers_count, language, full_name, ssh_url, clone_url, allow_forking,
        open_issues_count, archived
    } = location.state || {};
    console.log(location.state)


    const fork = () => {
        return (
            <>
                <FontAwesomeIcon icon={faCodeFork} />  {/* in case icon wont available */}
                <span>Fork</span>
                <span>{forks_count ? forks_count : 0}</span>
            </>
        )
    }

    const issues = () => {
        return (
            <>
                <FontAwesomeIcon icon={faCircleDot} /> {/* in case icon wont available */}
                <span>Open</span>
                <span>{open_issues_count ? open_issues_count : 0}</span>
            </>
        )
    }

    const watch = () => {
        return (
            <>
                <FontAwesomeIcon icon={faEye} /> {/* in case icon wont available */}
                <span>Watch</span>
                <span>{watchers_count ? watchers_count : 0}</span>
            </>
        )
    }

    return (
        <div className="repository-details-heading">
            <div className="repository-actions">
                <div>
                    <h1>{full_name}</h1>
                    <div style={{ display: "flex" }}>
                        <h2>{name}</h2>
                        <span className="tag">{visibility?.charAt(0).toUpperCase() + visibility?.slice(1)}{archived && `  archived`}</span>
                    </div>
                    <span>{description}</span>

                </div>
                <div style={{ display: "flex" }}>
                    <button>{issues()}</button>
                    <div className="button-container">
                        <button>{fork()}</button>
                        {!allow_forking && <span className="tooltip-text">Cannot fork because forking is disabled.</span>}
                    </div>
                    <button>{watch()}</button>
                </div>
            </div>


            <div className="repository-details">
                <div className="clone-container">
                    <h3>Clone</h3>
                    <span> Clone with SSH</span>
                    <div className="clone-url">{ssh_url}</div>
                    <span> Visit Repo on GitHub </span>
                    <div className="clone-url">
                        <a href={clone_url} target="_blank" rel="noopener noreferrer">{clone_url}</a>
                    </div>
                </div>
                <div className="about-container">
                    <h3>About</h3>
                    <div className="horizontal-divider"></div>
                    <h3>Languages</h3>
                    <span>{language} 100%</span>
                </div>

            </div>
        </div>
    )
}

export default RepoDetails