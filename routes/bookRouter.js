const router = require('express').Router();

//import express and extract router
const { createBook, getAllBook, updateBook, deleteBook, getOneAuthor, getOneTitle } = require('../controllers/booksController');

//create the books
// router.post('/book', createBook);
router.post('/book', async (req, res, next) => {
    try {
        await createBook(req, res);
    } catch (error) {
        next(error);
    }
});
//get all the books
// router.get('/book', getAllBook);
router.get('/book', async (req, res, next) => {
    try {
        await getAllBook(req, res);
    } catch (error) {
        next(error);
    }
});
// get one book by id
// router.get('/book/:title', getOneTitle);
router.get('/book/:title', async (req, res, next) => {
    try {
        await getOneTitle(req, res);
    } catch (error) {
        next(error);
    }
});
// router.get('/book/:author', getOneBook);
// router.get('/book/:author', getOneAuthor);
router.get('/book/:author', async (req, res, next) => {
    try {
        await getOneAuthor(req, res);
    } catch (error) {
        next(error);
    }
});
//update by id
// router.patch('/book/:id', updateBook);
router.patch('/book/:id', async (req, res, next) => {
    try {
        await updateBook(req, res);
    } catch (error) {
        next(error);
    }
});

//delete an existing book
// router.delete('/book/:id', deleteBook);
router.delete('/book/:id', async (req, res, next) => {
    try {
        await deleteBook(req, res);
    } catch (error) {
        next(error);
    }
});

module.exports = router;