# Users

> A backend server for an app that takes user's information, stores them and sends them a welcome mail.

### How to run and use the server?

#### Download POSTMAN
Download the version of [POSTMAN](https://www.getpostman.com/apps) which suits your OS.
<img src="https://s22.postimg.cc/hiwuayl0x/postman.png" alt="postman">


#### Send POST request  
https://users-41f8e.firebaseapp.com/users

```sh
$ sqlite3 toshokan.db < toshokan-schema.sql
```

#### Send GET request
https://users-41f8e.firebaseapp.com/userInformation


### Demo
<img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/655234/tumblr_mj3mo3MGAf1r0dbsno1_500.0.gif" alt="pica-pica">

#### Features
* Only POST requests can be send to /users
* Only GET request can be send to /userInformation
* Welcome mail is sent to the user on sending the POST request

### License
MIT © [Vaaibhavi Singh](https://github.com/VaaibhaviSingh)
