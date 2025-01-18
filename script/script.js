
window.onload = function(){

    if(window.matchMedia("(min-width:2560px)").matches){

        document.getElementById("frontendShape").coords = "555,1063,952,1221";
        document.getElementById("graphicShape").coords = "2072,80,2351,453";
        document.getElementById("pythonShape").coords = "100,969,364,1107";
        document.getElementById("softSkillsShape").coords = "290,75,495,281";
        document.getElementById("CShape").coords = "1193,1047,1303,1247";
        document.getElementById("C++Shape").coords = "1642,1221,1841,1331";
        document.getElementById("C#Shape").coords = "1642,993,1841,1100";
        document.getElementById("arduinoShape").coords = "2138,1074,2407,1211";

    }

    if(window.matchMedia("(min-width:1920px)").matches && window.matchMedia("(max-width:2559px)").matches){
        
        document.getElementById("frontendShape").coords = "412,795,720,918";
        document.getElementById("graphicShape").coords = "1549,60,1760,344";
        document.getElementById("pythonShape").coords = "72,729,272,830";
        document.getElementById("softSkillsShape").coords = "217,55,371,211";
        document.getElementById("CShape").coords = "892,786,974,936";
        document.getElementById("C++Shape").coords = "1229,913,1379,1000";
        document.getElementById("C#Shape").coords = "1229,745,1379,830";
        document.getElementById("arduinoShape").coords = "1603,806,1800,909";

    }

    if(window.matchMedia("(min-width:1280px)").matches && window.matchMedia("(max-width:1919px)").matches){

        document.getElementById("frontendShape").coords = "275,530,476,611";
        document.getElementById("graphicShape").coords = "1027,40,1167,230";
        document.getElementById("pythonShape").coords = "50,484,182,555";
        document.getElementById("softSkillsShape").coords = "143,36,250,140";
        document.getElementById("CShape").coords = "592,522,646,626";
        document.getElementById("C++Shape").coords = "814,611,914,665";
        document.getElementById("C#Shape").coords = "814,495,914,550";
        document.getElementById("arduinoShape").coords = "1062,537,1193,606";

    }

    if(window.matchMedia("(min-width:800px)").matches && window.matchMedia("(max-width:1279px)").matches){

        document.getElementById("frontendShape").coords = "169,323,292,372";
        document.getElementById("graphicShape").coords = "636,25,723,140";
        document.getElementById("pythonShape").coords = "31,294,112,336";
        document.getElementById("softSkillsShape").coords = "90,23,152,86";
        document.getElementById("CShape").coords = "366,318,401,379";
        document.getElementById("C++Shape").coords = "504,371,566,405";
        document.getElementById("C#Shape").coords = "504,301,566,336";
        document.getElementById("arduinoShape").coords = "657,327,740,368";

    }

    toggleLanguagesDisplay();
    resetFrontendPriority();

};

window.onscroll = function(){
    var button = document.getElementById("returnButtonLink");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
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
    document.getElementById("frontendURLLink").href = "https://github.com/VlaKarlo/Projects/tree/main/frontend";
    document.getElementById("frontendURLText").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/frontend";

    writeHTMLCode();
    writeCSSCode();
    writeJSCode();

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
    document.getElementById("frontendURLLink").href = "https://github.com/VlaKarlo/Projects/tree/main/frontend/HTML";
    document.getElementById("frontendURLText").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/frontend/HTML";

    writeHTMLCode();
    clearCSSCode();
    clearJSCode();

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
    document.getElementById("frontendURLLink").href = "https://github.com/VlaKarlo/Projects/tree/main/frontend/CSS";
    document.getElementById("frontendURLText").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/frontend/CSS";

    clearHTMLCode();
    writeCSSCode();
    clearJSCode();

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
    document.getElementById("frontendURLLink").href = "https://github.com/VlaKarlo/Projects/tree/main/frontend/JS";
    document.getElementById("frontendURLText").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/frontend/JS";

    clearHTMLCode();
    clearCSSCode();
    writeJSCode();

}

function writeHTMLCode(){
    document.getElementById("HTMLBody").innerHTML = `
    <br>
                            &#60;!DOCTYPE html&#62; <br>
                            &#60;html lang="en"&#62; <br>
                            &#60;head&#62; <br>
                                &emsp; &#60;meta charset="UTF-8"&#62; <br>
                                &emsp; &#60;meta name="viewport" content="width=device-width, initial-scale=1.0"&#62;<br>
                                &emsp; &#60;title&#62; Karlo Vlašić&#60;/title&#62; <br>
                                &emsp; &#60;link rel="icon" type="image/x-icon" href="/images/favicon.ico"&#62; <br>
                                &emsp; &#60;link rel="stylesheet" href="style/style.css"&#62; <br>
                                &emsp; &#60;script src="script/script.js"&#62;&#60;/script&#62; <br>
                            &#60;/head&#62; <br>
                            &#60;body&#62; <br>
                                &emsp;&#60;main&#62; <br>
                                    &emsp;&emsp;&#60;section id="PCB"&#62; <br>
                                        &emsp;&emsp;&emsp;&#60;img id="PCBImage" src="images/map/map.png" usemap="#PCB" width="1920" height="1080"&#62; <br>
                                        &emsp;&emsp;&emsp;&#60;map name="PCB"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#60;area shape="rect" coords="412,795,720,918" alt="frontend" href="#frontend"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#60;area shape="rect" coords="1562,55,1783,344" alt="graphicDesign" href="#graphicDesign"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#60;area shape="rect" coords="72,724,276,830" alt="python" href="#python"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#60;area shape="rect" coords="217,52,371,211" alt="softSkills" href="#softSkills"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#60;area shape="rect" coords="898,781,985,936" alt="C" href="#programming"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#60;area shape="rect" coords="1240,913,1395,1000" alt="C++" href="#programming"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#60;area shape="rect" coords="1240,740,1395,830" alt="C#" href="#programming"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#60;area shape="rect" coords="1615,800,1822,912" alt="arduino" href="#programming"&#62; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#9679; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#9679; <br>
                                            &emsp;&emsp;&emsp;&emsp;&#9679; <br>
                                &emsp;&#60;/footer&#62; <br>
                            &#60;/body&#62; <br>
                            &#60;/html&#62; <br>
    `
    ;
}

function clearHTMLCode(){
    document.getElementById("HTMLBody").innerHTML = "";
}

function writeCSSCode(){
    document.getElementById("CSSBody").innerHTML = `
    <br>
    #frontend{ <br>
        &emsp;text-align: center;<br>
    }<br>
    <br>
    #page{<br>
        &emsp;border-radius: 30px;<br>
        &emsp;padding: 10px 0;<br>
        &emsp;margin: 0px 10px;<br>
        &emsp;background-color: #2c2e2c;<br>
    }<br>
    <br>
    #frontendHeader{<br>
        &emsp;display: flex;<br>
    }<br>
    <br>
    #frontendHeaderTab img, #frontendHTMLTab img, #frontendCSSTab img, #frontendJSTab img{<br>
        &emsp;margin-top: 10px;<br>
        &emsp;margin-left: 10px;<br>
        &emsp;margin-bottom: 5px;<br>
    }<br>
    <br>
    #frontendHeaderTab, #frontendHTMLTab, #frontendCSSTab, #frontendJSTab{<br>
        &emsp;display: flex;<br>
        &emsp;text-align: left;<br>
        &emsp;background-color: #1e1f1d;<br>
        &emsp;border-radius: 30px 30px 0 0;<br>
    }<br>
    `
    ;
}

function clearCSSCode(){
    document.getElementById("CSSBody").innerHTML = "";
}

function writeJSCode(){
    document.getElementById("JSBody").innerHTML = `
        <br>
        function resetFrontendPriority(){<br>
            &emsp;document.getElementById("HTML").style.display = "block";<br>
            &emsp;document.getElementById("CSS").style.display = "block";<br>
            &emsp;document.getElementById("JS").style.display = "block";<br>
        }<br>
        <br>
        function makeHTMLPriority(){<br>
            &emsp;document.getElementById("HTML").style.display = "block";<br>
            &emsp;document.getElementById("CSS").style.display = "none";<br>
            &emsp;document.getElementById("JS").style.display = "none";<br>
        }<br>
        <br>
        function makeCSSPriority(){<br>
            &emsp;document.getElementById("HTML").style.display = "none";<br>
            &emsp;document.getElementById("CSS").style.display = "block";<br>
            &emsp;document.getElementById("JS").style.display = "none";<br>
        }<br>
        <br>
        function makeJSPriority(){<br>
            &emsp;document.getElementById("HTML").style.display = "none";<br>
            &emsp;document.getElementById("CSS").style.display = "none";<br>
            &emsp;document.getElementById("JS").style.display = "block";<br>
        }<br>
    `
    ;
}

function clearJSCode(){
    document.getElementById("JSBody").innerHTML = "";
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
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming";
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
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/python";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/python";
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
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/arduino";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/arduino";
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
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/C";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/C";
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
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/C++";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/C++";
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
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/C#";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/C#";
} 

function showWebDevProject(){
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/WebDev";
    document.getElementById("languageCode").innerHTML = 
    `

    `
    ;
}

function showASVProject(){
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/arduino/ASV";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/arduino/ASV";
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


function showWSProject(){
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/arduino/ASV";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/arduino/ASV";
    document.getElementById("languageCode").innerHTML = 
    `
    <p>

&#60;!DOCTYPE html&#62;<br>
&#60;html lang="en"&#62;<br>
&#60;head&#62;<br>
&emsp;&#60;meta charset="UTF-8"&#62;<br>
&emsp;&#60;meta name="viewport" content="width=device-width, initial-scale=1.0"&#62;<br>
&emsp;&#60;title&#62;Karlo Vlašić&#60;/title&#62;<br>
&emsp;&#60;link rel="icon" type="image/x-icon" href="images/favicon.ico"&#62;<br>
&emsp;&#60;link rel="stylesheet" href="style/style.css"&#62;<br>
&emsp;&#60;script src="script/script.js"&#62;&#60;/script&#62;<br>
&emsp;&#60;link rel="preconnect" href="https://fonts.googleapis.com"&#62;<br>
&emsp;&#60;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&#62;<br>
&emsp;&#60;link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"&#62;<br>
&#60;/head&#62;<br>
&#60;body&#62;<br>
<br>
&emsp;&#60;header id="start"&#62;&#60;/header&#62;<br>
<br>
&emsp;&#60;nav&#62;<br>
&emsp;&emsp;&#60;ul&#62;<br>
&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;a href="#frontend"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Frontend<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;a href="#graphicDesign"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Graphic Design<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;a href="#programming"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Programming<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;a href="#python"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Python<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;a href="#softSkills"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Soft Skills<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&#60;/ul&#62;<br>
&emsp;&#60;/nav&#62;<br>
<br>
&emsp;&#60;main&#62;<br>
<br>
&emsp;&emsp;&#60;section id="profile"&#62;<br>
&emsp;&emsp;&emsp;&#60;img id="profilePicture" src="images/profile.png"&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="PCB"&#62;<br>
&emsp;&emsp;&emsp;&#60;img id="PCBImage" src="images/map/map.png" usemap="#PCB"&#62;<br>
&emsp;&emsp;&emsp;&#60;map id="imageMap" name="PCB"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;area id="frontendShape" shape="rect" coords="412,795,720,918" alt="frontend" href="#frontend"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;area id="graphicShape" shape="rect" coords="1562,55,1783,344" alt="graphicDesign" href="#graphicDesign"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;area id="pythonShape" shape="rect" coords="72,724,276,830" alt="python" href="#programming"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;area id="softSkillsShape" shape="rect" coords="217,52,371,211" alt="softSkills" href="#softSkills"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;area id="CShape" shape="rect" coords="898,781,985,936" alt="C" href="#programming"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;area id="C++Shape" shape="rect" coords="1240,913,1395,1000" alt="C++" href="#programming"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;area id="C#Shape" shape="rect" coords="1240,740,1395,830" alt="C#" href="#programming"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;area id="arduinoShape" shape="rect" coords="1615,800,1822,912" alt="arduino" href="#programming"&#62;<br>
&emsp;&emsp;&emsp;&#60;/map&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="transitionFirst"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="ALU1"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/frontend"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Frontend<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="connectionFirst"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="connection1"&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="frontend"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="page"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="frontendHeader"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="frontendHeaderTab" class="frontendTabs"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/favicon.ico" width="32" height="32"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="frontendButton" class="frontendButtons" onclick="resetFrontendPriority()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Frontend<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;X<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="frontendHTMLTab" class="frontendTabs"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/htmlIcon.png" width="32" height="32"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="HTMLButton" class="frontendButtons" onclick="makeHTMLPriority()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;abbr title="Hyper Text Markup Language"&#62;HTML&#60;/abbr&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;X<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="frontendCSSTab" class="frontendTabs"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/css.png" width="32" height="32"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="CSSButton" class="frontendButtons" onclick="makeCSSPriority()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;abbr title="Cascading Style Sheet"&#62;CSS&#60;/abbr&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;X<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="frontendJSTab" class="frontendTabs"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/js.png" width="26" height="28"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="JSButton" class="frontendButtons" onclick="makeJSPriority()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;abbr title="Javascript"&#62;JS&#60;/abbr&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;X<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="frontendURL"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a id="frontendURLLink" href="https://github.com/VlaKarlo/Projects/tree/main/frontend"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3 id="frontendURLText"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;https://github.com/VlaKarlo/Projects/tree/main/frontend<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="frontendBody"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="HTML"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;abbr title="Hyper Text Markup Language"&#62;index.html&#60;/abbr&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;p id="HTMLBody"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/p&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="CSS"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;abbr title="Cascading Style Sheet"&#62;style.css&#60;/abbr&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;p id="CSSBody"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/p&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="JS"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;abbr title="Javascript"&#62;script.js&#60;/abbr&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;p id="JSBody"&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/p&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="connectionSecond"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="connection2Line1"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="connection2Line2"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="connection2Line3"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="transitionSecond"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="ALU2"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Graphic Design<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="graphicDesign"&#62;<br>
<br>
&emsp;&emsp;&emsp;&#60;div id="bigViewDesign"&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="connection3LineLeft"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topic"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign/design"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4 id="design"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Design<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign/webDesign"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4 id="webDesign"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Web Design<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign/models"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4 id="models"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Modelling<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign/animations"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4 id="animations"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Animations<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImageLeftLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesLeft"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="designLeft" src="images/Poster.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="webDesignLeft" src="images/webDesignLeft.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="modellingLeft" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="animationLeft" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="ImageLeftImageRightLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesRight"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="designRight" src="images/designRight.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="webDesignRight" src="images/webDesignRight.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="modellingRight" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="animationRight" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&#60;div id="smallViewDesign"&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="connection3LineLeft"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topic"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign/design"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4 id="design"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Design<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesLeft"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="designLeft" src="images/Poster.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesRight"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="designRight" src="images/designRight.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topic"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign/webDesign"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4 id="webDesign"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Web Design<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesLeft"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="webDesignLeft" src="images/webDesignLeft.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesRight"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="webDesignRight" src="images/webDesignRight.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topic"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign/models"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4 id="models"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Modelling<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesLeft"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="modellingLeft" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesRight"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="modellingRight" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topic"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/graphicDesign/animations"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h4 id="animations"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Animations<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h4&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesLeft"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="animationLeft" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionTopicLines"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionLines"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="topicImagesRight"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="outterTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="innerTopicImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img class="topicImages" id="animationRight" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="connection3LineLeft"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="transitionThird"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="ALU3"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/programming"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Programming<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="connectionThird"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="connection3Line"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/section&#62;&emsp;&emsp;<br>
<br>
&emsp;&emsp;&#60;section id="programming"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="programmingHeader"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="languageSelector"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="languageButton" onclick="toggleLanguagesDisplay()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2 id="languageButtonText"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;span&#62;v&#60;/span&#62; Languages<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="pythonButton" class="languageSelectorButtons" onclick="togglePythonProjectsDisplay()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3 id="python"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;span class="languageDropdownIndicator"&#62;v&#60;/span&#62; Python<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button class="projectSelectorButtons pythonProjects" onclick="showWebDevProject()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Web Dev<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button class="projectSelectorButtons pythonProjects"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Web Scraping<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button class="projectSelectorButtons pythonProjects"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Apps<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button class="projectSelectorButtons pythonProjects"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Data Visualisation<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="arduinoButton" class="languageSelectorButtons" onclick="toggleArduinoProjectsDisplay()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3 id="arduino"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;span class="languageDropdownIndicator"&#62;v&#60;/span&#62; Arduino<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button class="projectSelectorButtons arduinoProjects" onclick="showASVProject()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ASV<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="CButton" class="languageSelectorButtons" onclick="toggleCProjectsDisplay()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3 id="C"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;span class="languageDropdownIndicator"&#62;&#62;&#60;/span&#62; C<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button class="projectSelectorButtons CProjects"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ASV<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="C++Button" class="languageSelectorButtons" onclick="toggleCPlusPlusProjectsDisplay()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3 id="C++"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;span class="languageDropdownIndicator"&#62;&#62;&#60;/span&#62; C++<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button class="projectSelectorButtons C++Projects"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ASV<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button id="C#Button" class="languageSelectorButtons" onclick="toggleCSharpProjectsDisplay()"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h3 id="C#"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;span class="languageDropdownIndicator"&#62;&#62;&#60;/span&#62; C#<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h3&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;button class="projectSelectorButtons C#Projects"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ASV<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/button&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/li&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/ul&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="languageBody"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="languageDirectory"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a id="languageDirectoryURL" href="https://github.com/VlaKarlo/Projects/tree/main/programming"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;https://github.com/vlaKarlo/programming<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="languageCode"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;p&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/p&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;img&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
&emsp;&emsp;&#60;section id="softSkills"&#62;<br>
<br>
&emsp;&emsp;&emsp;&#60;div id="bigViewSoftSkills"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="leftImageBackground"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="leftImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img id="leftImage" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="connectionFourth"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="connection4Line"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;  <br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="transitionFourth"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="ALU4"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/softSkills"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Soft skills<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="connectionFifth"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="connection5Line"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62; <br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="socials"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://www.facebook.com/"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/socials/fbLogo.png" alt="Facebook Logo" height="64px" width="64px"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://www.instagram.com/"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/socials/igLogo.png" alt="Instagram Logo" height="64px" width="64px"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://hr.linkedin.com/"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/socials/linkedinLogo.png" alt="Linkedin Logo" height="64px" width="64px"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="rightImageBackground"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="rightImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img id="rightImage" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&emsp;&#60;div id="smallViewSoftSkills"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionSkillSection"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="connection4Line"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;  <br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="transitionFourth"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="ALU4"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://github.com/VlaKarlo/Projects/tree/main/softSkills"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Soft skills<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h1&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionSkillSection"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionSkillLine"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62; <br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="leftImageBackground"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="leftImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img id="leftImage" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionSkillSection"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionSkillLine"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62; <br>
&emsp;&emsp;&emsp;&emsp;&#60;div id="rightImageBackground"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="rightImageBorder"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img id="rightImage" src="images/profile.png"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionSkillSection"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div class="connectionSkillLine"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62; <br>
&emsp;&emsp;&emsp;&emsp;&#60;div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;div id="socials"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://www.facebook.com/"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/socials/fbLogo.png" alt="Facebook Logo" height="64px" width="64px"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://www.instagram.com/"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/socials/igLogo.png" alt="Instagram Logo" height="64px" width="64px"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;a href="https://hr.linkedin.com/"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;img src="images/socials/linkedinLogo.png" alt="Linkedin Logo" height="64px" width="64px"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
<br>
&emsp;&emsp;&#60;/section&#62;<br>
<br>
<br>
&emsp;&emsp;&#60;div id="connectionSixth"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="connection6Line"&#62;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/div&#62;  <br>
<br>
&emsp;&emsp;&#60;a id="returnButtonLink" href="#start"&#62;<br>
&emsp;&emsp;&emsp;&#60;div id="returnButton"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;^<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/h2&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&#60;/a&#62;<br>
&emsp;&#60;/main&#62;<br>
<br>
&emsp;&#60;footer&#62;<br>
&emsp;&emsp;&#60;section id="contact"&#62;<br>
&emsp;&emsp;&emsp;&#60;form class="gform" action="https://script.google.com/macros/s/AKfycbyG53E2OWW0ZEUgWHLUbitwT2pZkAynUANHhYr8Tu3QBblXNPuBOdPqyEIyFxb9xbE/exec" method="post" data-email="karlo.vlasic1337@gmail.com"&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;label&#62;E-mail&#60;/label&#62;&#60;br&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;input type="email" id="email" name="email" required &#62;&#60;br&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;label&#62;Subject&#60;/label&#62;&#60;br&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;input type="text" id="subject" name="subject" required &#62;&#60;br&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;label&#62;Message&#60;/label&#62;&#60;br&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&#60;textarea rows="6" cols="20" id="message" name="message" required wrap="hard"&#62;&#60;/textarea&#62;&#60;br&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;<br>
&emsp;&emsp;&emsp;&emsp;&#60;input type="submit" value="submit" name="submit"&#62;&#60;br&#62;<br>
&emsp;&emsp;&emsp;&#60;/form&#62;<br>
&emsp;&emsp;&#60;/section&#62;<br>
&emsp;&#60;/footer&#62;<br>
<br>
&#60;/body&#62;<br>
&#60;/html&#62;
`;}