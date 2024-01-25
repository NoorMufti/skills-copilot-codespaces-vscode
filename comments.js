//Create web server
const express = require('express');
const router = express.Router();

//Import database
const db = require('../db');

//Import model
const Comment = require('../models/comment');

//Import middleware
const { check, validationResult } = require('express-validator');

//Import auth middleware
const auth = require('../middleware/auth');

// @route   GET