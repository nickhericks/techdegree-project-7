# Project 7 - Full Stack JavaScript Techdegree

### React Gallery App

An image gallery app built using the React library.

---

<!-- <img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1555084799/portfolio/expressPortfolio.png" width="899px"> -->

<!-- ## View project
1. Download this repo.
2. Navigate to the project directory in the command line/terminal.
3. Run 'npm install' (or view the required dependencies listed in the package.json file and install each manually).
3. Run 'npm start' to view the project in your browser at:  localhost:3000 -->

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

<!-- - [x] Updating package.json file to allow running 'npm start' to run the app
- [x] Create custom error message Pug template -->
- [x] Personalized CSS stylings

## Code example

<!-- This lesson was all about AJAX, so it seems fitting to show the fetch request used:

```javascript
// When a GET request is made that includes an id after /project
router.get('/:id', (req, res) => {
	// Access id from the route parameter and assign it a variable
	const id = req.params.id;

	// Create array of all project ids
	const allIds = projects.map( project => project.id);

	// Get index of id in allIds, otherwise return -1
	const index = allIds.indexOf(parseInt(id));

	// If index equals -1, project id does not exist
	if(index === -1) {
		// Redirect user to home page
		res.redirect('/');
	}
	// When index does not equal -1, project id does exist
	else {
		// Use id as index to get specific project data and assign to variable
		const project = projects[index];

		// Render project.pug template passing 'project' object as data
		res.render('project', project);
	}
});
``` -->

## Acknowledgements

This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


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
