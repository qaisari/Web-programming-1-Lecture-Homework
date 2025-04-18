//geolocation
var x = document.getElementById("demo");
function getLocation(){
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(showPosition);
    else
        x.innerHTML = "Geolocation is not supported by this browser.";
}
function showPosition(position){
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    var newContent = '<iframe src="https://maps.google.com/maps?q=' + position.coords.latitude + ',' + position.coords.longitude + '&hl=es;z=14&amp;output=embed" width="300" height="250"></iframe>';
    var contentHolder = document.getElementById('content-holder');
    contentHolder.innerHTML = newContent;
}
//Web Storage 
//Section Storage
const sessionElement = document.getElementById("session");
if(sessionStorage.hits)
    sessionStorage.hits = Number(sessionStorage.hits) + 1;
else
    sessionStorage.hits = 1;
sessionElement.innerHTML = `Total hits: ${sessionStorage.hits}`;
//Local Storage
const localElement = document.getElementById("local");
if(localStorage.hits)
    localStorage.hits = Number(localStorage.hits) + 1;
else
    localStorage.hits = 1;
localElement.innerHTML = `Total hits: ${localStorage.hits}`;
//Web Worker
//Without
function withoutBigLoop(){
    for(var i = 0; i <= 10000000000; i++)
        var j = i;
    alert("Compleated " + j + " iterations");
}
function withoutSayHello(){
    alert("Hello sir...");
}
//With
function withBigLoop(){
    if(typeof(Worker) !== "undefined"){
        var worker = new Worker("worker.js");
        worker.onmessage = function (event) {
            alert("Compleated " + event.data + " iterations");
        }
    }else {
        alert("Sorry, your browser doesn't support Web Workers...");
    }
}
function withSayHello(){
    alert("Hello....");
}
//SSE
function serverSentEvent(){
    if(typeof(EventSource) !== "undefined"){
        var source = new EventSource('../sse.php');
        source.onmessage = function (event){
            document.getElementById("sse-result").innerHTML += event.data + "<br>";
        }
    } else {
        document.getElementById("sse-result").innerHTML = "Sorry, your browser doesn't support Server-Sent Events";
    }
}
//Drag and Drop
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
//canvas
function drawShape(){
    var canvas = document.getElementById('mycanvas');
    if(canvas.getContext){
        var context = canvas.getContext('2d');//use getContext to use the canvas for drawing
        context.fillRect(25,25,100,100);
        context.clearRect(45,45,60,60);
        context.strokeRect(50,50,50,50);
    }else{
        alert("Your browser doesn\'t support Canvas");
    }
}