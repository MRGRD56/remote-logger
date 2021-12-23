import express from 'express';

const app = express();
app.use(express.json());

app.post('/log', ((req, res) => {
    const from = req.query['from'] ?? req.headers['x-forwarded-for'] ?? req.socket.remoteAddress;
    console.log(`[${from}]`, req.body);

    res.send();
}));

app.listen(3333, () => {
    console.log('Listening on port 3333');
});