import axios from 'axios'

const host = 'http://localhost:3000/api'

//read
export const allBooks = () => {
    return axios.get(`${host}/books`)
        .then(r=>r.data)
        .catch(e=>e.response)
}

//read1
export const detailBooks = (id) => {
    return axios.get(`${host}/books/${id}`)
        .then(r=>r.data)
        .catch(e=>e.response)
}



//update
