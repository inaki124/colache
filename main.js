var speechRecognition=window.webkitSpeechRecognition;
var content;
var recognition=new speechRecognition();

function start(){
    recognition.start(); 
}

recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content=='selfie'){
        speak();
    }
}

function speak(){
    var synth=window.speechSynthesis
    Webcam.attach(camera);
    speak_data='tomando tu selfie en 5 segundos';
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


setTimeout(function(){
    img_id="selfie1";
    take_snapshot();
    speak_data="Tomando la proxima selfie  en 10 segundos";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

},5000) 

setTimeout(function(){
    img_id="selfie2";
    take_snapshot();
    speak_data="Tomando la proxima selfie  en 10 segundos";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

},10000) 

setTimeout(function(){
    img_id="selfie3";
    take_snapshot();
    speak_data="Tomando la proxima selfie  en 10 segundos";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

},15000) 

}

camera=document.getElementById('camera');
Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=='selfie1'){
            document.getElementById('result1').innerHTML='<img id="selfie1" src="'+data_uri+'">';
        }

        if(img_id=='selfie2'){
            document.getElementById('result2').innerHTML='<img id="selfie2" src="'+data_uri+'">';
        }

        if(img_id=='selfie3'){
            document.getElementById('result3').innerHTML='<img id="selfie3" src="'+data_uri+'">';
        }
    })
}