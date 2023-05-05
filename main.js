function preload() {

}

function setup() {
 
    canvas = createCanvas(540,480);
    canvas.position(850,170);
    canvas.background("aqua");
    video = createCapture(495,475);
    video.position(100,170);
    tm = ml5.poseNet(video,modelloaded);
    tm.on("pose",getresults);
}

function modelloaded() {
    console.log("The POSENET is initialised");
}

function draw() {
      
}

function getresults(results,error) {
    
    if (results)  {

        if (results.length > 0 ) {
            
            console.log(results);

        }

    }

    else {
        console.error(error);
    }



}