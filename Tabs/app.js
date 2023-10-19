 const tabs =  document.querySelector('.tabs');
const btns = document.querySelectorAll('button');
const contents =  document.querySelectorAll('.content');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');

tabs.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    if(id){
        btns.forEach( function(btn){
            btn.classList.remove('live');
        });
        e.target.classList.add('live');
        contents.forEach(function(content){
            content.classList.remove('live');
        });
        const element = document.getElementById(id);
        element.classList.add('live');
    }
});

const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');

const imageElements = [img1, img2, img3];

function showImage(imageIndex) {
    imageElements.forEach((img, index) => {
        if (index === imageIndex) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showImage(index);
    });
});

