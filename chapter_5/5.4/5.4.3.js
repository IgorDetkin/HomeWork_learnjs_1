let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});


arr[2](); 
// непонятное задание. в качестве this в третьем элементе массива(тот что функция) 
// будет сам массив. Получается что такой вызов третьего элемента вызовет сам массив???