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
import {gallery} from '../components/media-gallery';
import {videoPlayer} from '../components/video';





document.addEventListener('turbolinks:load', () => {

    /* Navbar Responsiveness Animation */
  const burger = document.querySelector('.burger');
  burger.addEventListener( 'click' , () => {
    navbarBurger()});

  /* Navbar Opacity Animation */
  window.addEventListener('scroll', debounce(navBarOpacity));


 /* gallery */
  const images = document.querySelectorAll(".preview-image");

  images.forEach(image =>{
    image.addEventListener('click', e => {
      gallery(image);
    })
  })



  /* Video Player */
  const videos = document.querySelectorAll(".video");
  videos.forEach((video)=> {
    videoPlayer(video);
  })
});