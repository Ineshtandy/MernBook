import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body, allows express to use json file
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

//creating a route for '/'
app.get("/", (request, response) => {
  //logging out the response recieved
  console.log(request);
  //managing response by attaching a status and message
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("/books", booksRoute);

// used to connect to database
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// // Route for saving a new book

// app.post('/books',async(request, response) => {
//   try{
//     //validating input coming from request
//     //checking all required fields and if theyre not present, return a response with a status of 400
//     if(
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: 'send all required fields: title,author,publishYear'
//       })
//     }

//     //variable for new book
//     const newBook = {
//       title: request.body.title,
//       author: request.body.author,
//       publishYear: request.body.publishYear,
//     };

//     const book = await Book.create(newBook);
//   } catch(error){
//     console.log(error.message);
//     response.status(500).send({message: error.message});
//   }
// });

// Route to get all books from the database
app.get("/books", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});
