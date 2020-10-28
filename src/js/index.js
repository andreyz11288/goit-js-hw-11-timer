// import Markup from '../handlebars/hendel.hbs'
const body = document.querySelector('body')


    
//     body.innerHTML = `<div class="timer" id="timer-1">
//     <div class="field">
//         <span class="value" data-value="days">${days}</span>
//         <span class="label">Days</span>
//     </div>

//     <div class="field">
//         <span class="value" data-value="hours">${hours}</span>
//         <span class="label">Hours</span>
//     </div>

//     <div class="field">
//         <span class="value" data-value="mins">${mins}</span>
//         <span class="label">Minutes</span>
//     </div>

//     <div class="field">
//         <span class="value" data-value="secs">${secs}</span>
//         <span class="label">Seconds</span>
//     </div>
// </div>`



// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const targetDate = new Date('Jul 17, 2021')
console.log(targetDate)
const startTime = Date.now()
setInterval(() => {
   const currentTime = Date.now()
    const time = targetDate.getTime() - currentTime   
    const { days, hours, mins, secs } = component(time)
    body.innerHTML = `<div class="timer" id="timer-1">
    <div class="field">
        <span class="value" data-value="days">${days}</span>
        <span class="label">Days</span>
    </div>

    <div class="field">
        <span class="value" data-value="hours">${hours}</span>
        <span class="label">Hours</span>
    </div>

    <div class="field">
        <span class="value" data-value="mins">${mins}</span>
        <span class="label">Minutes</span>
    </div>

    <div class="field">
        <span class="value" data-value="secs">${secs}</span>
        <span class="label">Seconds</span>
    </div>
</div>`
}, 1000)



function component (time) {
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    
    return { days, hours, mins, secs }; 
}
