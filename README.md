# Users

> A backend server for an app that takes user's information, stores them and sends them a welcome mail.

### Download POSTMAN
Download [POSTMAN](https://www.getpostman.com/apps) version according to your OS. 

<img src="https://s22.postimg.cc/hiwuayl0x/postman.png" alt="postman">

### Setting up server

#### Clone Git repository 
Clone the git repository in your local device by typing the following command git bash:

```sh
$ git clone https://github.com/VaaibhaviSingh/Users.git
```

Open command prompt and move to the current location of the project(move to Users folder), after that move to functions folder.

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

Run the server using the following command:

```sh
$ firebase serve --only functions,hosting
```

Your server is up and running.

### Send POST request to .../users  

Open postman desktop app, select POST from dropdown list and place the following url in the url section: <br />
http://localhost:5001/users-41f8e/us-central1/app/users <br />
Go to header in the key box write "Content-Type" and in the value box write "application/json".

<img src="https://s8.postimg.cc/4ijhcqefp/Header.png" alt="postman">

Go to body select raw option from it then from the dropdown list on the right select JSON(application/json). <br />
In the space below write down the user's information in the form: <br />
{ <br />
	"username": "username", <br />
	"email": "user@mail" <br />
} <br />

<img src="https://s8.postimg.cc/u7ypjztid/Body.png" alt="postman">

Click on SEND. <br />
The firebase database will be updated and mail will be sent to "user@mail". <br />

<img src="https://s8.postimg.cc/924wpg8f9/Mail.png" alt="postman">

### Send GET request to .../userInformation

Open postman desktop app, select GET from dropdown list and place the following url in the url section: <br />
http://localhost:5001/users-41f8e/us-central1/app/userInformation <br />
Click on SEND. <br />
Database content will be shown in the response body. <br />

<img src="https://s8.postimg.cc/d22val28l/GET.png" alt="postman">

Same can be done by visiting: <br />
https://users-41f8e.firebaseapp.com/userInformation <br />
The above link will always work even if the server is not running locally. <br />

<img src="https://s8.postimg.cc/twh97g2ud/Browser.png" alt="postman">

### Demo
<img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/655234/tumblr_mj3mo3MGAf1r0dbsno1_500.0.gif" alt="pica-pica">

[![Demo](https://s8.postimg.cc/gxk1i8s2t/Demo.png)](https://youtu.be/d-jRMoINkYM "Demo")

#### Features
* Only POST requests can be send to /users
* Only GET request can be send to /userInformation
* Welcome mail is sent to the user on sending the POST request

### License
MIT © [Vaaibhavi Singh](https://github.com/VaaibhaviSingh)
