Working functionals
```````````````````
Login API working.
Register API working.
CRED operations API's working.
Select movie booking API working.
Booked history API working.
E-ticket API working.

Run code -> npm run dev




Dependencies
````````````
bcrypt,express,jsonwebtoken,mongoose,multer




Please note - very important
````````````````````````````
2 types of user -> admin and normal user.
API 3,4,5,6 will work only if admin token is used, or else error will show up.
API 7,8,9,10,11,12 will work only if normal user token is used, or else error will show up.




Non-Working functionals
```````````````````````
Payment gateway not implemented.
Income report cant generate as no payment gateway implemented.




API testing done on Postman
```````````````````````````
API-1: Login Page:
Method: POST
URL: 127.0.0.1:3000/users/login

Request: 
{
    "email": string,
    "password": string
}

Response:
{
    "message": "Login succesfull!",
    "token": " generated at the time of login please store for other API's to work"
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-2: Register Page:
Method: POST
URL: 127.0.0.1:3000/users/register

Request: 
{
     "first_name": string,
     "last_name": string,
     "email": string,
     "password": string,
     "mobile": number
}

Response:
{
"message": "User registration success",
    "status": 200,
    "data": {
        "first_name": "abc",
        "last_name": "123",
        "email": "abc@gmail.com",
        "password": "$2b$10$JiebJCBZ0JNgv5/k40Fox.Q98cEPdqRFztCIhHqH1RksHoI3i8M6i",
        "mobile": "1234567890",
        "isAdmin": false,                                                           //need to change this field in DataBase to 'true' if admin access nedeed else CRED API's wont work.
        "_id": "6213c2f56868326d2e902dca",
        "created_at": "2022-02-22T16:51:01.157Z",
        "updated_at": "2022-02-22T16:51:01.157Z",
    }
}


```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-3: List Users Page:
Method: GET
URL: 127.0.0.1:3000/users/list-users

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for admin user)
}

Response:
{
    "users": [
        {
            "_id": "6213c2f56868326d2e902dca",
            "first_name": "abc",
            "last_name": "123",
            "email": "abc@gmail.com",
            "password": "$2b$10$JiebJCBZ0JNgv5/k40Fox.Q98cEPdqRFztCIhHqH1RksHoI3i8M6i",
            "mobile": "1234567890",
            "isAdmin": true,
            "created_at": "2022-02-19T11:16:53.636Z",
            "updated_at": "2022-02-19T11:16:53.636Z",
            "__v": 0
        }
    ]
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-4: Add movie Page:
Method: POST
URL: 127.0.0.1:3000/movies/add

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for admin user)

Inside Body:
{
     "movie_name": string,
     "description": string,
     "runtime": number
}
}

Response:
{
    "message": "Movie creation success",
    "status": 200,
    "data": {
        "movie_name": "scary movie",
        "description": "horror movie with loads of fun",
        "runtime": 2,
        "_id": "6213459d849044795904bc19",
        "created_at": "2022-02-21T07:56:13.823Z",
        "updated_at": "2022-02-21T07:56:13.823Z",
        "__v": 0
    }
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-5: Update movie Page:
Method: PUT
URL: 127.0.0.1:3000/movies/update

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for admin user)

Inside Body:
{
     "_id": string,
     "movie_name": string
}
}

Response:
{
    "message": "Movie updated success",
    "status": 200,
    "data": {
        "movie_name": "scary movie 2"
    }
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-6: Delete movie Page:
Method: DELETE
URL: 127.0.0.1:3000/movies/delete

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for admin user)

Inside Body:
{
     "_id": string
}
}

Response:
{
     "message": "Movie delete success",
     "status": 200
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-7: Search movie Page:
Method: GET
URL: 127.0.0.1:3000/movies/search

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for normal user)

Inside Body:
{
      "movie_name": string
}
}

Response:
{
"message": "Movie found",
    "searchBar": {
        "_id": "6213459d849044795904bc19",
        "movie_name": "scary movie",
        "description": "horror movie with loads of fun",
        "runtime": 2,
        "created_at": "2022-02-21T07:56:13.823Z",
        "updated_at": "2022-02-21T07:56:13.823Z",
        "__v": 0
    }
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-8: List all movie Page:
Method: GET
URL: 127.0.0.1:3000/movies/search

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for normal user)
}

Response:
{
    "listMovie": [
        {
            "_id": "6210f410d78c5ec7ec2fa53b",
            "movie_name": "hello world 3",
            "description": "hi all",
            "runtime": 1,
            "created_at": "2022-02-19T13:43:44.336Z",
            "updated_at": "2022-02-19T13:43:44.336Z",
            "__v": 0
        },
        {
            "_id": "6213459d849044795904bc19",
            "movie_name": "scary movie",
            "description": "horror movie with loads of fun",
            "runtime": 2,
            "created_at": "2022-02-21T07:56:13.823Z",
            "updated_at": "2022-02-21T07:56:13.823Z",
            "__v": 0
        }
    ]
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-9: specific movie Page:
Method: GET
URL: 127.0.0.1:3000/movies/specificMovie

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for normal user)

Inside Body:
{
      "_id": string
}
}

Response:
{
    "message": "Movie Details below",
    "searchBar": {
        "_id": "6213459d849044795904bc19",
        "movie_name": "scary movie",
        "description": "horror movie with loads of fun",
        "runtime": 2,
        "created_at": "2022-02-21T07:56:13.823Z",
        "updated_at": "2022-02-21T07:56:13.823Z",
        "__v": 0
    }
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-10: Booking movie Page:
Method: POST
URL: 127.0.0.1:3000/bookings/input

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for normal user)

Inside Body:
{
      "movie_name": string,
      "date": string,
      "time": string,
      "no_of_seat": number
}
}

Response:
{
    "message": "Booking success",
    "status": 200,
    "data": {
        "username": "test",
        "email": "test@gmail.com",
        "movie_name": "hello world 3",
        "date": "2022-02-22",
        "time": "1:00 PM",
        "no_of_seat": 6,
        "_id": "6213d474fccafd2df5f30102",
        "__v": 0
    }
}


```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-11: Booking history of specific user Page:
Method: GET
URL: 127.0.0.1:3000/bookings/history

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for normal user)
}

Response:
{
    "message": "Booking history below",
    "history": [
        {
            "_id": "6213d378b381a3f0f3fd028f",
            "username": "test",
            "email": "test@gmail.com",
            "movie_name": "scary movie",
            "date": "2022-02-22",
            "time": "1:00 PM",
            "no_of_seat": 6,
            "__v": 0
        },
        {
            "_id": "6213d410fccafd2df5f300fe",
            "username": "test",
            "email": "test@gmail.com",
            "movie_name": "hello world 3",
            "date": "2022-02-22",
            "time": "1:00 PM",
            "no_of_seat": 6,
            "__v": 0
        }
    ]
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````

API-12: E-ticket Page:
Method: GET
URL: 127.0.0.1:3000/bookings/eticket

Request:
{
Inside Headers:

Key: Authorization
Value: Bearer (token from API 1 for normal user)
}

Response:
{
    "message": "E-Ticket",
    "history": {
        "_id": "6213d410fccafd2df5f300fe",
        "username": "test",
        "email": "test@gmail.com",
        "movie_name": "hello world 3",
        "date": "2022-02-22",
        "time": "1:00 PM",
        "no_of_seat": 6,
        "__v": 0
    }
}

```````````````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````````````````