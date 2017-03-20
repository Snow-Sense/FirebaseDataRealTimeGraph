window.onload = initialize;

function initialize(){
  showGraphWithFirebaseData();
}

function showGraphWithFirebaseData(){
refSensorData = firebase.database().ref().child("graphData");
//refSensorData = firebase.database().ref().child("March13Snow");

refSensorData.on("value", function(snapshot){
  var dataReceivedFromFirebase = snapshot.val();
  var dataDrawn = [];

for (var key in dataReceivedFromFirebase){
dataDrawn.push({Xvalue: dataReceivedFromFirebase[key].timestamp, Yvalue: dataReceivedFromFirebase[key].Height});
}

document.getElementById("mainPlot").innerHTML = "";


  drawDataPlot(dataDrawn);

});
}
