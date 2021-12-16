noseX = 0;
noseY = 0;

function preload(){
    snowman = loadImage("https://i.postimg.cc/NM9RmStD/snowman-nose-template-printable-178481-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-20;
        console.log("nose x = " + noseX);
        console.log("nose y = "+ noseY);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video,0,0,400,400);
    image(snowman,noseX,noseY,70,50);
}

function take_snapshot(){
    save("snowmannose.png");
}

