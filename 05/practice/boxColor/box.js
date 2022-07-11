var blockOne = document.getElementById('red');
var blockTwo = document.getElementById('yellow');
var blockThree = document.getElementById('green');

// blockOne.addEventListener('mouseenter', e => {
//     blockOne.classList.add('red');
// });

// blockTwo.addEventListener('mouseenter', e => {
//     blockTwo.classList.add('yellow');
// });

// blockThree.addEventListener('mouseenter', e => {
//     blockThree.classList.add('green');
// });

function changeBlockBackgroundColor(block, colorClassName) {
    return () => {
        block.classList.add(colorClassName);
    }
}

blockOne.addEventListener('mouseenter', changeBlockBackgroundColor(blockOne, 'red'))
blockTwo.addEventListener('mouseenter', changeBlockBackgroundColor(blockTwo, 'yellow'))
blockThree.addEventListener('mouseenter', changeBlockBackgroundColor(blockThree, 'green'))