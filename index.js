const hours = document.querySelector('.hodyn');
const minutes = document.querySelector('.protokol');
const seconds = document.querySelector('.sekume');

const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');
function setDate() {
  const now = new Date();
   
  // Теперь с устройства нужно получать информацию о месяце, дне, году.
  const mm = now.getMonth();
  const dd = now.getDate();
  const yyyy = now.getFullYear();
   
  //Теперь информация о секундах, мин, часах должна быть получена с устройства.
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours();
   
  //Я сохранил названия всех месяцев в константе с именем "monthName"
  const monthName = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];

  //Ноль будет добавлен, когда время будет ниже 10.
   
  //В результате время всегда будет состоять из двух символов.
  if (hrs < 10) {
  hours.innerHTML = '0' + hrs;
  } else {
  hours.innerHTML = hrs;
  }

  if (secs < 10) {
  seconds.innerHTML = '0' + secs;
  } else {
  seconds.innerHTML = secs;
  }

  if (mins < 10) {
  minutes.innerHTML = '0' + mins;
  } else {
  minutes.innerHTML = mins;
  }

  month.innerHTML = monthName[mm];
  day.innerHTML = dd;
  year.innerHTML = yyyy;
}
   
//1 секунда = 1000 миллисекунд
setInterval(setDate, 1000);