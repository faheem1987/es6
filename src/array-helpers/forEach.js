const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

const areas = []; 

function getArea() {
  images.forEach((image) => {
    areas.push(image.height * image.width);
  });
};