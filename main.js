noseX=0;
noseY=0;

rightWristX = 0;
leftWristX = 0;

dif=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(440,400);

    canvas = createCanvas(440,400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        dif= floor(leftWristX - rightWristX)
    }
}

function modelLoaded(){
    console.log("modelo cargado :3")
}

function draw(){
    background("969A967");
    
    document.getElementById("square_side").innerHTML = "El alto y ancho del cuadrado será: " + dif  + "px";

    fill("#FFD1DC")
    stroke("#E389B9");
    strokeWeight(4);
    square(noseX,noseY,dif);
}