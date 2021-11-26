leftwristx="0";
leftwristy="0";
rightwristx="0";
rightwristy="0";
scorlef="0";
scorrig="0";
crazyoveryou=" ";
readyforlove=" ";
bpmage=" ";

function preload(){
    bpmage=loadImage("b.png");
    readyforlove=loadSound("bp_is_ready.mp3");
    crazyoveryou=loadSound("bp_is_crazy.mp3");
}

function setup(){
   canvas=createCanvas(600,400);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   posenet=ml5.poseNet(video,model_loaded);
   posenet.on("pose",bring);
}

function model_loaded(){
   console.log(" PoseNet is chalu ");
}

function bring(results){
    if (results.length > 0) {
        console.log(results);
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        scorlef=results[0].pose.keypoints[9].score;
        scorerig=results[0].pose.keypoints[10].score;
    }
}

function draw(){
    image(video,0,0,600,400);
    image(bpmage,rightwristx,rightwristy,20,20);
}