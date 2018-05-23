function formatNumber (n) {
  const str = n.toString()
  // return str[1] ? str : `0${str}`
  return str;
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatDate (date) {
  let noon = "a.m";
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  let hour = date.getHours()
  let minute = date.getMinutes()
  const second = date.getSeconds()
  if(date.getHours() > 12){
     hour = date.getHours() -12
      noon = "p.m"
  }
  console.log(hour)
  if(minute < 10){

    minute = '0' + minute.toString();

  }
  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute].map(formatNumber).join(':')

  return `${noon} ${t2}`
}
export default {
  formatNumber,
  formatTime,
  formatDate
}
