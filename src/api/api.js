import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "32be0963-b351-42c9-9fa0-5feb4df91140"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count =${pageSize}`).then(response => {
            return response.data
        })
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    authMe(){
        return instance.get(`auth/me`)
    },

}

