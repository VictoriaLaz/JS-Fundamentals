/**
 * Created by Vicky on 6/5/2017.
 */
function writeXML(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for(let i = 0; i<input.length; i+=2){
        let question = input[i];
        let answer = input[i+1];
        writeQuestionsAndAnswers(question, answer);
    }
    function writeQuestionsAndAnswers(question, answer) {
        console.log('<question>');
        console.log(`${question}`);
        console.log('</question>');
        console.log('<answer>');
        console.log(`${answer}`);
        console.log('</answer>')
    }
    console.log('</quiz>');
}
