var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){

    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    
    if(Content == "selfie")
    {
        console.log("taking your selfie");
        speak();

    }
    
}


function speak(){

    var synth = window.speechSynthesis;

    speak_data ="Taking your Selfie" ;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie1";
       take_snapshot();
       speak_data = "Taking your next selfie in 5 seconds";
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);
       Save1();

    },5000 );
    setTimeout(function()
    {
        img_id = "selfie2";
       take_snapshot();
       speak_data = "Taking your next selfie in 10 seconds";
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);
       Save2();

    },10000 );

    setTimeout(function()
    {
        img_id = "selfie3";
       take_snapshot();
       speak_data = "Taking your next selfie in 15 seconds";
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);
       Save3();

    },15000 );
}

Webcam.set({

width:360,
height:250,
image_format:'png',
png_quality:90


});
camera =document.getElementById("camera");

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_url){

       if(img_id == "selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_url+'" />';
       }
       if(img_id == "selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_url+'" />';
       }
       if(img_id == "selfie3"){
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_url+'" />';
       }

    });


}
function Save1(){

link =document.getElementById("link");
image =  document.getElementById("selfie1").src;
link.href = image;
link.click();


}
function Save2(){

    link =document.getElementById("link");
    image =  document.getElementById("selfie2").src;
    link.href = image;
    link.click();
    
    
    }
    function Save3(){

        link =document.getElementById("link");
        image =  document.getElementById("selfie3").src;
        link.href = image;
        link.click();
        
        
        }