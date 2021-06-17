//menu
const menu = document.querySelector('#menu');
const overlay = document.querySelector('#overlay');
const mobileMenu = document.querySelector('.mobile-menu');

//bookmark
const bookmark = document.querySelector('.bookmarkbtn');
const bookmarkPic = document.querySelector('.pic');
const btnBookmark = document.querySelector('.btnbookmark');
const bookSvg = document.querySelector('.bookmarkSvg');
const mainBookmark = document.querySelector('.mainbookmark');

//modal
const modalBox = document.querySelector('.modalposition');
const button = document.querySelector('.containerradio');
const tinyBox = document.querySelectorAll('#tinybox');
const modalAppears = document.querySelector('.modalOverlay');
const closeBtn = document.querySelector('.closebtn');
const rewardBtn = document.querySelectorAll('.rewardbtn');
const body = document.querySelector('.body');
const checkBox = document.querySelectorAll('.checkBox');
const blue = document.querySelectorAll('.border-blue');
const box = document.querySelector('#tick');

//done modal
const doneBox = document.querySelector('.doneboxOverlay')
const continueBtn = document.querySelectorAll('.continuebtn');
const doneBtn = document.querySelector('.donebtn');


//menu
menu.addEventListener('click', () => {
    menu.classList.toggle('close');

    overlay.classList.toggle('show');
    mobileMenu.classList.toggle('fade');
});

overlay.addEventListener('click', () => {
        menu.classList.toggle('close');

        overlay.classList.toggle('show');
        mobileMenu.classList.toggle('fade');

    })
    //modal on clicking reward btn
for (let i = 0; i < rewardBtn.length; i++) {
    rewardBtn[i].addEventListener('click', () => {

        if (modalAppears.style.display = "none") {
            modalAppears.style.display = "block";
            modalBox.style.display = 'block';
            body.style.overflow = "hidden";
        } else {
            modalAppears.style.display = "none";
            modalBox.style.display = 'none';
        }
    });
}

//closing the modal and resetting the body overflow to scroll
closeBtn.addEventListener('click', () => {
    modalAppears.style.display = "none";
    modalBox.style.display = 'none';
    body.style.overflow = "scroll";
    for (let m = 0; m < tinyBox.length; m++) {
        tinyBox[m].classList.remove('tinyBoxAppears');
    }
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].checked = true;

    }


});
modalAppears.addEventListener('click', () => {
    modalAppears.style.display = "none";
    modalBox.style.display = 'none';
    body.style.overflow = "scroll";
})

//modal btns
for (let j = 0; j < checkBox.length; j++) {
    checkBox[j].addEventListener('click', () => {



        if (!checkBox[j].checked) {
            tinyBox[j].classList.add('tinyBoxAppears');
            blue[j].style.border = ' 1px solid hsl(176, 50%, 47%)';
        } else {
            tinyBox[j].classList.remove('tinyBoxAppears');
            blue[j].style.border = ' 1px solid rgba(0,0,0,0.1)';
        }
    });
}

//thankyou modal
for (let i = 0; i < continueBtn.length; i++) {

    continueBtn[i].addEventListener('click', () => {

        if (doneBox.style.display = "none") {
            doneBox.style.display = "block";
            modalAppears.style.display = "none";
            body.style.overflow = "hidden";
            modalBox.style.display = 'none';
        } else {
            doneBox.style.display = "none";
        }
    });


    //got it button
    doneBtn.addEventListener('click', () => {
        doneBox.style.display = "none";
        body.style.overflow = "scroll";
        for (let m = 0; m < tinyBox.length; m++) {
            tinyBox[m].classList.remove('tinyBoxAppears');
        }
        for (let i = 0; i < checkBox.length; i++) {
            checkBox[i].checked = true;

        }

    })
}
bookmark.addEventListener('click', () => {
    if (bookmark.innerHTML === "Bookmark") {

        bookmark.innerHTML = 'Bookmarked';
        bookmark.style.color = 'hsl(176,50%,47%)';
        bookmarkPic.style.fill = 'hsl(176,50%,47%)';
        bookSvg.style.fill = "white";

    } else {
        bookmark.innerHTML = 'Bookmark';
        bookmark.style.color = 'hsl(0, 0%, 48%)';
        bookmarkPic.style.fill = 'black';
        bookSvg.style.fill = 'hsl(0, 0%, 48%);'
    }



})
mainBookmark.addEventListener('click', () => {
    if (bookmark.innerHTML === "Bookmark") {

        bookmark.innerHTML = 'Bookmarked';
        bookmark.style.color = 'hsl(176,50%,47%)';
        bookmarkPic.style.fill = 'hsl(176,50%,47%)';
        bookSvg.style.fill = "white";

    } else {
        bookmark.innerHTML = 'Bookmark';
        bookmark.style.color = 'hsl(0, 0%, 48%)';
        bookmarkPic.style.fill = 'black';
        bookSvg.style.fill = 'hsl(0, 0%, 48%);'
    }



})

// modalAppears.addEventListener('click', () => {
//     modalAppears.style.display = "none";
// })