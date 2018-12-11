"use strict";

// $(document).ready(function() {

//   var result = [];

//   // form
//   $('#test-form #send-answer').on('click', function(){
//     var answer = $(this).closest('#test-form').serialize();
//     result.push(answer);
//     // console.log('some', $(this).closest('#test-form').serialize());
//     $('input[name="result"').val(result);
//   });
//   // function showValues() {
//   //   var str = $( "form" ).serialize();
//   //   $( "#results" ).text( str );
//   // }
//   // $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
//   // $( "select" ).on( "change", showValues );
//   // showValues();

// });

var questions = [{
  "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
  "options": [{ "optionName": "Шығыс Қазақстан", "correct": false }, { "optionName": "Орталық Қазақстан", "correct": false }, { "optionName": "Арал маңы", "correct": true }, { "optionName": "Оңтүстік Қазақстан", "correct": false }, { "optionName": "Жетісу", "correct": false }]
}, {
  "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
  "options": [{ "optionName": "Шығыс Қазақстан", "correct": false }, { "optionName": "Орталық Қазақстан", "correct": false }, { "optionName": "Арал маңы", "correct": true }, { "optionName": "Оңтүстік Қазақстан", "correct": false }, { "optionName": "Жетісу", "correct": false }]
}];

var app = new Vue({
  el: '#app',
  data: {
    total: [],
    checkedOptions: [],
    questions: questions,
    activeElement: 0
  },
  methods: {
    sendAnswer: function sendAnswer() {
      this.total.push(this.checkedOptions);
      this.activeElement++;
      console.log(this.total);
    }
    // computed: {
    //   questionsFilter: function() {
    //     this.activeElement = 0
    //   }
    // }
  } });

// app.questionsFilter;