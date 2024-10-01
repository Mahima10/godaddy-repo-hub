import axios from "axios";

const API_BASE_URL = "https://api.github.com/orgs/godaddy"

export const fetchRepos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/repos`)
        return response.data
    } catch (error) {
        console.log("Error in fetching repositories:", error)
        throw error;
    }
}