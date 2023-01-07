leftX=0;
rightX=0;
diff=0;
texts="";

function setFont(){
    texts=document.getElementById("input").value;
}

function setup() 
{
  video = createCapture(VIDEO);
  video.size(500, 500);

  canvas=createCanvas(700,550)
  canvas.position(560,150)

  poseNet=ml5.poseNet(video,modelLoaded)
  poseNet.on('pose',gotPoses)
}
function draw(){
    background('#220099');

    fill('#FF7F50');
    setFont();
    textSize(diff);
    text(texts,0,550);
    document.getElementById('font').innerHTML='Font size is '+diff+'px'
}
function modelLoaded(){
    console.log(modelLoaded)
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftX=results[0].pose.leftWrist.x;
        rightX=results[0].pose.rightWrist.x;
        
        diff=floor(leftX-rightX);
    }
}

