# Project 7 - Full Stack JavaScript Techdegree

### React Gallery App

An image gallery app built using the React library.

---

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1557551236/portfolio/react-gallery.png" width="899px">

## View project
1. Download this repo.
2. Navigate to the project directory in the command line/terminal.
3. Run 'npm install' (or view the required dependencies listed in the package.json file and install each manually).
4. Create an account with Flickr and apply for a non-commercial API key.
5. Create a config.js file in the project's src folder.
6. In the config file add:
```javascript
const apiKey = 'YOUR API KEY';
export default apiKey;
```
7. Run 'npm start' to view the project in your browser at:  localhost:3000

<!-- :mag: Live version available at [nickhericks.github.io/techdegree-project-6/](https://nickhericks.github.io/techdegree-project-6/) -->

## Project objective

In this project, JSX is used to write markup-like syntax directly in the JS files and managing state in a container component that passes data down to reusable stateless components. Additionally, supportive tools are used in this React project like the Create React App and React Router modules.

## Techniques and concepts

- create-react-app
- JSX
- React Router
- Fetch API
- Flickr API

## Additional features

In addition to completing the basic requirements for this techdegree project, I also added additional features including:

- [x] Displaying a loading indicator each time the app fetches new data.
- [x] Displaying a friendly user message when no matches are found by search
- [x] Display a 404 error component when a URL does not match an existing route
- [x] Personalized CSS stylings

## Code example

From the Search.js component, this function is executed when the form (search box) is submitted.

```javascript
// When form is submitted
handleSubmit = (e) => {
	e.preventDefault();
	let searchQuery = this.search.value;
	// Pass search query to performSearch function in App.js
	this.props.newSearch(searchQuery);
	e.currentTarget.reset();
	let path = `/search/${searchQuery}`;
	// Push new entry onto history stack (list of previously visited URLs)
	// which allows us to programmatically change the URL
	this.props.history.push(path);
};
```

## Acknowledgements

This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
