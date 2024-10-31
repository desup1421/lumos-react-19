import axios from "axios";

// const API_URL = "https://lumoshive-academy-ai-api.vercel.app";
const API_URL = import.meta.env.VITE_API_URL;


export const login = async (data) => {
    const res = await axios.post(`${API_URL}/login`, data, {
        header: {
            "Content-Type": "application/json",
            "x-api-key": "RJS1-202403"
        },
    });
    return res.data;
}
export const register = async (data) => {
    const res = await axios.post(`${API_URL}/register`, data, {
        header: {
            "Content-Type": "application/json",
            "x-api-key": "RJS1-202403"
        },
    });
    return res.data;
};

// export const queryAI = async (data) => {
//     const res = await axios.post(`${API_URL}/query`, data, {
//         header: {
//             "Content-Type": "application/json",
//             "x-api-key": "RJS1-202403",
//             "Authorization": "Bearer " + localStorage.getItem("token")
//         },
//     });
//     return res.data;
// };
