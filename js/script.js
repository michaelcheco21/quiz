/* global $ */

$(document).ready(function() {
    console.log("document.ready");
    $("button").click(function() {
        console.log("button.click");
        var name = $("#name").val();
        var finalAnswer;
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = parseInt($("#question1").val());
        var q2Input = parseInt($("#question2").val());
        var q3Input = parseInt($("#question3").val());
        var q4Input = parseInt($("#question4").val());
        
        var final = calcFinalScore(getScoreOne(q1Input), getScoreTwo(q2Input), getScoreThree(q3Input), getScoreFour(q4Input) );

        if(final === 16){
            alert(name + " ," + "you are Hades, God of the Underworld");
            $(".result").prepend("<img src='http://www.gods-and-monsters.com/images/xhades-god-of-underworld.jpg.pagespeed.ic.g_J4O19QSg.jpg'>");
            
        }else if(final <= 15 && final >= 12){
            alert(name + " ," + "you are Zeus, God of Lightning");
            
        }else if(final <=11 && final >= 9){
            alert(name + " ," + "you are Poseidon, God of the Sea");
            
        }else if(final <= 8){
            alert(name + " ," + "you are Aphrodite, Goddess of Love");
            
        }
        

    });
    
    function getScoreOne(answer){

        if(answer === 1){
            return 1;
        }else if(answer === 2){
             return 2;
        }else if(answer === 3){
             return 3;
        }else if(answer === 4){
             return 4;
        }else{
             return 0;
        }
    }
    
    function getScoreTwo(answer){

        if(answer === 1){
            return 1;
        }else if(answer === 2){
            return 2;
        }else if(answer === 3){
            return 3;
        }else if(answer === 4){
            return 4;
        }else{
            return 0;
        }
    }
    
    function getScoreThree(answer){

        if(answer === 1){
            return 1;
        }else if(answer === 2){
            return 2;
        }else if(answer === 3){
            return 3;
        }else if(answer === 4){
            return 4;
        }else{
            return 0;
        }
    }
    
    function getScoreFour(answer){

        if(answer === 1){
            return 1;
        }else if(answer === 2){
            return 2;
        }else if(answer === 3){
            return 3;
        }else if(answer === 4){
            return 4;
        }else{
            return 0;
        }
    }
    
    function calcFinalScore(answOne, answTwo, answThree, answFour){
        return answOne + answTwo + answThree + answFour;
    }
});
