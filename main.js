bensound1 = ""
bensound2 = ""
bensound3 = ""
beatles = ""
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
function preload(){
    bensound1 = loadSound("bensound-creativeminds.mp3")
bensound2 = loadSound("bensound-happyrock.mp3")
bensound3 = loadSound("bensound-hey.mp3")
beatles = loadSound("Let It Be (Remastered 2009).mp3")
}
function setup(){
canvas = createCanvas(600, 500)
canvas.center()
video = createCapture(VIDEO)
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotResult)
}
function modelLoaded(){
    console.log("Model has been loaded.")
}
function gotResult(results){
    if(results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("Left Wrist X: " + leftWristX + " | Left Wrist Y: " + leftWristY)
        rightWristX = results[0].pose.rightWrist.x 
    rightWristY = results[0].pose.rightWrist.y
console.log("Right Wrist X: " + rightWristX + " | Right Wrist Y: " + rightWristY)
    }
}
function draw(){
image(video, 0, 0, 600, 500)
}