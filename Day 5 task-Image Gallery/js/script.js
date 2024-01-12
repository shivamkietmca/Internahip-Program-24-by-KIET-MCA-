let currentImageIndex = 1;

function changeImage(n) {
  showImage(currentImageIndex += n);
}

function showImage(index) {
  const images = ['Image/img (1).jpg',
                  'Image/img (2).jpg',
                  'Image/img (3).jpg',
                  'Image/img (4).jpg',
                  'Image/img (5).jpg',
                  'Image/img (6).jpg',
                  'Image/img (7).jpg',
                  'Image/img (8).jpg',
                  'Image/img (9).jpg']; 
  const imgElement = document.getElementById('carouselImg');

  if (index > images.length) {
    currentImageIndex = 1;
  } else if (index < 1) {
    currentImageIndex = images.length;
  } else {
    currentImageIndex = index;
  }

  imgElement.src = images[currentImageIndex - 1];
}

// Initial display
showImage(currentImageIndex);
