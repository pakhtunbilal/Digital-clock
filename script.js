function dbody(){
    const time= new Date().toLocaleTimeString();
    const date= new Date().toLocaleDateString();

  let t = document.getElementsByClassName("time")[0].innerHTML= time;
  let d = document.getElementsByClassName("date")[0].innerHTML= date;

}

setInterval(function () {
  dbody()
}, 1000)



