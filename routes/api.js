const express = require('express');
const router = express.Router();

router.get('/:boolean', (req, res) => {
    const status = req.params.boolean.toLowerCase();

    if(status === 'true') {
        setTimeout(() => {
            res.status(200).send({
                msg: `Data is now in the Database`
            })
        }, 3000);
    } else {
        res.status(400).send({
            msg: `Request Failed`
        });
    }    
    
});

module.exports = router;