function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#f5b5cc');
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}