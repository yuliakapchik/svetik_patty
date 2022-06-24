const listTab = document.querySelectorAll('.catalog-tab');    
const listContent = document.querySelectorAll('.catalog-items');    
let tabName;    

listTab.forEach(item => {                        
  item.addEventListener('click', selectListTab)     //при клике на одну из кнопок выполняется функция selectListTab
});

function selectListTab() {
  listTab.forEach(item => {                        //перебираем кнопки
    item.classList.remove('tab-active');                //если у какой-то кнопки был присвоен класс tab-active - удаляем его
  });
  this.classList.add('tab-active');                    //добавляем класс tab-active
  tabName = this.getAttribute('data-type');          //записываем в переменную tabName дата-атрибут кнопки, на которую кликнули
  selectListContent(tabName);                     //выполняется функция selectListContent(tabName)
}

function selectListContent(tabName) {
  listContent.forEach(item => {                   //перебираем контент (дивы с картинками)
    // если есть записанный дата-атрибут, то диву с картинками добавляем класс is-active, если нет - удаляем класс
    item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
  })
}