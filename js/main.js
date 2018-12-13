var questions = [
  {
    "id": "1",
    "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
    "type": "radio",
    "options": [
      {"optionName": "1Шығыс Қазақстан", "correct": false},
      {"optionName": "Орталық Қазақстан", "correct": false},
      {"optionName": "Арал маңы", "correct": true},
      {"optionName": "Оңтүстік Қазақстан", "correct": false},
      {"optionName": "Жетісу", "correct": false}
    ]
  },
  {
    "id": "2",
    "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
    "type": "radio",
    "options": [
      {"optionName": "2Шығыс Қазақстан", "correct": false},
      {"optionName": "Орталық Қазақстан", "correct": false},
      {"optionName": "Арал маңы", "correct": true},
      {"optionName": "Оңтүстік Қазақстан", "correct": false},
      {"optionName": "Жетісу", "correct": false}
    ]
  },
  {
    "id": "3",
    "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
    "type": "radio",
    "options": [
      {"optionName": "3Шығыс Қазақстан", "correct": false},
      {"optionName": "Орталық Қазақстан", "correct": false},
      {"optionName": "Арал маңы", "correct": true},
      {"optionName": "Оңтүстік Қазақстан", "correct": false},
      {"optionName": "Жетісу", "correct": false}
    ]
  },
  {
    "id": "4",
    "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
    "type": "checkbox",
    "options": [
      {"optionName": "4Шығыс Қазақстан", "correct": true},
      {"optionName": "Орталық Қазақстан", "correct": true},
      {"optionName": "Арал маңы", "correct": true},
      {"optionName": "Оңтүстік Қазақстан", "correct": false},
      {"optionName": "Жетісу", "correct": false}
    ]
  }
];

// Массив с выбранными ответами
var total = [];

var app = new Vue({
  el: '#app',
  data: {
    questions: questions,
    activeElement: 0
  },
  methods: {
    // Изменение радио и чекбоксов
    optionChange: function() {
      var options = document.getElementsByName('option' + this.activeElement);
      for (var i = 0; i < options.length; i++) {
        if (options[i].checked === true) {
          document.getElementById('send-answer').classList.remove('disabled');
        }
      }
    },
    // Нажатие на кнопку далее
    sendAnswer: function() {
      if (document.getElementById('send-answer').classList.contains('disabled') === false) {
        var options = document.getElementsByName('option' + this.activeElement);
        var checked = [];
        for (var i = 0; i < options.length; i++) {
          if (options[i].checked) {
            checked.push(i);
          }
          document.getElementById('send-answer').classList.add('disabled');
        }
        total.push({'id': questions[this.activeElement].id,'checkedOptions': checked});
        console.log(total);
        this.activeElement++;
      }
    }
  }
});








