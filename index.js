import express from 'express';
import FetchHelper from './fetchHelper';

const app = express()

app.get('/:application/:environment?/:account?', (req, res) => {
    const fetchHelper = new FetchHelper(req.params);
    res.status(200).send(fetchHelper.send());
})

app.listen(8080, () => {
    console.log("App listening on port 8080")
})