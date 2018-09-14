# Users

> A backend server for an app that takes user's information, stores them and sends them a welcome mail.

## Running

### Clone the repo and install dependencies

```sh
$ git clone https://github.com/anshumanv/toshokan
$ cd toshokan
$ pip3 install -r requirements.txt
```

### Setup database

##### Setup database schema
```sh
$ sqlite3 toshokan.db < toshokan-schema.sql
```

##### Feed initial data
```sh
$ sqlite3 toshokan.db < initial-data.sql
```

### Start the server
```sh
$ python3 run_app.py
```
Visit - https://users-41f8e.firebaseapp.com/


### Usage
Click and hover mouse around the screen :grinning:.

### Demo
<img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/655234/tumblr_mj3mo3MGAf1r0dbsno1_500.0.gif" alt="pica-pica">

### Features
* Colours changing with time.
* Oscillating draw width.
* Save your pattern by simply right clicking over the canvas.

### Todo
* Add other overlap effects.
* Add a color palette (random colours could be annoying for some users).
* Add other brush effects in a button group.

### License
MIT © [Vaaibhavi Singh](https://github.com/VaaibhaviSingh)
