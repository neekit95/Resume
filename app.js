let buttonMain = document.getElementById('buttonMain');
let buttonAbout = document.getElementById('buttonAbout');
let buttonEducation = document.getElementById('buttonEducation');
let buttonExpirience = document.getElementById('buttonExpirience');
let buttonProjects = document.getElementById('buttonProjects');
let buttonRoll = document.getElementById('buttonRoll');
let sidebar =document.querySelector('.sidebar');
let buttons = document.querySelectorAll('button');
let buttonSound = document.getElementById('buttonSound');
let audio = new Audio('sounds/click.wav');
let audioSwipe = new Audio ('sounds/swipe.mp3');
let info = document.querySelector('.info');
let block1 = document.querySelector('.block1');
let blockEducation = document.querySelector('.blockEducation');
let blockExpirience = document.querySelector('.blockExpirience');
let blockProjects = document.querySelector('.blockProjects');

audio.load();
audioSwipe.load();
audio.volume = 0;
audioSwipe.volume = 0;


buttonAbout.addEventListener ('click', () => {
    activeButton (buttonAbout);
    audio.load();
    audio.currentTime = 0;
    audio.play();
    info.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
});
buttonAbout.addEventListener('mouseover' , () => {
    if(buttonAbout.style.backgroundColor !== 'chocolate') {
        buttonAbout.style.backgroundColor = 'rgba(31,31,31,0.925)';

    } 

}); 
buttonAbout.addEventListener('mouseout' , () => {
    if(buttonAbout.style.backgroundColor !== 'chocolate') {
        buttonAbout.style.backgroundColor = 'rgb(39, 36, 36)';
    } 
    
}); 




buttonEducation.addEventListener ('click', () => {
    activeButton (buttonEducation);
    audio.load();
    audio.currentTime = 0;
    audio.play();
    blockEducation.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
}); 
buttonEducation.addEventListener('mouseover' , () => {
    if(buttonEducation.style.backgroundColor !== 'chocolate') {
        buttonEducation.style.backgroundColor = 'rgba(31,31,31,0.925)';
        // buttonAbout.style.backgroundColor = 'white';
    }
}); 
buttonEducation.addEventListener('mouseout' , () => {
    if(buttonEducation.style.backgroundColor !== 'chocolate') {
        buttonEducation.style.backgroundColor = 'rgb(39, 36, 36)';
    } 
}); 



buttonExpirience.addEventListener ('click', () => {
    activeButton (buttonExpirience);
    audio.load();
    audio.currentTime = 0;
    audio.play(); 

    blockExpirience.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
    // setTimeout(audio.stop , 200);
});
buttonExpirience.addEventListener('mouseover' , () => {
    if(buttonExpirience.style.backgroundColor !== 'chocolate') {
        buttonExpirience.style.backgroundColor = 'rgba(31,31,31,0.925)';
        // buttonAbout.style.backgroundColor = 'white';
    }
}); 
buttonExpirience.addEventListener('mouseout' , () => {
    if(buttonExpirience.style.backgroundColor !== 'chocolate') {
        buttonExpirience.style.backgroundColor = 'rgb(39, 36, 36)';
    } 
}); 



buttonProjects.addEventListener ('click', () => {
    activeButton (buttonProjects);
    audio.load();
    audio.play();
    audio.currentTime = 0;
    blockProjects.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });

});
buttonProjects.addEventListener('mouseover' , () => {
    if(buttonProjects.style.backgroundColor !== 'chocolate') {
        buttonProjects.style.backgroundColor = 'rgba(31,31,31,0.925)';
    }
}); 
buttonProjects.addEventListener('mouseout' , () => {
    if(buttonProjects.style.backgroundColor !== 'chocolate') {
        buttonProjects.style.backgroundColor = 'rgb(39, 36, 36)';
    } 
}); 



buttonRoll.addEventListener ('click', () => {
    if(sidebar.style.width =='12%' || sidebar.style.width =='' ) {
        rollDown(); 
    } else if (sidebar.style.width =='6%') {
        rollUp(); 
    }
    audioSwipe.play();
    audioSwipe.currentTime = 0;
});

buttonSound.addEventListener('click', () => {

            if(audio.volume == 0.07 && sidebar.style.width == "12%") {
                audio.volume = 0;
                audioSwipe.volume = 0;
                buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOf.png" alt=""> Вкл звук';
            }  else if(audio.volume == 0.07 && sidebar.style.width == "") {
                audio.volume = 0;
                audioSwipe.volume = 0;
                buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOf.png" alt=""> Вкл звук';

    } else  if(audio.volume == 0.07 && sidebar.style.width == "6%") {
                audio.volume = 0;
                audioSwipe.volume = 0;

                buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOf.png" alt="">';
    }else  if(audio.volume == 0.07 && sidebar.style.width == "") {
        audio.volume = 0;
        audioSwipe.volume = 0;

        buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOf.png" alt="">';

    } else  if(audio.volume == 0 && sidebar.style.width == "12%") {
                audio.volume = 0.07;
                audioSwipe.volume = 0.07;

                buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOn.png" alt=""> Выкл звук';
            } else  if(audio.volume == 0 && sidebar.style.width == "") {
                audio.volume = 0.07;
                audioSwipe.volume = 0.07;
                buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOn.png" alt=""> Выкл звук';
    } else  if(audio.volume == 0 && sidebar.style.width == "6%") {
                audio.volume = 0.07;
                audioSwipe.volume = 0.07;
                buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOn.png" alt="">';
    } else  if(audio.volume == 0 && sidebar.style.width == "") {
        audio.volume = 0.07;
        audioSwipe.volume = 0.07;
        buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOn.png" alt="">';
} 


});


function rollDown () {
    sidebar.style.width = '6%';
    sidebar.style.minWidth = '60px';

    buttonAbout.innerHTML = '<img class="imgButton" src="images/me.png" alt="">';
    buttonEducation.innerHTML = '<img class="imgButton" src="images/education.png" alt="">';
    buttonExpirience.innerHTML = '<img class="imgButton" src="images/work2.png" alt="">';
    buttonProjects.innerHTML = '<img class="imgButton" src="images/project.png" alt="">';
    buttonRoll.innerHTML = '<img class="imgButton2" src="images/razvernut.png" alt="">';


    if(audio.volume == 0) {
        buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOf.png" alt="">';
    } else if(audio.volume ==0.07) {
        buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOn.png" alt="">';

    }


    buttonAbout.style.justifyContent = 'center';
    buttonAbout.style.paddingRight = '0px';
    buttonAbout.style.paddingLeft = '0px';


    buttonEducation.style.justifyContent = 'center';
    buttonEducation.style.paddingRight = '0px';
    buttonEducation.style.paddingLeft = '0px';


    buttonExpirience.style.justifyContent = 'center';
    buttonExpirience.style.paddingRight = '0px';
    buttonExpirience.style.paddingLeft = '0px';


    buttonProjects.style.justifyContent = 'center';
    buttonProjects.style.paddingRight = '0px';
    buttonProjects.style.paddingLeft = '0px';


    buttonRoll.style.justifyContent = 'center';
    buttonRoll.style.paddingRight = '0px';
    buttonRoll.style.paddingLeft = '0px';
    buttonRoll.style.marginLeft = '0px';
    buttonRoll.style.marginRight = '0px';


    buttonSound.style.justifyContent = 'center';
    buttonSound.style.paddingLeft = '0px';
    buttonSound.style.paddingRight = '0px';

    // document.querySelectorAll('.imgButton').style.marginLeft = '0px';
    // document.querySelectorAll('.imgButton').style.marginRight = '0px';
    // document.querySelectorAll('.imgButton').style.paddingRight = '0px';
    // document.querySelectorAll('.imgButton').style.paddingLeft = '0px';


    // document.querySelectorAll('.imgButton2').style.marginRight = '0px';
    // document.querySelectorAll('.imgButton2').style.marginLeft = '0px';
    // document.querySelectorAll('.imgButton2').style.paddingRight = '0px';
    // document.querySelectorAll('.imgButton2').style.paddingLeft = '0px';

}

function rollUp () {
    sidebar.style.width = '12%';
    sidebar.style.minWidth = '180px';

    buttonAbout.style.justifyContent = '';
    buttonAbout.style.paddingRight = '';
    buttonAbout.style.paddingLeft = '';


    buttonEducation.style.justifyContent = '';
    buttonEducation.style.paddingRight = '';
    buttonEducation.style.paddingLeft = '';


    buttonExpirience.style.justifyContent = '';
    buttonExpirience.style.paddingRight = '';
    buttonExpirience.style.paddingLeft = '';


    buttonProjects.style.justifyContent = '';
    buttonProjects.style.paddingRight = '';
    buttonProjects.style.paddingLeft = '';


    buttonRoll.style.justifyContent = '';
    buttonRoll.style.paddingRight = '';
    buttonRoll.style.paddingLeft = '';
    
    buttonSound.style.justifyContent = '';
    buttonSound.style.paddingRight = '';
    buttonSound.style.paddingLeft = '';

    if(audio.volume == 0) {
        buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOf.png" alt=""> Вкл звук';
    } else if(audio.volume ==0.07) {
        buttonSound.innerHTML = '<img class="imgButton2" src="images/soundOn.png" alt=""> Выкл звук';

    }


    buttonAbout.innerHTML = '<img class="imgButton" src="images/me.png" alt=""> Обо мне ';
    buttonEducation.innerHTML = '<img class="imgButton" src="images/education.png" alt=""> Образование';
    buttonExpirience.innerHTML = '<img class="imgButton" src="images/work2.png" alt=""> Опыт работы ';
    buttonProjects.innerHTML = '<img class="imgButton" src="images/project.png" alt=""> Проекты ';
    buttonRoll.innerHTML = '<img class="imgButton2" src="images/svernut.png" alt=""> Свернуть ';



    // document.querySelector('.imgButton').style.marginLeft = '10%';
    // document.querySelector('.imgButton').style.marginRight = '5%';


    // document.querySelector('.imgButton2').style.marginRight = '5%';
    // document.querySelector('.imgButton2').style.marginLeft = '10%';

}

function activeButton (x) {
    bgButtons ();
    x.style.transition = '0.2s';
    x.style.background = "chocolate";
}

function bgButtons () {
    // buttonSound.style.background = 'rgb(39,36,36)';
    buttonAbout.style.background = 'rgb(39,36,36)';
    buttonEducation.style.background = 'rgb(39,36,36)';
    buttonExpirience.style.background = 'rgb(39,36,36)';
    buttonProjects.style.background = 'rgb(39,36,36)';
}




