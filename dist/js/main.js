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
  "type": "radio",
  "options": [{ "optionName": "Шығыс Қазақстан", "correct": false }, { "optionName": "Орталық Қазақстан", "correct": false }, { "optionName": "Арал маңы", "correct": true }, { "optionName": "Оңтүстік Қазақстан", "correct": false }, { "optionName": "Жетісу", "correct": false }]
}, {
  "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
  "type": "radio",
  "options": [{ "optionName": "Шығыс Қазақстан", "correct": false }, { "optionName": "Орталық Қазақстан", "correct": false }, { "optionName": "Арал маңы", "correct": true }, { "optionName": "Оңтүстік Қазақстан", "correct": false }, { "optionName": "Жетісу", "correct": false }]
}, {
  "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
  "type": "radio",
  "options": [{ "optionName": "Шығыс Қазақстан", "correct": false }, { "optionName": "Орталық Қазақстан", "correct": false }, { "optionName": "Арал маңы", "correct": true }, { "optionName": "Оңтүстік Қазақстан", "correct": false }, { "optionName": "Жетісу", "correct": false }]
}];

var total = [];

var app = new Vue({
  el: '#app',
  data: {
    questions: questions,
    activeElement: 0
  },
  methods: {
    // optionClick: function() {
    //   var options = document.getElementsByName('option' + this.activeElement);
    //   for (var i = 0; i < options.length; i++) {
    //     console.log(this.isActive)
    //     if (options[i].checked === true) {
    //       this.isActive = !this.isActive;
    //     }
    //   }
    // },
    optionChange: function optionChange() {
      var options = document.getElementsByName('option' + this.activeElement);
      for (var i = 0; i < options.length; i++) {
        // console.log(this.isActive)
        if (options[i].checked === true) {
          document.getElementById('send-answer').classList.remove('disabled');
        }
      }
    },
    sendAnswer: function sendAnswer() {
      if (document.getElementById('send-answer').classList.contains('disabled') === false) {
        var options = document.getElementsByName('option' + this.activeElement);
        for (var i = 0; i < options.length; i++) {
          if (options[i].checked) {
            total.push(i);
          }
          document.getElementById('send-answer').classList.add('disabled');
        }
        console.log(total);
        this.activeElement++;
      }
    }
    // computed: {
    //   questionsFilter: function() {
    //     this.activeElement = 0
    //   }
    // }
  } });

// app.questionsFilter;