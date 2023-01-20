let generateImage =src => { 
  let img = document.createElement(`img`);
  img.src = src;
  img.alt = "Image cannot be loaded";
  img.style.width = "300px";
  img.style.height = "150px";
  img.style.objectFit = "cover";
  return img;
}

export default generateImage;
