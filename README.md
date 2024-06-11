# Koders APIv1 generation javascript 33 

This is an API created for the web  [dev.to](https://dev.to/)

## How to run?
1. install dependencies
```
npm install 
```
2. create an '.env' file
```
touch .env
```
You can find the keys needed in the example.env file

To run in dev mode 
```
npm run dev 
```
To run in production mode
```
npm start
```
For create a new user, you need to send an object (JSON) on the body of the request the next fields : 
```
1. Name,
2. profilePic,
3. email,
4. password,
```

For create new post, you need to send an object (JSON) on the body of the request the next fields: 

```
1. title,
2. image, 
3. body, 
```

## Endpoints

### USERS

4. **POST** Create a new user
```
http://localhost:8080/users

```
3. **POST/auth/login** Once you've registred you can sign in and get your token for authentication with the next endpoint. 
```
http://localhost:8080/auth/login
```
7. **GET/user/id**

You can get the information of an user using the id of the user
```
http://localhost:8080/users/:id
```


### POSTS 
1. **POST** Make a post. Authorization is required 
```
 http://localhost:PORT/posts
```
2. **GET** Make a search. Authorization is not required, it also support search by query param
```
http://localhost:8080/post?title=programacion
```

5. **PATCH** This is for update a post. You can only patch your own post, post of other users. You can't change the user name of the post
```
http://localhost:8080/post/:id
```

6. **DELETE** This is to delete a post by id. You can only delete your own post, post of other users

```
http://localhost:8080/post/:id
```
