function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log("PoseNet Is Initialized")
}

function gotPoses(results)

{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}