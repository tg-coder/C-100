var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event)
{
    console.log(event);
    var content = event.results [0] [0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie")
    {
        console.log("taking your selfie in 5 seconds");
        speak();
    }
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    speak_data = "taking your selfie in 5 seconds. get ready. BOOM!";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  function take_snapshot()
  {
      webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = '<img id="selfie" src="'+data_uri+'">';
      });
  }
  function save()
  {
      link = document.getElementById("link");
      image = document.getElementById("selfie").src;
      link.href = image;
      link.click();
  }