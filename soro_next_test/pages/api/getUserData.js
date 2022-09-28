import axios from "axios";

export default async function handler(req, res) {
    axios.get('/api/getTestData').then(result => {
        console.log('b')
        res.status(200).json(result.data);
    })
}
