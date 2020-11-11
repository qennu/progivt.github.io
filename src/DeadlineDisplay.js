import React, {useRef, useEffect} from 'react';
import moment from 'moment-timezone';
import {getLabDeadline, dateFormat} from './LabController.js';
import NoSSR from '@mpth/react-no-ssr';

const isServer = () => typeof window === 'undefined';

export default class DeadlineDisplay extends React.Component {
  constructor() {
    super();

    this.deadline = '';
    this.timeToDeadline = '';
    this.labPath = '';
    this.htmlText = 'Время вышло, лаба окончена!';

    this.updateInterval = null;
  }

  componentDidMount() {
    this.labPath = window.location.pathname;
    this.deadline = getLabDeadline(this.labPath);

    console.log(this.deadline);
    console.log(this.labPath);

    this.update();
    if (!this.updateInterval) {
      this.updateInterval = setInterval(this.update.bind(this), 1000);
    }

  }

  update() {
    if (this.deadline != '') {
      let deadlineM = moment.tz(this.deadline, "Asia/Yakutsk");
      let timeNow = moment().tz("Asia/Yakutsk");

      this.htmlText = 'До сдачи лабы: ' + String(deadlineM.diff(timeNow, 'days')) + ' дн. ' + String(moment(deadlineM.diff(timeNow)).format('HH:mm:ss'));
    }
    else {
      this.htmlText = 'Время вышло, лаба окончена!';
    }
    this.forceUpdate();
  }

  render() {
    return <div>{this.htmlText}</div>;
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }
} 