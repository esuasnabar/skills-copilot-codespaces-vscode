// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Comment } = db;

// Handle request
router.get('/', (req, res) => {
  Comment.findAll()
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Comment.findByPk(req.params.id)
    .then(comment => {
      res.status(200).json(comment);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});