import Markup from '../handlebars/hendel.hbs'
const body = document.querySelector('body')


body.innerHTML = `<div class="timer" id="timer-1">
    <div class="field">
        <span class="value" data-value="days">11</span>
        <span class="label">Days</span>
    </div>

    <div class="field">
        <span class="value" data-value="hours">11</span>
        <span class="label">Hours</span>
    </div>

    <div class="field">
        <span class="value" data-value="mins">11</span>
        <span class="label">Minutes</span>
    </div>

    <div class="field">
        <span class="value" data-value="secs">11</span>
        <span class="label">Seconds</span>
    </div>
</div>`



new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

const days = Math.floor(time / (1000 * 60 * 60 * 24));

const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));


const secs = Math.floor((time % (1000 * 60)) / 1000);