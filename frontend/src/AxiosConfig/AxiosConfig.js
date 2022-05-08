import axios from 'axios'
const baseUrl = "http://localhost:9090";
export const login = async (val) => {
        const res = await axios({
                method: 'post',
                url: `${baseUrl}/login`,
                data: val
        });
        return res;
}

export const signup = async (val) => {
        const res = await axios({
                method: 'POST',
                url: `${baseUrl}/signup`,
                data: val
        });
        return res;
}