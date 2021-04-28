// const h1 = document.querySelector('h1');
// h1.addEventListener('click', () => {
//     h1.style.color = 'red';
//     console.log(h1);

// })

$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('background-color', '#ff0000')
    })
})