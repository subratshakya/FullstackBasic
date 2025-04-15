import express from 'express';

const app=express();

app.get('/', (req,res) => {
    res.send('Server is ready');
});

//get a list of 5 jokes

app.get('/api/jokes', (req,res) => {
    const jokes=[
        {
            id: 1,
            title: 'Joke no. 1',
            content:'JOKE'
        },
        {
            id: 5,
            title: 'Joke no. 1',
            content:'JOKE'
        },
        {
            id: 4,
            title: 'Joke no. 1',
            content:'JOKE'
        },
        {
            id: 3,
            title: 'Joke no. 1',
            content:'JOKE'
        },
        {
            id: 2,
            title: 'Joke no. 1',
            content:'JOKE'
        }
    ];
    res.send(jokes);
})
const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});