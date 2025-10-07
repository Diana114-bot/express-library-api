# LIBRARY API

This is a RESTful API for managing a library system with two resources:Authors and Books (each book belongs to an author).
The API will support CRUD (Create, Read, Update, Delete) operations, validation, and error handling.

## Librarians need to:
○ Add new titles and authors.
#
○ Search books by title, author, or year.
#
○ Correct/update book details.
#
○ Delete historical records.

### Steps for testing.

  1. Clone the project by running the command on your terminal(nodejs):
  ``` git clone https://github.com/Diana114-bot/express-library-api.git ```

  2. Enter inside the folder command:
   ``` cd express-library-api ```
  3. Open Visual Studio Code(Install it if you do not have it):
    ``` code . ```
  4. Install all the dependancies by running the following commands on your VS Code terminal:
   # 
     git checkout dev
   #
    npm install 
  
  6. Run the server command:

   ``` npm run dev ```


  ## Steps for testing the API on POSTMAN
  ### 1. Install Postman(If you do no have it)
  #
      Open a browser and go to getpostman.com (or search “Postman”).
      #
      Download the app for your OS (Windows / macOS / Linux) or use the Postman web version.
      #
      Run the installer and open Postman.
      #
      You may create/sign into an account or skip sign-in (you can test without signing in).

## Testing Core Features 

### 1. Create New Author

Endpoint: POST /authors
POST (create) — JSON body
Method: POST
URL:http://localhost:3000/authors
Headers: Content-Type: application/json
Body tab → select raw → choose JSON → enter:
{
  "name": "Zee",
  "bio": "Author bio..."
}
Click Send

### 2. List All Authors

 Endpoint: GET /authors
 GET all authors
 Method: GET
 URL:http://localhost:3000/authors
 Click Send

 ### 3. Get Author By ID

  Endpoint: GET /authors/:id
  Method: GET
  URL:http://localhost:3000/authors/1
  Click Send 

  ### 4. Update Author BY ID
    
   Endpoint: PUT /authors/:id
   Method: PUT
   URL:http://localhost:3000/authors/1
   Headers: Content-Type: application/json
   Body tab → select raw → choose JSON → enter:
    {
      "name": "Updated Zee",
      "bio": "Author bio..."
    }
   Click Send

   ### 5. Delete Author BY ID

    Endpoint: DELETE /authors/:id
    Method: DELETE
    URL:http://localhost:3000/authors/1
    Click send
    
  ### 6. List Books By an Author

  Endpoint: GET /authors/:id/books
  Method: GET
  URL:http://localhost:3000/authors/1/books
  Click Send 

 ### 7. Create New Book

  Endpoint: POST /books
  Method: POST
  URL:http://localhost:3000/books
  Headers: Content-Type: application/json
  Body tab → select raw → choose JSON → enter:
  {
  "title": "Things Fall Apart",
  "year": 1958,
  "authorId": 1
  }
  Click Send

  ### 8. List All Books

   Endpoint: GET /books
    Method: GET
    URL:http://localhost:3000/books
    Click Send

  ### 9. Get Book By ID

    Endpoint: GET /books/:id
    Method: GET
    URL:http://localhost:3000/books/1
    Click Send

 ### 10. Update Book By ID

    Endpoint: PUT /books/:id
    Method: PUT
    URL:http://localhost:3000/books/1
    Body tab → select raw → choose JSON → enter:
    {
      "title": "Updated Things Fall Apart",
       "year": 2000,
       "authorId": 1
    }
    Click Send

 ### 11. Delete Book BY ID

  Endpoint: DELETE /books/:id
    Method: DELETE
    URL:http://localhost:3000/books/1
    Click send

 ### 12. Optional Query parameters & examples
        year=2020 — filter by year
  #
        search=married — case-insensitive title search
  #
        authorId=1 — filter books by author
  #      
        sortBy=title or sortBy=year — sorting
  #     
        page=2&limit=5 — pagination (default: page=1, limit=5)
 #
   ### Examples:
         GET /books?search=married&sortBy=year&page=1&limit=10
   #
         GET /authors/1/books?year=2020
   #
         GET /books?authorId=2&sortBy=title

        


