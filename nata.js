const image_array = [
    'amsterdam_20190924.jpeg',
    'amsterdam_20200428.jpeg',
    'bogotta_20240103.jpeg',
    'hongkong_20240410.jpeg',
    'hongkong_20240519.jpeg',
    'newyork_20210219.jpeg',
    'newyork_20220901.jpeg',
    'newyork_20230513.jpeg',
    'rotterdam_20220111.jpeg'
];

const random_index = Math.floor(Math.random() * image_array.length);
const selected_image = image_array[random_index];
document.getElementById("image_shower").src = `./nata/${selected_image}`;

