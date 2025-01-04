
window.onload = function(){

    if(window.matchMedia("(min-width:2560px)").matches){

        document.getElementById("frontendShape").coords = "555,1063,956,1225";
        document.getElementById("graphicShape").coords = "2091,85,2371,455";
        document.getElementById("pythonShape").coords = "100,969,364,1107";
        document.getElementById("softSkillsShape").coords = "290,75,495,281";
        document.getElementById("CShape").coords = "1200,1047,1310,1247";
        document.getElementById("C++Shape").coords = "1665,1221,1855,1331";
        document.getElementById("C#Shape").coords = "1656,993,1855,1100";
        document.getElementById("arduinoShape").coords = "2157,1074,2425,1211";

    }

    if(window.matchMedia("(min-width:1920px)").matches && window.matchMedia("(max-width:2559px)").matches){
        
        document.getElementById("frontendShape").coords = "412,795,720,918";
        document.getElementById("graphicShape").coords = "1562,55,1783,344";
        document.getElementById("pythonShape").coords = "72,724,276,830";
        document.getElementById("softSkillsShape").coords = "217,52,371,211";
        document.getElementById("CShape").coords = "898,781,985,936";
        document.getElementById("C++Shape").coords = "1240,913,1395,1000";
        document.getElementById("C#Shape").coords = "1240,740,1395,830";
        document.getElementById("arduinoShape").coords = "1615,800,1822,912";

    }

    if(window.matchMedia("(min-width:1280px)").matches && window.matchMedia("(max-width:1919px)").matches){

        document.getElementById("frontendShape").coords = "275,530,476,611";
        document.getElementById("graphicShape").coords = "1044,37,1185,230";
        document.getElementById("pythonShape").coords = "50,484,182,555";
        document.getElementById("softSkillsShape").coords = "143,36,250,140";
        document.getElementById("CShape").coords = "600,522,660,626";
        document.getElementById("C++Shape").coords = "826,611,928,665";
        document.getElementById("C#Shape").coords = "828,500,928,550";
        document.getElementById("arduinoShape").coords = "1080,537,1211,606";

    }

    if(window.matchMedia("(min-width:800px)").matches && window.matchMedia("(max-width:1279px)").matches){

        document.getElementById("frontendShape").coords = "174,443,300,509";
        document.getElementById("graphicShape").coords = "653,33,742,191";
        document.getElementById("pythonShape").coords = "31,404,116,460";
        document.getElementById("softSkillsShape").coords = "90,31,158,117";
        document.getElementById("CShape").coords = "375,437,410,520";
        document.getElementById("C++Shape").coords = "518,508,580,554";
        document.getElementById("C#Shape").coords = "518,413,581,460";
        document.getElementById("arduinoShape").coords = "673,447,758,505";

    }

};

function resetFrontendPriority(){
    document.getElementById("frontendHeaderTab").style.backgroundColor = "#58416d";
    document.getElementById("frontendButton").style.backgroundColor = "#58416d";
    document.getElementById("HTML").style.display = "block";
    document.getElementById("frontendHTMLTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("HTMLButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("CSS").style.display = "block";
    document.getElementById("frontendCSSTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("CSSButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("JS").style.display = "block";
    document.getElementById("frontendJSTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("JSButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("frontendURLText").innerHTML = "https://github.com/VlaKarlo";
}

function makeHTMLPriority(){
    document.getElementById("frontendHeaderTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("frontendButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("HTML").style.display = "block";
    document.getElementById("frontendHTMLTab").style.backgroundColor = "#58416d";
    document.getElementById("HTMLButton").style.backgroundColor = "#58416d";
    document.getElementById("CSS").style.display = "none";
    document.getElementById("frontendCSSTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("CSSButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("JS").style.display = "none";
    document.getElementById("frontendJSTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("JSButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("frontendURLText").innerHTML = "https://github.com/VlaKarlo/HTML";
}

function makeCSSPriority(){
    document.getElementById("frontendHeaderTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("frontendButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("HTML").style.display = "none";
    document.getElementById("frontendHTMLTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("HTMLButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("CSS").style.display = "block";
    document.getElementById("frontendCSSTab").style.backgroundColor = "#58416d";
    document.getElementById("CSSButton").style.backgroundColor = "#58416d";
    document.getElementById("JS").style.display = "none";
    document.getElementById("frontendJSTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("JSButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("frontendURLText").innerHTML = "https://github.com/VlaKarlo/CSS";
}

function makeJSPriority(){
    document.getElementById("frontendHeaderTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("frontendButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("HTML").style.display = "none";
    document.getElementById("frontendHTMLTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("HTMLButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("CSS").style.display = "none";
    document.getElementById("frontendCSSTab").style.backgroundColor = "#1e1f1d";
    document.getElementById("CSSButton").style.backgroundColor = "#1e1f1d";
    document.getElementById("JS").style.display = "block";
    document.getElementById("frontendJSTab").style.backgroundColor = "#58416d";
    document.getElementById("JSButton").style.backgroundColor = "#58416d";
    document.getElementById("frontendURLText").innerHTML = "https://github.com/VlaKarlo/JS";
}

function toggleLanguagesDisplay() {
    var tag = document.getElementsByClassName("languageSelectorButtons");
    var showedProjects = 0;
    for(let i = 0; i < tag.length; i++){
        if (tag[i].style.display === "none") {
            tag[i].style.display = "block";
            showedProjects = 1;
        } else {
            tag[i].style.display = "none";
            showedProjects = 0;
        }
    }
    if(showedProjects){
        document.getElementById("languageButtonText").innerHTML = '<span>v</span> Languages';
    }
    else{
        document.getElementById("languageButtonText").innerHTML = '<span>></span> Languages';
    }
    var tag = document.getElementsByClassName("projectSelectorButtons");
    for(let i = 0; i < tag.length; i++){
        tag[i].style.display = "none";
    }
    var tag = document.getElementsByClassName("languageDropdownIndicator");
    for(let i = 0; i < tag.length; i++){
        tag[i].innerHTML = ">";
    }
    document.getElementById("languageDirectoryURL").href = "https://github.com/vlaKarlo/programming";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/vlaKarlo/programming";
} 

function togglePythonProjectsDisplay() {
    var tag = document.getElementsByClassName("pythonProjects");
    var showedProjects = 0;
    for(let i = 0; i < tag.length; i++){
        if (tag[i].style.display === "none") {
            tag[i].style.display = "block";
            showedProjects = 1;
        } else {
            tag[i].style.display = "none";
            showedProjects = 0;
        }
    }
    if(showedProjects){
        document.getElementById("python").innerHTML = '<span class="languageDropdownIndicator">v</span> Python';
    }
    else{
        document.getElementById("python").innerHTML = '<span class="languageDropdownIndicator">></span> Python';
    }
    document.getElementById("languageDirectoryURL").href = "https://github.com/vlaKarlo/programming/python";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/vlaKarlo/programming/python";
} 

function toggleArduinoProjectsDisplay() {
    var tag = document.getElementsByClassName("arduinoProjects");
    var showedProjects = 0;
    for(let i = 0; i < tag.length; i++){
        if (tag[i].style.display === "none") {
            tag[i].style.display = "block";
            showedProjects = 1;
        } else {
            tag[i].style.display = "none";
            showedProjects = 0;
        }
    }
    if(showedProjects){
        document.getElementById("arduino").innerHTML = '<span class="languageDropdownIndicator">v</span> Arduino';
    }
    else{
        document.getElementById("arduino").innerHTML = '<span class="languageDropdownIndicator">></span> Arduino';
    }
    document.getElementById("languageDirectoryURL").href = "https://github.com/vlaKarlo/programming/arduino";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/vlaKarlo/programming/arduino";
}

function toggleCProjectsDisplay() {
    var tag = document.getElementsByClassName("CProjects");
    var showedProjects = 0;
    for(let i = 0; i < tag.length; i++){
        if (tag[i].style.display === "none") {
            tag[i].style.display = "block";
            showedProjects = 1;
        } else {
            tag[i].style.display = "none";
            showedProjects = 0;
        }
    }
    if(showedProjects){
        document.getElementById("C").innerHTML = '<span class="languageDropdownIndicator">v</span> C';
    }
    else{
        document.getElementById("C").innerHTML = '<span class="languageDropdownIndicator">></span> C';
    }
    document.getElementById("languageDirectoryURL").href = "https://github.com/vlaKarlo/programming/C";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/vlaKarlo/programming/C";
} 

function toggleCPlusPlusProjectsDisplay() {
    var tag = document.getElementsByClassName("C++Projects");
    var showedProjects = 0;
    for(let i = 0; i < tag.length; i++){
        if (tag[i].style.display === "none") {
            tag[i].style.display = "block";
            showedProjects = 1;
        } else {
            tag[i].style.display = "none";
            showedProjects = 0;
        }
    }
    if(showedProjects){
        document.getElementById("C++").innerHTML = '<span class="languageDropdownIndicator">v</span> C++';
    }
    else{
        document.getElementById("C++").innerHTML = '<span class="languageDropdownIndicator">></span> C++';
    }
    document.getElementById("languageDirectoryURL").href = "https://github.com/vlaKarlo/programming/C++";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/vlaKarlo/programming/C++";
} 

function toggleCSharpProjectsDisplay() {
    var tag = document.getElementsByClassName("C#Projects");
    var showedProjects = 0;
    for(let i = 0; i < tag.length; i++){
        if (tag[i].style.display === "none") {
            tag[i].style.display = "block";
            showedProjects = 1;
        } else {
            tag[i].style.display = "none";
            showedProjects = 0;
        }
    }
    if(showedProjects){
        document.getElementById("C#").innerHTML = '<span class="languageDropdownIndicator">v</span> C#';
    }
    else{
        document.getElementById("C#").innerHTML = '<span class="languageDropdownIndicator">></span> C#';
    }
    document.getElementById("languageDirectoryURL").href = "https://github.com/vlaKarlo/programming/C#";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/vlaKarlo/programming/C#";
} 

function showWebDevProject(){
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/vlaKarlo/programming/python/WebDev";
    document.getElementById("languageCode").innerHTML = 
    `

    `
    ;
}

function showASVProject(){
    document.getElementById("languageDirectoryURL").href = "https://github.com/vlaKarlo/programming/arduino/ASV";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/vlaKarlo/programming/arduino/ASV";
    document.getElementById("languageCode").innerHTML = 
    `
    <p>
                        #include &#60;Keypad.h&#62;<br>
                        <br>
                        const byte ROWS = 4; <br>
                        const byte COLS = 4; <br>
                        <br>
                        char hexaKeys[ROWS][COLS] = {<br>
                        &emsp;{'1','2','3','A'},<br>
                        &emsp;{'4','5','6','B'},<br>
                        &emsp;{'7','8','9','C'},<br>
                        &emsp;{'*','0','#','D'}<br>
                        };  <br>
                        byte rowPins[ROWS] = {9, 8, 7, 6}; <br>
                        byte colPins[COLS] = {5, 4, 3, 2}; <br>
                        <br>
                        Keypad customKeypad = Keypad( makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS); <br>
                        <br>
                        String pwd,realPwd="1234";<br>
                        bool flag=1;<br>
                        <br>
                        void setup(){<br>
                        &emsp;Serial.begin(9600);<br>
                        &emsp;pinMode(11,OUTPUT);<br>
                        }<br>
                        <br>
                        void checkPwd(){<br>
                        &emsp;for(int i=0;i&#60;5;i++){<br>
                        &emsp;if(pwd[i]!=realPwd[i])<br>
                        &emsp;&emsp;flag=0;<br>
                        &emsp;}<br>
                        }<br>
                        <br>
                        void loop(){<br>
                        &emsp;char c = customKeypad.getKey();<br>
                        &emsp;if (c){<br>
                        &emsp;&emsp;Serial.println(c);<br>
                        &emsp;&emsp;if(c=='#'){<br>
                        &emsp;&emsp;&emsp;checkPwd();<br>
                        &emsp;&emsp;&emsp;if(flag){<br>
                        &emsp;&emsp;&emsp;&emsp;tone(11,30);<br>
                        &emsp;&emsp;&emsp;&emsp;delay(200);<br>
                        &emsp;&emsp;&emsp;&emsp;noTone(11);<br>
                        &emsp;&emsp;&emsp;&emsp;tone(11,32);<br>
                        &emsp;&emsp;&emsp;&emsp;delay(200);<br>
                        &emsp;&emsp;&emsp;&emsp;noTone(11);<br>
                        &emsp;&emsp;&emsp;&emsp;tone(11,34);<br>
                        &emsp;&emsp;&emsp;&emsp;delay(200);<br>
                        &emsp;&emsp;&emsp;&emsp;noTone(11);<br>
                        &emsp;&emsp;&emsp;&emsp;tone(11,36);<br>
                        &emsp;&emsp;&emsp;&emsp;delay(200);<br>
                        &emsp;&emsp;&emsp;&emsp;noTone(11);<br>
                        &emsp;&emsp;&emsp;}<br>
                        &emsp;&emsp;&emsp;else{<br>
                        &emsp;&emsp;&emsp;&emsp;tone(11,0);<br>
                        &emsp;&emsp;&emsp;&emsp;delay(500);<br>
                        &emsp;&emsp;&emsp;&emsp;noTone(11);<br>
                        &emsp;&emsp;&emsp;}<br>
                        &emsp;&emsp;pwd="";<br>
                        &emsp;&emsp;flag=1;<br>
                        &emsp;&emsp;}<br>
                        &emsp;&emsp;else{<br>
                        &emsp;&emsp;&emsp;pwd+=c;<br>
                        &emsp;&emsp;&emsp;Serial.println(pwd);<br>
                        &emsp;&emsp;}<br>
                        &emsp;}<br>
                        &emsp;if(customKeypad.getState()==HOLD)<br>
                        &emsp;&emsp;pwd="";<br>
                        }<br>
                    </p>
    `
    ;
}