const express = require('express');
const cors = require('cors');
const { connection } = require('./db/db_config');

const app = express();
app.use(cors());
const port = 3000;

app.get('/getTopper', (req, res) => {
    connection.query(
        'SELECT * FROM marks ORDER BY marks DESC LIMIT 1',
        (err, results) => {
            if (err) {
                console.log('Error in query!');
                res.send('Error in DB query');
            } else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

app.get('/getFailedList', (req, res) => {
    connection.query(
        'SELECT * FROM marks WHERE marks < 50', (err, results) => {
            if (err) {
                console.log('Error in query!');
                res.send('Error in DB query');
            } else {
                console.log(results);
                res.send(results);
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
});
