# "Aloha Apparel Co." Home Page

#### Author: Jarid Warren [ <jaridwarren@gmail.com> ]

Home page for an apparel company, complete with swipable product carousel, fixed header, functional "Add to cart" buttons and a responsive design.

### Desktop & Mobile View Demo

<img src="./assets/images/readme-images/demo.gif" width="610"><img src="./assets/images/readme-images/mobile-demo.gif" width="250">

## Motivation

Learning CSS3 flexbox, jQuery, smooth scrolling with JavaScript, and @font-face.

## Technology

- <img src="./assets/images/readme-images/js.svg" width="15"> JavaScript ES6 / <img src="./assets/images/readme-images/jquery.svg" width="40"> jQuery
- <img src="./assets/images/readme-images/npm.svg" width="20"> NPM / <img src="./assets/images/readme-images/webpack.svg" width="15"> Webpack / <img src="./assets/images/readme-images/babel.svg" width="30"> Babel
- <img src="./assets/images/readme-images/sass.svg" width="20"> Sass / <img src="./assets/images/readme-images/css3.svg" width="12"> CSS3
- <img src="./assets/images/readme-images/html5.svg" width="12"> HTML5

## Code Sample

The following adds a shadow to the header once the user has scrolled from the top of the page.

```javascript
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
      $('header').css({ 'box-shadow': 'none' });
    } else {
      $('header').css({ 'box-shadow': '1.5px 3.5px 4px 0 #CCCCCCCC' });
    }
  });
});
```

## Setup

Download or clone repo, then run the following commands in terminal:

**Initialize NPM:**

`> npm init`

**Install Webpack:**

`> npm install`

**Build project:**

`> webpack`

**Build project for production (compression):**

`> webpack -p`

**Launch dev server to automatically update changes:**

`> webpack-dev-server`

## @TODO

- [compress images used in](https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d) `index.html`(currently only `style.css` images are compressed)
- change main layout to use CSS grid (columns for sections)
