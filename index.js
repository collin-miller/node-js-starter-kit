import express from 'express';
import morgan from 'morgan';
import FetchHelper from './fetchHelper';
import logger from './logger';

const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: logger.stream }))

app.get('/:application/:environment?/:account?', (req, res) => {
    const fetchHelper = new FetchHelper(req.params);
    res.status(200).send(fetchHelper.send());
})

app.listen(8080, () => {
    logger.info("App listening on port 8080")
})