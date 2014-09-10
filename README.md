# Pop up overlay kata

##Introduction

Suppose you are dealing with a project that has a unique front page. Design team would like to to include a pop up that
overlays on top of the front page.

This pop up should appear in the middle of the page when clicking on the `<h1>` that reads *Front page*, it should
stand out from the rest of the content, i.e we want that anything behind the pop up appears in a darker shadow,
as in the example below.

Once the pop up is being displayed we'd like to offer three options to hide it:

1. Clicking anywhere outside the pop up box
2. Hitting `ESC` on your keyboard
3. Clicking on the closing link `X` on the top right of the pop up box

### Example

![pop-up-overlay-example](http://cuevae.github.io/code-katas-front-end-pop-up-overlay/readme-assets/Screenshot_11.png)

##Goal

Your goal is to write the necessary HTML, CSS and JavaScript in order to achieve the same effect as in the example,
including the two images and text that form part of the pop up content.

The pop up should appear when clicking on the `<h1>` that reads *Front page*.

The pop up should disappear when:

1. Clicking anywhere outside the pop up box
2. Hitting `ESC` on your keyboard
3. Clicking on the closing link `X` on the top right of the pop up box

##Start

0. Install composer.phar (if you don't already have it)
    - [*nix installation guide](https://getcomposer.org/doc/00-intro.md#installation-nix)
    - [Windows installation guide](https://getcomposer.org/doc/00-intro.md#installation-windows)

1. Fork the repository and install dependencies
    - `git clone https://github.com/cuevae/code-katas-front-end-pop-up-overlay.git`
    - `cd code-katas-front-end-pop-up-overlay; composer install`

2. Check you are good to go
    - open `index.html` in your browser and you should see the front page with the pop up on top of it
    - Now you can start making it work as expected

3. Once you've finished you can create a Pull Request and your solution will be part of the repository

###Working example

You can visit a working example [here](http://cuevae.github.io/code-katas-front-end-pop-up-overlay/)
