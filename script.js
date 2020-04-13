setInterval(() => {
    // title glitchy effect
    let title = [
        "CPU&nbsp;Si&nbsp;ula&nbsp;&nbsp;r",
        "&nbsp;PU&nbsp;Simu&nbsp;a&nbsp;or",
        "CPU&nbsp;Si&nbsp;ulat&nbsp;&nbsp;",
        "CPU&nbsp;Si&nbsp;ula&nbsp;o&nbsp;",
        "CPU&nbsp;Simulator",
        "&nbsp;PU&nbsp;&nbsp;imul&nbsp;tor",
        "CP&nbsp;&nbsp;Simula&nbsp;&nbsp;r",
        "C&nbsp;U&nbsp;&nbsp;imul&nbsp;tor",
        "CPU&nbsp;Simulator",
        "CPU&nbsp;Simulator",
        "CPU&nbsp;Simluator",
        "C&nbsp;U&nbsp;S&nbsp;mula&nbsp;or"
    ];

    // random title to make random glitchiness
    $("#title").html(title[Math.floor(Math.random() * 10)]);
},100);

// play button is actualy to play background music and surpassing the "autoplay" rule
$("#play").on("click",() => {
    var currPlay = false;
    var randAudio = 1;
    var prevAudio = 0;

    // forever
    setInterval(() => {

        // if no song is currently playing,
        if(!currPlay) {
            // pick a song different from the previous song
            do {
                // do while is used to ensure that a random number is picked at least once as this line is run first
                randAudio = Math.floor(Math.random() * 5);
            // make sure that no song is picked twice
            } while (randAudio == prevAudio);

            // set previous song to current song
            prevAudio = randAudio;
            // play audio
            $("#bgmusic")[0].children[randAudio].play();
            // set currently playing to true
            currPlay = true;
        }

        // if song has ended and it was playing
        if (currPlay && $("#bgmusic")[0].children[randAudio].ended) {
            // reset the time
            $("#bgmusic")[0].children[randAudio].currentTime = 0;
            // set playing to false
            currPlay = false;
        }
    },1000);

    $("#mainPage").css("display","none");
    $(".loader").css("display","block");

    // delete loader after and show game
    setTimeout(() => {
        $(".loader").css("display","none");
        $("#game").css("display","block")
        game();
    },1000)
});

$("#toggleMute").on("click",(event) => {
    if ($("#toggleMute").text() == "Music: Unmuted") {
        $("#toggleMute").text("Music: Muted");

        $("#bgmusic").children()[0].muted = true;
        $("#bgmusic").children()[1].muted = true;
        $("#bgmusic").children()[2].muted = true;
        $("#bgmusic").children()[3].muted = true;
        $("#bgmusic").children()[4].muted = true;
    } else {
        $("#toggleMute").text("Music: Unmuted");

        $("#bgmusic").children()[0].muted = !true;
        $("#bgmusic").children()[1].muted = !true;
        $("#bgmusic").children()[2].muted = !true;
        $("#bgmusic").children()[3].muted = !true;
        $("#bgmusic").children()[4].muted = !true;
    }
});

function game() {
    // variables
    let todo = [];
    let tasks = [
        "strt", // startup computer
        "clik", // click
        "stor", // store to ram
        "addn", // add nums
        "subn", // subtract nums
        "divn", // divide nums
        "muln", // multiply nums
        "keyp", // keypress
        "load", // load from ram
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];
    // pick random task


    // make to-do functional
    
    // $("#todo").text((txt) => {
	// });
}
//                           [ChezCpder]
// >< [elevatr of the cursor |]

/* 
OUT MOTTO:
 * EAT EAET EAT
 * eAT MoRE FOoD
 * FooD MORE eAt
 * REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
 * repls probably tinkering with chat, they prob fix lemme reload to see if chat comes back
*/
/*  ok. didn't come back for me DX
O.o that)s awesome bg.

did u split screen that and repl?
*/


// - The Spectre
// - Tetris
// - Speaking Moistly
// - Fig Leaf Times Two
// - Marry Go Around

// it ni wrk for me but that's probably because
// get
// t

// ?????????
// ????????? ur cursor keep teleporting XD












