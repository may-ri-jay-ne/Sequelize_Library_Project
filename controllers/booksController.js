const bookModel = require('../models/books');
const { v4: uuid} = require('uuid');
//creating a new club
exports.createBook = async (req, res) => {
    try {
        //extract data from the request body
        const { author, title, genre, progress } =req.body;
        // check for the club in the database by coach
        const bookExistsName = await bookModel.findOne({where: {author:author.toLowerCase(), }});

        if (bookExistsName) {
            return res.status(400).json({
                message: "Book already added"
            })
        }
        
        const bookExists = await bookModel.findAll({where: {title: title.toLowerCase(), }});

        //check if the club exists
        if (bookExists.length ==1){
            res.status(400).json({
                message: `Book with name: ${title} already exist`
            })
        } else {
            //create a new instance of the club database
            const newBook = await bookModel.create({
                id: uuid(),
                title: title.toLowerCase(),
                author: author.toLowerCase(),
                genre,
                progress,
            });

            //send a success response
            res.status(201).json({
                message: 'New Book added successfully',
                data: newBook
            })

        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error: '+ error.message
        })
    }
};

//read or get all books in the database
exports.getAllBook = async (req, res) =>{
    try {
        const allBook = await bookModel.findAll();
        //success response
        res.status(201).json({
            message: 'These are all books avaliable',
            data: allBook,
            total: allBook.length
        });

        exports.createBook = async (req, res) => {
            const { author, title, genre, progress } = req.body;
        };

    } catch (error) {
        next(error);
            
        
    }
};

// get one Book
exports.getOneTitle = async (req, res) =>{
    try {
        //get the author from params
        const { title } = req.params;
        // Find THE Book
        const findBook = await bookModel.findAll({where: { title:title }});

        if (findBook.length==0) {
            res.status(400).json({
                message: 'Book not found',
            })

        } else {
                //success response
                res.status(201).json({
                    message: 'Book found',
                    data: findBook
                });
        }
        exports.createBook = async (req, res) => {
            const { author, title, genre, progress } = req.body;
        };
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error: '+ error.message
        }) 
    }
};


exports.getOneAuthor = async (req, res) =>{
    try {
        //get the author from params
        const { author } = req.params;
        // Find THE Book
        const nextBook = await bookModel.findAll({where: { author:author } });

        if (nextBook.length==0) {
            res.status(400).json({
                message: 'Author not found',
            })

        } else {
                //success response
                res.status(201).json({
                    message: 'Author found',
                    data: nextBook
                });
        }
        exports.createBook = async (req, res) => {
            const { author, title, genre, progress } = req.body;
        };
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error: '+ error.message
        }) 
    }
};

//update the Clubs
exports.updateBook = async (req, res) => {
    try{
        //get the id from params
        const { id } = req.params;

        //extract data from request body
        const { author, title, genre, progress } =req.body;
        //find the club
        const book = await bookModel.findAll({where: { id: id } });
        if (book.length == 0) {
            res.status(404).json({
                message: 'Your books have not updated'
            }) 
        } else {
            const data = {
                author,
                title,
                genre,
                progress,
            };
            //updating to database
            await bookModel.update(data, {where: {id: id}});
            //fetching the Club to see the update
            const updatedBook = await bookModel.findAll({where: { id: id } });

            
            //success response
            res.status(200).json({
                message: `New Update`,
                data: updatedBook
            })
        }
        exports.createBook = async (req, res) => {
            const { author, title, genre, progress } = req.body;
        };

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error: '+ error.message
        })  
    }

};

//delete a book
exports.deleteBook = async (req, res) => {
    try{
        const { id } = req.params;
        //find the club to delete
        const findBook = await bookModel.findAll({where: {id: id} });
        if (findBook.length == 0) {
            res.status(404).json({
                message: 'Already deleted'
            })
        } else {
            //delete club from the Library
            await bookModel.destroy({where: {id: id} });
            res.status(200).json({
                message: `Deleted successfully`,
            })
        }
        exports.createBook = async (req, res) => {
            const { author, title, genre, progress } = req.body;
        };
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error: '+ error.message
        })
    }

}
