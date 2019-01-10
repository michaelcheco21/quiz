/* global $ */

$(document).ready(function() {
    
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var q4input = $("#question4").val();
        
        var final = finalScore(q1Input, q2Input, q3Input, q4input);
        
        if(final >=18){
            
        }
        
        
        var totalScore = questionOne(q1Input);
        totalScore += questionTwo(q2Input);
        totalScore += questionThree(q3Input);
        totalScore += questionFour(q4input);
        
        
    });
    
    function questionOne(answer){

        if(answer === 1){
            return 2;
        }else if(answer === 2){
             return 3;
        }else if(answer === 3){
             return 5;
        }else if(answer === 4){
             return 4;
        }else{
             return 0;
        }
    }
    
    function questionTwo(answer){

        if(answer === 1){
            return 5;
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
    
    function questionThree(answer){

        if(answer === 1){
            return 4;
        }else if(answer === 2){
            return 5;
        }else if(answer === 3){
            return 2;
        }else if(answer === 4){
            return 3;
        }else{
            return 0;
        }
    }
    
    function questionFour(answer){

        if(answer === 1){
            return 2;
        }else if(answer === 2){
            return 3;
        }else if(answer === 3){
            return 5;
        }else if(answer === 4){
            return 4;
        }else{
            return 0;
        }
    }
    
    function finalScore(one, two, three, four){
        return one + two + three + four;
    }
});
