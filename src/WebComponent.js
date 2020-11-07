import React, {useRef, useEffect} from 'react'
import moment from 'moment';

/*
function displayDeadline() {
  let deadline = moment("2020-11-11");
  let timeToDeadline = moment(moment(deadline).diff(moment())).format('DD:HH:mm:ss');

  document.getElementById("heroTitle").textContent = "До конца лабы: " + timeToDeadline;
}

setInterval(displayDeadline, 1000);*/

class ImperativeCounter extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
    this.timeToDeadline = ''
    this.update()
    setInterval(this.update.bind(this), 1000);
  }

  update() {
    this.timeToDeadline = moment(moment("2020-11-11").diff(moment())).format('DD:HH:mm:ss');

    this.shadow.innerHTML = `<div>До сдачи лабы: ${this.timeToDeadline}</h2></div>`
  }
}

export const RenderCounter = () => {
  useEffect(() => {
    if (!window.customElements.get('i-counter')) {
        window.customElements.define('i-counter', ImperativeCounter)
    }
  }, [])

  const counterElement = useRef(null)
  return (
    <div>
      <i-counter ref={counterElement}></i-counter>
    </div>
  )
}

export default () => (
  <>
    <RenderCounter />
  </>
)
