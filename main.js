song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("harrypotter.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function play()
{
    song1.play()
    song2.play()
}