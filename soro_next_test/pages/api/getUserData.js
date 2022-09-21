export default function handler(req, res) {
    setTimeout(()=>{
        res.status(200).send([
            { name: 'name01', age: 13 },
            { name: 'name02', age: 15 },
            { name: 'name03', age: 12 },
            { name: 'name04', age: 18 },
            { name: 'name05', age: 21 },
            { name: 'name06', age: 32 },
        ])
    },1000)
}
