//https://teachablemachine.withgoogle.com/models/iu0EVwYIx/
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iu0EVwYIx/model.json", modelLoaded);
}
function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotResult(error, results){
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        document.getElementById("guess_span").innerHTML=results[0].label;
        document.getElementById("accu_span").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
    }
}