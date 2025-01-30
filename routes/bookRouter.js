const router = require('express').Router();

//import express and extract router
const { createBook, getAllBook, updateBook, deleteBook, getOneAuthor, getOneTitle } = require('../controllers/booksController');

//create the books
router.post('/book', createBook);
//get all the books
router.get('/book', getAllBook);
// get one book by id
router.get('/book/:title', getOneTitle);
// router.get('/book/:author', getOneBook);
router.get('/book/:author', getOneAuthor)
//update by id
router.patch('/book/:id', updateBook);

//delete an existing book
router.delete('/book/:id', deleteBook);

module.exports = router;