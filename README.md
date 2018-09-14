# Users

> A backend server for an app that takes user's information, stores them and sends them a welcome mail.

### Download POSTMAN
Download the version of [POSTMAN](https://www.getpostman.com/apps) which suits your OS. 

<img src="https://s22.postimg.cc/hiwuayl0x/postman.png" alt="postman">

### Setting up server

#### Clone Git repository 
Clone the git repository in your locl device by using git bash.

```sh
$ git clone https://github.com/VaaibhaviSingh/Users.git
```

Open command prompt and move to the project's folder, after that move to functions folder.

```sh
$ cd functions
```

Download the node modules using npm.

```sh
$ npm install
```

Move back to the root folder.

```sh
$ cd ..
```

Run the server

```sh
$ firebase serve --only functions,hosting
```

Your server is up and running.

### Send POST request  

Open postman desktop app, select POST from dropdown list and place the following url in the url section:
http://localhost:5001/users-41f8e/us-central1/app/users
Go to body header select raw option from it then from the dropdown list on the right select JSON(application/json).
In the space below write down the user's information in the form:
{
	"username": "username",
	"email": "user@mail"
}
Click on SEND. 

The firebase database will be updated and mail will be sent to "user@mail".  

### Send GET request

Open postman desktop app, select GET from dropdown list and place the following url in the url section:
http://localhost:5001/users-41f8e/us-central1/app/userInformation

Database content will be shown in the response body.
Same can be done by visiting:
https://users-41f8e.firebaseapp.com/userInformation


### Demo
<img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/655234/tumblr_mj3mo3MGAf1r0dbsno1_500.0.gif" alt="pica-pica">

#### Features
* Only POST requests can be send to /users
* Only GET request can be send to /userInformation
* Welcome mail is sent to the user on sending the POST request

### License
MIT © [Vaaibhavi Singh](https://github.com/VaaibhaviSingh)
