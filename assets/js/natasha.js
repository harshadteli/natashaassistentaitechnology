let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=2
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0&&hours<12 ){
        speak("Good Moring Sir")
    }
    else if(hours==12&&hours<16){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening sir")
    }
}
// function harshu(){
//     speak("Now to Introduced Myself I am Natasha A Virtual Artificial Intelligence and I am Assitent You with relative task With Best performance with fully operated system with version 2.043")
// }
 window.addEventListener('load',()=>{
    wishme()
     // harshu()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase());
    console.log(event)
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
})
function takeCommand(message){
    btn.style.display="flex";
    voice.style.display="none";
    if (message.includes("Hello") || message.includes("hey")){
        speak("hello sir,what can I help you?")
    }
    else if(message.includes("Who are you?")){
     speak("I am Natasha which is application of Artificial Intelligence for Created by Harshad sir")
      }
    else if(message.includes("Do you have feelings?")){
    let t1=("Yes,but depending upon the my instuctions and Programming formats");
    speak(t1);
    }
    else if(message.includes("i love you")){
        speak("So qute,Really.. ");
    }
   else if(message.includes("Do you Love me?")){
        speak("Yes,I Love you.");
    }
    else if(message.includes("Natasha,I am Sad ")){
        speak("Ok,Don't Worry I am  playing some Songs for you");
         window.open("songs.com","_blank");//
    }
    else if(message.includes("Do you Likes the Playing the Games")){
    speak("Yes,Playing the Games on the Playgrounds is  good for Health");
    }
    else if(message.includes("Do you Like  Eating ")){
    speak("No way..");
    }
    else if(message.includes("Open Youtube")){
     speak("Ok Sir,Opening Youtube");
        window.open("https://youtube.com/","_blank");
    }
    else if(message.includes("Open Instagram")){
        speak("Ok Sir,Opening Instagram");
        window.open("https://instagram.com/","_blank");
    }
    else if(message.includes("Open Google")){
        speak("Ok Sir,Opening Google");
        window.open("https://google.co.in/","_blank");
    }
    else if(message.includes("Open Whatsapp")){
        speak("Ok Sir,Opening Google");
        window.open("https://bing.com/ck/a?!&&p=ee6c770ba949745843ab41c06858735607ac8ef6597c944dbad0df0df1491890JmltdHM9MTczNTk0ODgwMA&ptn=3&ver=2&hsh=4&fclid=14b801ba-0f7c-6038-181b-15220ece6181&psq=whatsapp&u=a1aHR0cHM6Ly93ZWIud2hhdHNhcHAuY29tLw&ntb=1","_blank");
    }
    else if(message.includes("open the New College Website")){
     speak("Ok Sir,Opening The  New College Website");
     window.open("https://newcollege.ac.in/","_blank","_blank");
    }
    else if(message.includes("Open the Shivaji University  Website")){
     speak("Ok Sir,Opening the Shivaji University Website");   window.open("https://bing.com/ck/a?!&&p=e3c1c9a2426fef94b483926153d15066dbbd6eccaa242cc15bd76aca3a9c9d6eJmltdHM9MTczNTk0ODgwMA&ptn=3&ver=2&hsh=4&fclid=14b801ba-0f7c-6038-181b-15220ece6181&psq=Shivaji+University&u=a1aHR0cHM6Ly93d3cudW5pc2hpdmFqaS5hYy5pbi8&ntb=1","_blank");
    }
   else if(message.includes("open Facebook")){
        speak("Ok Sir,Opening Facebook");
     window.open("https://newcollege.ac.in/","_blank");//
 }
    else if(message.includes("open Wikipedia")){
     speak("Ok Sir,Opening Wikipedia");
     window.open("https://newcollege.ac.in/","_blank");//
    }
    else if(message.includes("open Harshad's Websites")){
     speak("Ok Sir,Opening Harshad's Websites");
     window.open("https://newcollege.ac.in/","_blank");//
 }

    else if(message.includes("open Calculator")){
     speak("Ok Sir,Opening Calculator");
        window.open("Calculator://");
    }
   else if(message.includes("Natasha,What's Time Now")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
     speak(time);
 }
    else if(message.includes("Natasha,What's Date Today")){
        let date=new Date().toLocaleString(undefined,{Day:"numeric",month:"short"});
     speak(date);
 }
else {
let finalText="Yes Sir,This is What I found on internet regarding" + message.replace("Natasha"," ") || message.replace("Natsha"," ");
speak(finalText);
window.open(`https://www.google.com/search?q=${message.replace("Natasha"," ")}`,"_blank"); 
}
}

const popupContainer = document.getElementById('popup-container');
const closeBtn = document.getElementById('close-btn');
const typingEffect = document.getElementById('typing-effect');

const commands = [
    'Try Basic Commands',
    'say to "Hello" or "hey"',
    'Who are you?',
    'Open youtube,instagram,whatsapp,Google',
    'Open The New college Website',
    'Open Calculator',
    'Search anything what you want',
    'Try other commands to download',
];

function typeCommand(index) {
    if (index < commands.length) {
        const command = commands[index];
        let i = 0;
        const interval = setInterval(() => {
            if (i < command.length) {
                typingEffect.innerHTML += command[i];
                i++;
            } else {
                clearInterval(interval);
                typingEffect.innerHTML += '\n';
                typeCommand(index + 1);
            }
        }, 50);
    }
}

setTimeout(() => {
    popupContainer.style.display = 'flex';
    typeCommand(0);
}, 2000);

closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});
