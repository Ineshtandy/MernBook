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
//Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

//creating a route for '/'
app.get("/", (request, response) => {
  //logging out the response recieved
  console.log(request);
  //managing response by attaching a status and message
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

//this will tell express that for each route with prefix '/books' using booksRoute, handled by this middleware
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

//ALL FUNCTIONS BELOW ARE SENT TO THEIR SEPERATE ROUTER IN ROUTES FOLDER TO PROPERLY SEPERATE THE CODE
// ROUTE FOR SAVING A NEW BOOK
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

// ROUTE TO GET ALL BOOKS FROM DB
// app.get("/books", async (request, response) => {
//   try {
//     const books = await Book.find({});

//     return response.status(200).json(books);
//   } catch (error) {
//     console.log(error.message);
//     return response.status(500).send({ message: error.message });
//   }
// });

// ROUTE TO GET BOOK BY ID
// app.get("/books/:id", async (request, response) => {
//   try {
//     const id = request.params.id;

//     const books = await Book.findById(id);

//     return response.status(200).json({
//       count: books.length,
//       data: books,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return response.status(400).send({ message: error.message });
//   }
// });

// ROUTE TO UPDATE A BOOK
// app.put("/books/:id", async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.publishYear ||
//       !request.body.author
//     ) {
//       return response.status(400).send({
//         message: "send all required fields",
//       });
//     }

//     const { id } = request.params;

//     const result = await Book.findByIdAndUpdate(id, request.body);

//     if (!result) {
//       return response.status(404).json({ message: "book not found" });
//     }

//     return response.status(200).send({message: 'book updated successfully'});
//   } catch (error) {
//     console.log(error);
//   }
// });

// BOOK DELETION
// app.delete("/book/:id", async (requst, response) => {
//   try {
//     const { id } = request.params;

//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return response.status(404).send({ message: "book not found" });
//     }

//     return response.status(200).send({ message: "book deleted" });
//   } catch (error) {
//     console.log(error.message);
//     return response({ message: error.message });
//   }
// });
