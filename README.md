## Meme Generator

A starter React project that lets you generates your favorite funny memes!

#### Installation Dependencies

In your terminal install react by running ```npx create-react-app [name of your app]```.

Then navigate to the project directory and run ```yarn start``` which runs the app in the development mode. Your website will automatically be loaded for you to view in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

#### Meme Generator API

The meme generator [API](https://api.imgflip.com/) is a free open source API. It uses the ```$.json 'GET' method```. 

In React, I used the ```componentDidMount``` method which uses `fetch` to load data from a remote endpoint:

```javascript
componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
}
```