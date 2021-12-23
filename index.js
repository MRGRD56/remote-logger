import express from 'express';

const app = express();
app.post('/log', ((req, res) => {
    console.log({req});

    res.send();
}));

app.listen(3333, () => {
    console.log('Listening on port 3333');
});