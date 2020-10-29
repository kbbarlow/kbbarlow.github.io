const imagesToLoad = document.querySelectorAll('img[data-src]'); 

const imgOptions = {
  threshold: 0,
  rootMargin: "0 0 50px 0"
};
const loadImages =(image) =>{
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload =() => {
    image.removeAttribute('date-src');
  };
};
if('IntersectionObserver' in window){
  const imgObserver = new IntersectionObserver((items, imgObserver)=>{
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  });
  
  imagesToLoad.forEach((img) =>{
    imgObserver.observe(img);
  });

 } else {
    imagesToLoad.forEach((img) =>{
      loadImages(img);
    });
  }