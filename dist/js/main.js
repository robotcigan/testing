'use strict';

// var questions = [
//   {
//     "id": "4",
//     "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
//     "type": "checkbox",
//     "options": [
//       {"optionName": "4Шығыс Қазақстан", "correct": true},
//       {"optionName": "Орталық Қазақстан", "correct": true},
//       {"optionName": "Арал маңы", "correct": true},
//       {"optionName": "Оңтүстік Қазақстан", "correct": false},
//       {"optionName": "Жетісу", "correct": false}
//     ]
//   },
//   {
//     "id": "1",
//     "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
//     "type": "radio",
//     "options": [
//       {"optionName": "1Шығыс Қазақстан", "correct": false},
//       {"optionName": "Орталық Қазақстан", "correct": false},
//       {"optionName": "Арал маңы", "correct": true},
//       {"optionName": "Оңтүстік Қазақстан", "correct": false},
//       {"optionName": "Жетісу", "correct": false}
//     ]
//   },
//   {
//     "id": "2",
//     "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
//     "type": "radio",
//     "options": [
//       {"optionName": "2Шығыс Қазақстан", "correct": false},
//       {"optionName": "Орталық Қазақстан", "correct": false},
//       {"optionName": "Арал маңы", "correct": true},
//       {"optionName": "Оңтүстік Қазақстан", "correct": false},
//       {"optionName": "Жетісу", "correct": false}
//     ]
//   },
//   {
//     "id": "3",
//     "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
//     "type": "radio",
//     "options": [
//       {"optionName": "3Шығыс Қазақстан", "correct": false},
//       {"optionName": "Орталық Қазақстан", "correct": false},
//       {"optionName": "Арал маңы", "correct": true},
//       {"optionName": "Оңтүстік Қазақстан", "correct": false},
//       {"optionName": "Жетісу", "correct": false}
//     ]
//   },
//   {
//     "id": "4",
//     "question": "Тегістегіш-жоңғыштар кездесетін неолиттік Қараүңгір тұрағы табылған аймақ",
//     "type": "checkbox",
//     "options": [
//       {"optionName": "4Шығыс Қазақстан", "correct": true},
//       {"optionName": "Орталық Қазақстан", "correct": true},
//       {"optionName": "Арал маңы", "correct": true},
//       {"optionName": "Оңтүстік Қазақстан", "correct": false},
//       {"optionName": "Жетісу", "correct": false}
//     ]
//   }
// ];

// var questions = [];

// Массив с выбранными ответами
var checkedRight = [];
var total = [];
var scoreCount = 0;

var app = new Vue({
  el: '#app',
  data: {
    questions: [],
    // questions: questions,
    activeElement: 0
  },
  methods: {
    // Изменение радио и чекбоксов
    optionChange: function optionChange() {
      var options = document.getElementsByName('option' + this.activeElement);
      // Перебираем опшины, чтобы найти активный, чтобы можно было включить кнопку далее
      for (var i = 0; i < options.length; i++) {
        if (options[i].checked === true) {
          document.getElementById('send-answer').classList.remove('disabled');
        }
      }
    },
    // Нажатие на кнопку далее
    sendAnswer: function sendAnswer() {
      // Если кнопка не содержит класс disabled т.е. включена
      if (document.getElementById('send-answer').classList.contains('disabled') === false) {
        // Options опшины в чекбоксах и радио
        var options = document.getElementsByName('option' + this.activeElement);
        var checked = [];
        var score = this.questions[this.activeElement].options;
        var allScore = 0;
        var checkedRight = 0;
        // Смотрим сколько всего правильных ответов в вопросе
        for (var a = 0; a < score.length; a++) {
          if (score[a].correct === true) {
            allScore++;
          }
        }
        // Циклом находим выбранные опшины и записываем их в массив выбранных
        for (var i = 0; i < options.length; i++) {
          // Сколько правильных ответов выбранных человеком
          if (options[i].checked) {
            checked.push(i);
            if (score[i].correct === true) {
              checkedRight++;
            }
          }
          // Отключаем кнопку
          document.getElementById('send-answer').classList.add('disabled');
        }
        // Система e-балл.
        // Если правильных ответов 1, то за 1 правильный 1 балл
        // Если правильных ответов 2, то за 1 правильный 1 балл, за 2 — 2
        // Если правильных ответов 3, то за 1 правильный 0 баллов, за 2 правильных 1 балл, за 2 правильных 2
        switch (allScore) {
          case 1:
            if (checkedRight === 1) {
              scoreCount++;
            }
            break;
          case 2:
            if (checkedRight === 1) {
              scoreCount++;
            }
            if (checkedRight === 2) {
              scoreCount = scoreCount + 2;
            }
            break;
          case 3:
            if (checkedRight === 2) {
              scoreCount++;
            }
            if (checkedRight === 3) {
              scoreCount = scoreCount + 2;
            }
            break;
        }
        console.log('всего правильных ответо', allScore);
        console.log('количество выбранных правильно', checkedRight);
        console.log('баллов набрал', scoreCount);
        // Записываем итоги
        total.push({ 'id': this.questions[this.activeElement].id, 'checkedOptions': checked });
        console.log('total', total);
        // Переключаем на следующий вопрос
        this.activeElement++;
      }
    }
  },
  computed: {
    // Получение вопросов через api
    getQuestions: function getQuestions() {
      var that = this;
      axios.get('http://kuznetsovdev.ru/api/questions?id=2').then(function (response) {
        that.questions = response.data;
        console.log(that.questions);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

app.getQuestions;