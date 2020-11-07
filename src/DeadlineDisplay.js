import React, {useRef, useEffect} from 'react'
import moment from 'moment';
var data = require('../docs/lab.json');

class inlineDeadlineDisplay extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.timeToDeadline = '';
    this.update();
    setInterval(this.update.bind(this), 1000);
  }

  update() {
    this.timeToDeadline = moment(moment(data.deadline).diff(moment())).format('DD:HH:mm:ss');

    this.shadow.innerHTML = `<div>До сдачи лабы: ${this.timeToDeadline}</div>`;
  }
}

export const RenderDisplay = () => {
  useEffect(() => {
    if (!window.customElements.get('inline-display')) {
        window.customElements.define('inline-display', inlineDeadlineDisplay)
    }
  }, [])

  const displayElement = useRef(null)
  return (
    <div>
      <inline-display ref={displayElement}></inline-display>
    </div>
  )
}

export default () => (
  <>
    <RenderDisplay />
  </>
)
