const express = require('express');
const router = express.Router();

const ideas = [
    {
        id: 1,
        text: 'blog site will make a fortune',
        tag:'blog',
        username:'dkim',
        date:'2023-10-09'
    },
    {
        id: 2,
        text: 'toto site to predict the future',
        tag:'money',
        username:'dkim',
        date:'2023-10-09'
    },
    {
        id: 3,
        text: 'orzempic will make you lose weight',
        tag:'health',
        username:'zoe',
        date:'2023-10-05'
    },
    ];

router.get('/', (req, res) => {
    res.send({success: true, ideas: ideas});
});

router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    if(!idea) {
        return res.status(404).json({success: false, message: 'page not found'});
    }

    res.send({found: idea});
});

module.exports = router;