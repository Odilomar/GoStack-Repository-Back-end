# :rocket: Repository Challenge
This repository is destinated to goStack Bootcamp challenge with NodeJs and ExpressJs at Rocketseat.
This application is a back-end service for repositories. 
You can create, edit, list, delete and give a like in a repository.

## :pushpin: Required
You can use Node or Yarn as package manager.

With Node:
```bash 
  node v12.18.0
```
  
With Yarn:
```bash 
  yarn v1.22.4
```

## :package: Instalation
Download the files from repository and install all packages to run the project;

With Node:
```bash
  npm install
``` 

With Yarn:
```bash 
  yarn
```

## :art: Run
After downloading files and run scripts above, run the follow commands.

With Node: 
```bash 
  npm run dev
```
With Yarn:
```bash
  yarn dev
```

## :twisted_rightwards_arrows: Routes
**GET** ```/repositories```
  * Return all repositories;
  
**POST** ```/repositories```
  * Needs a json in body request informing url (string), title (string) and techs (array of strings);
  * Create a repository in the repositories list;
  * Return status ```201``` and the repository data including id and likes in json;
  * Return status ```400``` and a error message in json if non of those itens is fulfil in body request;
  
**PUT** ```/repositories/:id```
  * Needs a json in body request informing url (string), title (string) and techs (array of strings);
  * Update an existent repository in the repository list;
  * Return status ```200``` and the repository data including id and likes in json;
  * Return status ```400``` and a error message in json if repository id does not exists;

**DELETE** ```/repositories/:id```
  * Delete an existent repository in the repository list;
  * Return status ```204``` and no body message;
  * Return status ```400``` and a error message in json if repository id does not exists;

**POST** ```/repositories/:id/like```
  * Create a new like in a existent repository in the repository list;
  * Return status ```200``` and the repository data including id and likes in json;
  * Return status ```400``` and a error message in json if repository id does not exists;

## :white_check_mark: Tests
For tests, run the follow commands.

With Node:
```bash
  npm run test
```

With Yarn: 
```bash
  yarn test
```

### Tests Especifications
```Should be able to create a new repository```
  * To past in this test, the application should create a new repository;
  * Return a json with the repository data including id and likes and status ```200```;

```Should be able to list the repositories```
  * To past in this test, the application should allow to return all repositories that has been created until request;
  
```Should be able to update repository```
  * To past in this test, the application should allow to update url, title and techs from a specific repository;
  * Return json with the repository data and status ```200```;
  
```Should not be able to update a repository that does not exist```
  * To past in this test, the application should valid the route update to make sure that the id repository passed in url request exists;
  * If not, return json with error message and status ```400```;
 
```Should not be able to update repository likes manually```
  * To past in this test, the application should not allow that the route update change like value of the repository;
  * The only place that the like value should be updated is the /repositories/:id/like;
  
```Should be able to delete the repository```
  * To past in this test, the application should delete an existent repository;
  * Return void with status ```204```;

```Should not be able to delete a repository that does not exist```
  * To past in this test, the application should not allow delete a repository that does not exists;
  * Return json with error message and status ```400```;

```Should be able to give a like to the repository```
  * To past in this test, the application should allow to increments 1 to the repository likes;
  * Return a json with repository data;

```Should not be able to like a repository that does not exist```
  * To past in this test, the application should not allow to increments the repository likes if id repository not exists;
  * Return json with error message and status ```400```;
  
## :memo: License

This project is under MIT license. See [LICENSE](LICENSE) for more details.
