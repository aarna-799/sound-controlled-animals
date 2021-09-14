//https://teachablemachine.withgoogle.com/models/9dafRI3XH/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9dafRI3XH/model.json",modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error , results)
{