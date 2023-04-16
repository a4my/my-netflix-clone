<img style="margin-left: 50%" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" height="100" alt="" />

<hr>

This is my version of the famous video on demand platform. Written in Javascript and uses React as a framework. This app utilises Firebase to authorise users serverside, additionally users can login to the app through their registered Google account. The TMDb api was used to gather movies/series data (most popular, top rated, new series, etc).

View a live version of the app using the link below: [LIVE ](https://my-netflix-clone-3ll6.vercel.app/)

<hr>

![site image](https://i.imgur.com/xaZ8L6P.jpg)

<hr>

### Features

- Progressive Web App (PWA)
- Fully responsive and mobile friendly
- State management using Context API
- User authentication + sign in with Google
- User can view movie/series info and trailer if available
- User can search for movies/series

<hr>

### Run Locally

- Clone the project

- Install dependencies

```
  npm install
```

- Create a **.env** file inside project directory with fields given below.

```
  # TMDB API
  REACT_APP_API_KEY=  

  #FIREBASE
  REACT_APP_FIREBASE_API_KEY=
  REACT_APP_FIREBASE_AUTHDOMAIN=
  REACT_APP_FIREBASE_DATABASEURL=
  REACT_APP_FIREBASE_PROJECTID=
  REACT_APP_FIREBASE_STORAGEBUCKET=
  REACT_APP_FIREBASE_MESSAGINGSENDERID=
  REACT_APP_FIREBASE_APPID=
  REACT_APP_FIREBASE_MEASUREMENTID=

  GENERATE_SOURCEMAP=false
```

- Start the server

```
  npm run start
```
