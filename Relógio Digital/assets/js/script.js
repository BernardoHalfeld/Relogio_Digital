const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const dia_semana = document.getElementById('dia_semana');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

const data = setInterval(function time(){
    const dateToday2 = new Date();
    let d = dateToday2.getDate();
    let ds = dateToday2.getDay();
    let m = dateToday2.getMonth();
    let a = dateToday2.getUTCFullYear();

    m = m+1;

    if(ds == 0)ds = 'Domingo';
    if(ds == 1)ds = 'Segunda-Feira';
    if(ds == 2)ds = 'Terça-Feira';
    if(ds == 3)ds = 'Quarta-Feira';
    if(ds == 4)ds = 'Quinta-Feira';
    if(ds == 5)ds = 'Sexta-Feira';
    if(ds == 6)ds = 'Sábado';
    
    if(m < 10) m = '0' + m;
    if(d < 10) d = '0' + d;

    dia_semana.textContent = ds;
    dia.textContent = d + '/';
    mes.textContent = m + '/';
    ano.textContent = a;
})