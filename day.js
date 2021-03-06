function getDayInfo(date) {
    let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Декабря"];
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let week = getWeek(newDate);
    let day = getDay(newDate);
    let result = (`${daysOfWeek[day]}, ${week} неделя ${months[month]} ${year} года`);
    alert(result);
    return result
  }
  
  function getWeek(someDate) {
    let endTime = new Date(someDate);
    let startTime = new Date(someDate.getFullYear(), someDate.getMonth() ,1);
    let numberOfDays = Math.floor((endTime - startTime) / (24 * 60 * 60 * 1000));
    let res = Math.ceil(( endTime.getDay() + 1 + numberOfDays) / 7);
    return res;
  }
  
  function getDay(data) {
    let day = data.getDay();
    if (day == 0) {
      day = 7;
    }
    return day;
  }
  
  getDayInfo('01.01.2022');