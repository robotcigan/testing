var questions = [
  {
    "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
    "type": "radio",
    "options": [
      {"optionName": "Шығыс Қазақстан", "correct": false},
      {"optionName": "Орталық Қазақстан", "correct": false},
      {"optionName": "Арал маңы", "correct": true},
      {"optionName": "Оңтүстік Қазақстан", "correct": false},
      {"optionName": "Жетісу", "correct": false}
    ]
  },
  {
    "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
    "type": "radio",
    "options": [
      {"optionName": "Шығыс Қазақстан", "correct": false},
      {"optionName": "Орталық Қазақстан", "correct": false},
      {"optionName": "Арал маңы", "correct": true},
      {"optionName": "Оңтүстік Қазақстан", "correct": false},
      {"optionName": "Жетісу", "correct": false}
    ]
  },
  {
    "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
    "type": "radio",
    "options": [
      {"optionName": "Шығыс Қазақстан", "correct": false},
      {"optionName": "Орталық Қазақстан", "correct": false},
      {"optionName": "Арал маңы", "correct": true},
      {"optionName": "Оңтүстік Қазақстан", "correct": false},
      {"optionName": "Жетісу", "correct": false}
    ]
  }
];

var total = [];

var app = new Vue({
  el: '#app',
  data: {
    questions: questions,
    activeElement: 0
  },
  methods: {
    optionChange: function() {
      var options = document.getElementsByName('option' + this.activeElement);
      for (var i = 0; i < options.length; i++) {
        // console.log(this.isActive)
        if (options[i].checked === true) {
          document.getElementById('send-answer').classList.remove('disabled');
        }
      }
    },
    sendAnswer: function() {
      if (document.getElementById('send-answer').classList.contains('disabled') === false) {
        var options = document.getElementsByName('option' + this.activeElement);
        for (var i = 0; i < options.length; i++) {
          if (options[i].checked) {
            total.push(i)
          }
          document.getElementById('send-answer').classList.add('disabled');
        }
        console.log(total)
        this.activeElement++;
      }
    }
  }
});








