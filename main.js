music=""
music2=""
score=""
function preload(){
    song=loadSound("music.mp3")
    song=loadSound("music2.mp3")
}
function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet= ml5.poseNet(video, modelloaded)
   poseNet.on('pose', gotPoses)
}
function draw(){
    image(video,0,0,600,500)
    fill('#FF0000')
    stroke('#FF0000')
    music.isPlaying()
    music2.isPlaying()
    music.stop()
    music2.stop()
}
function modelloaded(){
    console.log("poseNet model has been started")
    
}
function gotPoses(results){
 if(results.length>0){
leftWristx= results[0].pose.leftWrist.x
leftWristy= results[0].pose.leftWrist.y
console.log("leftWristx="+leftWristx+"leftWristy"+leftWristy)
rightWristx= results[0].pose.rightWrist.x
rightWristy= results[0].pose.rightWrist.y
console.log("rightWristx"+rightWristx+"rightWristy"+rightWristy)
scoreleftWrist=results[0].pose.keypoints[9].score
console.log("scoreleftWrist"+scoreleftWrist)
scoreleftWrist=results[0].pose.keypoints[9].score
console.log("scoreleftWrist"+scoreleftWrist)
scorerightWrist=results[0].pose.keypoints[10].score
console.log("scorerightWrist"+scorerightWrist)
 } 
   
}