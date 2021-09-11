const gallery = (image) => {
  const lightboxBG = document.createElement('div');
  lightboxBG.addEventListener('click', () => {
    lightboxBG.classList.remove('active-lightbox')
  })
  
  lightboxBG.id = "lightboxBG"
  document.body.appendChild(lightboxBG);
  lightboxBG.classList.add("active-lightbox");
      const lightboxImg= document.createElement('img');
      lightboxImg.src = image.src;
      lightboxImg.id = "lightbox-image";
      while (lightboxBG.firstChild){
        lightboxBG.removeChild(lightboxBG.firstChild)
      }
      lightboxBG.appendChild(lightboxImg)
}

export{gallery};

