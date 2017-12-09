var result=0;

function Question1(){
  document.getElementById("jumbo").innerHTML=document.getElementById("content-question1").innerHTML;
  document.querySelector(".jumbotron.myjumbotron .btn.mybutton").style.top="85%";

}

function Question2(){
    var question1=parseInt(document.getElementById("answer-question1").value);
    if (!Number.isNaN(question1)){
      if (question1<9&&question1>1){
        result+=parseInt(document.getElementById("answer-question1").value);
      }
      else{
        result+=0;
      }

        document.getElementById("jumbo").innerHTML=document.getElementById("content-question2").innerHTML;
        document.querySelector(".jumbotron.myjumbotron").style.height="auto";
        document.querySelector(".jumbotron.myjumbotron .btn.mybutton").style.top="calc(100% - 65px)";
      }
    else {
      alert("Please select a number!");
    }
}

function Question3(){
  if (document.getElementById("answer-question2-3").checked==true||document.getElementById("answer-question2-1").checked==true||document.getElementById("answer-question2-2").checked==true){
    if (document.getElementById("answer-question2-3").checked==true) {
      result+=4;
      document.getElementById("jumbo").innerHTML=document.getElementById("content-question3").innerHTML;
      document.querySelector(".jumbotron.myjumbotron").style.height="450px";
      document.querySelector(".jumbotron.myjumbotron .btn.mybutton").style.top="85%";
    }
    else{
      result+=0;
      document.getElementById("jumbo").innerHTML=document.getElementById("content-question3").innerHTML;
      document.querySelector(".jumbotron.myjumbotron").style.height="450px";
      document.querySelector(".jumbotron.myjumbotron .btn.mybutton").style.top="85%";
    }
  }
  else{
    alert("Please select a picture");
  }
}

function Question4(){
  if (document.getElementById("answer-question3").value.length==0){
    alert("Please enter your answer");
  }
  else {
    if (document.getElementById("answer-question3").value.toLowerCase()=="greg"||document.getElementById("answer-question3").value.toLowerCase()=="gregory"){
        result+=4;
        document.getElementById("jumbo").innerHTML=document.getElementById("content-question4").innerHTML;
        document.querySelector(".jumbotron.myjumbotron .btn.mybutton").style.top="85%";
    }
    else {
        result+=0;
        document.getElementById("jumbo").innerHTML=document.getElementById("content-question4").innerHTML;
        document.querySelector(".jumbotron.myjumbotron .btn.mybutton").style.top="85%";
    }
  }
}

function Question5(){
    var count=0;
    var answerArray=document.getElementsByClassName("answers-q4");
    for (var i=0; i<answerArray.length; i++){
      if(answerArray[i].checked==true){
        result+=parseInt(answerArray[i].value);
        count++;
      }
    }
    if (count==0){
      alert("please select an answer");
    }
    else{
      document.getElementById("jumbo").innerHTML=document.getElementById("content-question5").innerHTML;
      document.querySelector(".jumbotron.myjumbotron .btn.mybutton").style.top="85%";
    }
}

function QuestionEnd(){
    if (document.getElementById("myRange").value<2||document.getElementById("myRange").value>8){
      result+=0;
    }else{
      result+=parseInt(document.getElementById("myRange").value);
    }

    if (result>25||result==25){
      document.getElementById("result-line").innerHTML="Definitely a fan but too much TV. Get a life!";
    }
    else if ((result<25)&&(result>15)){
      document.getElementById("result-line").innerHTML="You are a real fan of Dr.House. Bet you even have a poster.";
    }else{
      document.getElementById("result-line").innerHTML="You do not appear to be a fan."
    }
    document.getElementById("jumbo").innerHTML=document.getElementById("content-result").innerHTML;
}

/*functions for inner elements*/
/*checkboxes for images*/
function block1(){
  if (document.getElementById("answer-question2-1").checked==true){
    document.getElementById("answer-question2-3").disabled=true;
    document.getElementById("answer-question2-2").disabled=true;
  }
  if(document.getElementById("answer-question2-1").checked==false) {
    document.getElementById("answer-question2-3").disabled=false;
    document.getElementById("answer-question2-2").disabled=false;
  }
}

function block2(){
  if (document.getElementById("answer-question2-2").checked==true){
    document.getElementById("answer-question2-1").disabled=true;
    document.getElementById("answer-question2-3").disabled=true;

  }
  if(document.getElementById("answer-question2-2").checked==false) {
    document.getElementById("answer-question2-1").disabled=false;
    document.getElementById("answer-question2-3").disabled=false;

  }
}

function block3(){
  if (document.getElementById("answer-question2-3").checked==true){
    document.getElementById("answer-question2-1").disabled=true;
    document.getElementById("answer-question2-2").disabled=true;

  }
  if(document.getElementById("answer-question2-3").checked==false) {
    document.getElementById("answer-question2-1").disabled=false;
    document.getElementById("answer-question2-2").disabled=false;

  }
}

function slideTt(){
  document.getElementById("current-slider-value").innerHTML="The current value is "+document.getElementById("myRange").value;
}
