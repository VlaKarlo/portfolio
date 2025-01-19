
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

function showPythonAmazonTrackerProject(){
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/amazonTracker";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/amazonTracker";
    document.getElementById("languageCode").innerHTML = 
    `
    <p>
import requests<br>
from bs4 import BeautifulSoup<br>
import smtplib<br>
<br>
header={<br>
&emsp;"Accept-Language": "en-US;q=0.8,en;q=0.7",<br>
&emsp;"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 "<br>
&emsp;"Safari/537.36",<br>
&emsp;"Accept-Charset": "uft-8" <br>
}<br>
<br>
PRODUCT = "ProductUrl"<br>
<br>
response = requests.get(<br>
&emsp;url=PRODUCT,<br>
&emsp;headers=header<br>
&emsp;)<br>
content = response.text<br>
soup = BeautifulSoup(content,"lxml")<br>
<br>
price=soup.find(class_="a-offscreen").get_text()<br>
<br>
price = price[1:].split(',')<br>
price= float(price[0]) * 1000 + float(price[1])<br>
<br>
# --------------------------- MAIL SENDER -------------------------------- #<br>
<br>
if price&#60;1600:<br>
&emsp;myEmail = "mail@gmail.com"<br>
&emsp;password = "password"<br>
&emsp;recieverMail = "mail@gmail.com"<br>
<br>
&emsp;def sendMail():<br>
&emsp;&emsp;with smtplib.SMTP("smtp.gmail.com") as connection:<br>
&emsp;&emsp;&emsp;connection.starttls()<br>
&emsp;&emsp;&emsp;connection.login(user=myEmail,password=password)<br>
&emsp;&emsp;&emsp;connection.sendmail(<br>
&emsp;&emsp;&emsp;&emsp;from_addr=myEmail,<br>
&emsp;&emsp;&emsp;&emsp;to_addrs=recieverMail,<br>
&emsp;&emsp;&emsp;&emsp;msg=f"Subject:Buy the product\n\n{PRODUCT}"<br>
&emsp;&emsp;&emsp;)<br>
&emsp;&emsp;&emsp;<br>
&emsp;sendMail()
                    </p>
    `
    ;
}

function showPythonWebScrapingProject(){
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/webScraping";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/webScraping";
    document.getElementById("languageCode").innerHTML = 
    `
    <p>
import requests<br>
from bs4 import BeautifulSoup<br>
<br>
response = requests.get("https://news.ycombinator.com/")<br>
content = response.text<br>
<br>
soup = BeautifulSoup(content,"html.parser")<br>
<br>
finder = soup.find(class_="titleline")<br>
print(finder.getText())<br>
<br>
finder = soup.find(["titleline","a"])<br>
print(finder.get("href"))<br>
<br>
finder = soup.find(class_="score")<br>
print(finder.getText())<br>
<br>
print("\n")<br>
<br>
<br>
articles=soup.find_all(class_="titleline")<br>
articleTitles=[]<br>
articleLinks=[]<br>
for article in articles:<br>
&emsp;title=article.getText()<br>
&emsp;articleTitles.append(title)<br>
&emsp;link=article.find("a").get("href")<br>
&emsp;articleLinks.append(link)<br>
<br>
scores=soup.find_all(class_="score")<br>
articlePoints=[]<br>
for score in scores:<br>
&emsp;articlePoints.append(int(score.getText().split()[0]))<br>
&emsp;<br>
print(articleTitles)<br>
print(articleLinks)<br>
print(articlePoints)
                    </p>
    `
    ;
}

function showPythonAppProject(){
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/pomodoro";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/pomodoro";
    document.getElementById("languageCode").innerHTML = 
    `
    <p>
from tkinter import *<br>
import math<br>
<br>
# ---------------------------- CONSTANTS ------------------------------- #<br>
PINK = "#e2979c"<br>
RED = "#e7305b"<br>
GREEN = "#9bdeac"<br>
YELLOW = "#f7f5dd"<br>
FONT_NAME = "Courier"<br>
WORK_MIN = 25<br>
SHORT_BREAK_MIN = 5<br>
LONG_BREAK_MIN = 20<br>
reps=0<br>
timer=None<br>
<br>
# ---------------------------- TIMER RESET ------------------------------- # <br>
def resetTimer():<br>
&emsp;global timer<br>
&emsp;window.after_cancel(timer)<br>
&emsp;labelTitle.config(text="Timer",fg=GREEN)<br>
&emsp;canvas.itemconfig(timertext,text="00:00")<br>
&emsp;checkmarkLabel.config(text="")<br>
&emsp;global reps<br>
&emsp;reps=0<br>
&emsp;startTimer()<br>
# ---------------------------- TIMER MECHANISM ------------------------------- # <br>
def startTimer():<br>
&emsp;global reps<br>
&emsp;reps+=1<br>
&emsp;if reps==9:<br>
&emsp;&emsp;labelTitle.config(text="Long Break",fg=RED)<br>
&emsp;&emsp;countDown(LONG_BREAK_MIN*60)<br>
&emsp;elif reps%2:<br>
&emsp;&emsp;global checkmarks<br>
&emsp;&emsp;labelTitle.config(text="Work Time",fg=GREEN)<br>
&emsp;&emsp;countDown(WORK_MIN*60)<br>
&emsp;&emsp;checkmarks=""<br>
&emsp;&emsp;for x in range(math.floor(reps/2)):<br>
&emsp;&emsp;&emsp;checkmarks+="✔"<br>
&emsp;&emsp;checkmarkLabel.config(text=checkmarks)<br>
&emsp;else:<br>
&emsp;&emsp;labelTitle.config(text="Short Break",fg=PINK)<br>
&emsp;&emsp;countDown(SHORT_BREAK_MIN*60)<br>
<br>
# ---------------------------- COUNTDOWN MECHANISM ------------------------------- # <br>
def countDown(count):<br>
&emsp;minutes=math.floor(count/60)<br>
&emsp;seconds=count%60<br>
&emsp;<br>
&emsp;if seconds&#60;10:<br>
&emsp;&emsp;seconds=f"0{seconds}"<br>
&emsp;&emsp;<br>
&emsp;<br>
&emsp;canvas.itemconfig(timertext,text=f"{minutes}:{seconds}")<br>
&emsp;<br>
&emsp;if count&#62;0:<br>
&emsp;&emsp;global timer<br>
&emsp;&emsp;timer = window.after(1000,countDown,count-1)<br>
&emsp;else:<br>
&emsp;&emsp;timer =  window.after(1000,startTimer)<br>
# ---------------------------- UI SETUP ------------------------------- #<br>
window = Tk()<br>
window.title("Pomodoro")<br>
window.config(padx=100,pady=50,bg=YELLOW)<br>
<br>
canvas = Canvas(width=210,height=225,bg=YELLOW,highlightthickness=0)<br>
tomatoImage = PhotoImage(file="D:/VSCProj/ProjectPython/Day 28 - Pomodoro/tomato.png")<br>
canvas.create_image(105,112,image=tomatoImage)<br>
timertext = canvas.create_text(103,130,text="00:00",fill="white",font=(FONT_NAME, 35, "bold"))<br>
canvas.grid(row=1,column=1)<br>
<br>
labelTitle = Label(text="Timer",fg=GREEN,font=(FONT_NAME,40,"bold"),bg=YELLOW)<br>
labelTitle.grid(row=0,column=1)<br>
<br>
buttonStart = Button(text="Start", command=startTimer,highlightthickness=0)<br>
buttonStart.grid(row=2,column=0)<br>
<br>
buttonReset = Button(text="Reset", command=resetTimer,highlightthickness=0)<br>
buttonReset.grid(row=2,column=2)<br>
<br>
checkmarkLabel = Label(fg=GREEN,font=(FONT_NAME,10,"bold"),bg=YELLOW)<br>
checkmarkLabel.grid(row=3,column=1)<br>
<br>
window.mainloop()
                    </p>
    `
    ;
}

function showPythonCookieClickerBotProject(){
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/cookieClickerBot";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/python/cookieClickerBot";
    document.getElementById("languageCode").innerHTML = 
    `
    <p>
from selenium import webdriver<br>
from selenium.webdriver.common.by import By<br>
import time<br>
<br>
driver = webdriver.Firefox()<br>
driver.get("http://orteil.dashnet.org/experiments/cookie/")<br>
<br>
cookie = driver.find_element(By.ID,value="cookie")<br>
buyCursor = driver.find_element(By.ID,value="buyCursor")<br>
buyGrandma = driver.find_element(By.ID,value="buyGrandma")<br>
buyFactory = driver.find_element(By.ID,value="buyFactory")<br>
buyMine = driver.find_element(By.ID,value="buyMine")<br>
buyShipment = driver.find_element(By.ID,value="buyShipment")<br>
buyLab = driver.find_element(By.ID,value="buyAlchemy lab")<br>
buyPortal = driver.find_element(By.ID,value="buyPortal")<br>
buyTimeMachine = driver.find_element(By.ID,value="buyTime machine")<br>
money = int(driver.find_element(By.ID,value="money").text)<br>
<br>
def turnToPrice(price):<br>
&emsp;price = price.split(',')[::-1]<br>
&emsp;priceNumber = 0<br>
&emsp;for x in range(len(price)):<br>
&emsp;&emsp;priceNumber = priceNumber + int(price[x]) * pow(1000,x)<br>
&emsp;return priceNumber<br>
<br>
lowestPrice = int(buyCursor.find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
grandmaPrice = int(buyGrandma.find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
factoryPrice = int(buyFactory.find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
minePrice = turnToPrice(buyMine.find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
shipmentPrice = turnToPrice(buyShipment.find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
labPrice = turnToPrice(buyLab.find_element(By.TAG_NAME,value="b").text.split(' ')[3])<br>
portalPrice = turnToPrice(buyPortal.find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
timeMachinePrice = turnToPrice(buyTimeMachine.find_element(By.TAG_NAME,value="b").text.split(' ')[3])<br>
<br>
def updateStore():<br>
&emsp;global buyCursor,buyGrandma,buyFactory,buyMine,buyShipment,buyLab,buyPortal,buyTimeMachine<br>
&emsp;buyCursor = driver.find_element(By.ID,value="buyCursor")<br>
&emsp;buyGrandma = driver.find_element(By.ID,value="buyGrandma")<br>
&emsp;buyFactory = driver.find_element(By.ID,value="buyFactory")<br>
&emsp;buyMine = driver.find_element(By.ID,value="buyMine")<br>
&emsp;buyShipment = driver.find_element(By.ID,value="buyShipment")<br>
&emsp;buyLab = driver.find_element(By.ID,value="buyAlchemy lab")<br>
&emsp;buyPortal = driver.find_element(By.ID,value="buyPortal")<br>
&emsp;buyTimeMachine = driver.find_element(By.ID,value="buyTime machine")<br>
<br>
def checkPrices():<br>
&emsp;global lowestPrice,grandmaPrice,factoryPrice,minePrice,shipmentPrice,labPrice,portalPrice,timeMachinePrice,money<br>
&emsp;lowestPrice = turnToPrice(driver.find_element(By.ID,value="buyCursor").find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
&emsp;grandmaPrice = turnToPrice(driver.find_element(By.ID,value="buyGrandma").find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
&emsp;factoryPrice = turnToPrice(driver.find_element(By.ID,value="buyFactory").find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
&emsp;minePrice = turnToPrice(driver.find_element(By.ID,value="buyMine").find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
&emsp;shipmentPrice = turnToPrice(driver.find_element(By.ID,value="buyShipment").find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
&emsp;labPrice = turnToPrice(driver.find_element(By.ID,value="buyAlchemy lab").find_element(By.TAG_NAME,value="b").text.split(' ')[3])<br>
&emsp;portalPrice = turnToPrice(driver.find_element(By.ID,value="buyPortal").find_element(By.TAG_NAME,value="b").text.split(' ')[2])<br>
&emsp;timeMachinePrice = turnToPrice(driver.find_element(By.ID,value="buyTime machine").find_element(By.TAG_NAME,value="b").text.split(' ')[3])<br>
&emsp;money = driver.find_element(By.ID,value="money").text<br>
&emsp;if "," in money:<br>
&emsp;&emsp;money = turnToPrice(money)<br>
<br>
def buyStuff():<br>
&emsp;<br>
&emsp;money = int(driver.find_element(By.ID,value="money").text)<br>
&emsp;checkPrices()<br>
&emsp;while money &#62;= lowestPrice:<br>
&emsp;&emsp;<br>
&emsp;&emsp;if money &#62; timeMachinePrice:<br>
&emsp;&emsp;&emsp;buyTimeMachine.click()<br>
&emsp;&emsp;&emsp;money -= timeMachinePrice<br>
&emsp;&emsp;&emsp;print("Bought Time Machine")<br>
&emsp;&emsp;&emsp;<br>
&emsp;&emsp;elif money &#62; portalPrice:<br>
&emsp;&emsp;&emsp;buyPortal.click()<br>
&emsp;&emsp;&emsp;money -= portalPrice<br>
&emsp;&emsp;&emsp;print("Bought Portal")<br>
&emsp;&emsp;&emsp;<br>
&emsp;&emsp;elif money &#62; labPrice:<br>
&emsp;&emsp;&emsp;buyLab.click()<br>
&emsp;&emsp;&emsp;money -= labPrice<br>
&emsp;&emsp;&emsp;print("Bought Lab")<br>
&emsp;&emsp;&emsp;<br>
&emsp;&emsp;elif money &#62; shipmentPrice:<br>
&emsp;&emsp;&emsp;buyShipment.click()<br>
&emsp;&emsp;&emsp;money -= shipmentPrice<br>
&emsp;&emsp;&emsp;print("Bought Shipment")<br>
&emsp;&emsp;&emsp;<br>
&emsp;&emsp;elif money &#62; minePrice:<br>
&emsp;&emsp;&emsp;buyMine.click()<br>
&emsp;&emsp;&emsp;money -= minePrice<br>
&emsp;&emsp;&emsp;print("Bought Mine")<br>
&emsp;&emsp;&emsp;<br>
&emsp;&emsp;elif money &#62; factoryPrice:<br>
&emsp;&emsp;&emsp;buyFactory.click()<br>
&emsp;&emsp;&emsp;money -= factoryPrice<br>
&emsp;&emsp;&emsp;print("Bought Factory")<br>
&emsp;&emsp;&emsp;<br>
&emsp;&emsp;elif money &#62; grandmaPrice:<br>
&emsp;&emsp;&emsp;buyGrandma.click()<br>
&emsp;&emsp;&emsp;money -= grandmaPrice<br>
&emsp;&emsp;&emsp;print("Bought Grandma")<br>
&emsp;&emsp;&emsp;<br>
&emsp;&emsp;else:<br>
&emsp;&emsp;&emsp;buyCursor.click()<br>
&emsp;&emsp;&emsp;money -= lowestPrice<br>
&emsp;&emsp;&emsp;print("Bought Cursor")<br>
&emsp;&emsp;&emsp;<br>
&emsp;&emsp;checkPrices()<br>
&emsp;&emsp;updateStore()<br>
&emsp;<br>
<br>
startTime = time.time()<br>
lastCheckedTime = time.time()<br>
while True:<br>
&emsp;cookie.click()<br>
&emsp;<br>
&emsp;if time.time() - lastCheckedTime &#62; 5:<br>
&emsp;&emsp;lastCheckedTime = time.time()<br>
&emsp;&emsp;buyStuff()<br>
&emsp;<br>
&emsp;if time.time() - startTime &#62; 300:<br>
&emsp;&emsp;break<br>
&emsp;
                    </p>
    `
    ;
}

function showVaultDoorProject(){
    document.getElementById("languageDirectoryURL").href = "https://github.com/VlaKarlo/Projects/tree/main/programming/arduino/vaultDoor";
    document.getElementById("languageDirectoryURL").innerHTML = "https://github.com/VlaKarlo/Projects/tree/main/programming/arduino/vaultDoor";
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
