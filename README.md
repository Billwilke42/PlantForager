# Plant Forager

## Abstract

This project was completed for the Turing School of Software and Design and is my Module 3 Final Project. We were given some freedom to use an API of our choosing to create an App using React, Router, and Asynchrounous JavaScript. I settle on trefle.io as the API of choice, to make an App that is a "Field Guide" to those looking for edible plants. There were many challenges to this project. The API was tricky because it required Cross-Origin-Resource-Sharing('CORS') as well as other quirks such as sending plants that were desperately lacking in information, as well as pagination. I chose to implement Redux as well in this project because I wanted to get a better grasp on mocking fetch calls and redux integration testing. This proved to be extremely difficult, and there are many things I wish I knew earlier, like not implementing node-fetch like it called for in the documentation for the API. Overall I'm very happy with how it turned out, there was another feature I wanted to implement, where a user could see which plants had edible leaves, roots, flower, etc, but trying to mock the thunks took priority. I look forward to expanding on this project in the future.

## Contributors
- [Bill Wilke](https://github.com/Billwilke42)

## Deployed Site
https://plant-forager.netlify.app/

## Technologies Used
- React
- Redux
- Redux Thunk
- CSS
- Git
- JavaScript
- React Testing Library
- React Router
- Jest
- Eslint
-[trefle.io Api](trefle.io)

## Setup

1. Go to this repository and follow the directions in the README.md : https://github.com/BillWilke42/PlantForager

2. Clone down this repo

3. Get into the repo by running```cd PlantForager``` in your terminal

4. Then install the library dependencies. Run in your terminal:

```bash
npm install
```

5. Run `npm start` in your terminal. 

6. Go to `http://localhost:3000/` in your browser and you should see the page!

7. When ready to quit hit `ctrl + c` in your terminal to stop the server.


## GIF's

### Searching
![Searching](https://media.giphy.com/media/WQr4OdCnlGpc37ldtK/giphy.gif)
### Favoriting
![Favoriting](https://media.giphy.com/media/hqV0QQd6NAC46oizty/giphy.gif)
### Plant Page
![PlantPage](https://media.giphy.com/media/XbrhEOfyK6SRLTXwxW/giphy.gif)
