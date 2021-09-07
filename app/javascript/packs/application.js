// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


import {navbarBurger} from '../components/navbar';
import {navBarOpacity} from '../components/navbar';
import {debounce} from '../components/navbar';
import {stickyHeaderToggle} from '../components/navbar';





document.addEventListener('turbolinks:load', () => {

    /* Navbar Responsiveness Animation */
  const burger = document.querySelector('.burger');
  burger.addEventListener( 'click' , () => {
    navbarBurger()});

  /* Navbar Opacity Animation */
  window.addEventListener('scroll', debounce(navBarOpacity));
/* 
  const current = document.querySelector('#current');
  const imgs = document.querySelectorAll('.grid-images');


  imgs.forEach(img => img.addEventListener('click', () => current.style.backgroundImage = img.style.backgroundImage))
 */

  const lightboxBG = document.createElement('div');
  lightboxBG.id = "lightboxBG"
  document.body.appendChild(lightboxBG);

  const images = document.querySelectorAll(".")


  /* Video Player */
  const videos = document.querySelectorAll(".video");
  videos.forEach((video)=> {
    video.addEventListener("mouseover", function() {
      this.play();
    });
    video.addEventListener("mouseleave", function() {
      this.pause();
    });
  })
});// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
