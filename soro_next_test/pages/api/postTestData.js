let isSaved;

export default function handler(req, res) {
    const {data} = req.body;

    if (req.method === 'GET') {
        res.send(isSaved);
    }else if(req.method === 'POST'){
        res.send({data, msg: `POST 방식으로 ${data}를 입력받음.`});
    }else{
        res.end();
    }
    isSaved = data;
}
