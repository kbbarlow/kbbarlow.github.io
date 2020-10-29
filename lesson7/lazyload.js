const images = document.querySelectorAll("[data-src]")

const imgOptions = {
  threshold: 0.5
};
const loadImages =(image) =>{
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload =() => {
    image.removeAttribute('date-src');
  };
};
if('IntersectionObserver' in window){
  const imgObserver = new IntersectionObserver((items, imgObserver)=>
  {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);
  
  imagesToLoad.forEach((img) =>{
    imgObserver.observe(img);
  });

 } else {
    imagesToLoad.forEach((img) =>{
      loadImages(img);
    });
  }

/*
function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.src = src;
}
const imgObserver = new IntersectionObserver((enteries, imgObserver) => {
enteries.forEach(enter => {
  if(!IntersectionObserverEntry.isIntersecting){
    return;
  }else{
preloadImage(entry.target);
imgObserver.unobserve(entry.target);
  }

  }
})
},imgOptions)

images.forEach(image => {
imgObserver.observe(image);
})*/