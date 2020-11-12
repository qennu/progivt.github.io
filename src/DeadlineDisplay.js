import React from 'react';
import moment from 'moment-timezone';
import {getLabDeadline} from './LabController.js';

export default class DeadlineDisplay extends React.Component {
  constructor() {
    super();

    this.deadline = '';
    this.htmlText = 'Время вышло, лаба окончена!';
    this.deadlineM = 0;

    this.updateInterval = null;
  }

  componentDidMount() {
    this.update();
    if (!this.updateInterval) {
      this.updateInterval = setInterval(this.update.bind(this), 1000);
    }
  }

  update() {
    this.deadline = getLabDeadline(window.location.pathname);

    if (this.deadline != '') {
      this.deadlineM = moment.tz(this.deadline, "Asia/Yakutsk");
      this.htmlText = 'До сдачи лабы: ' + this.deadlineM.diff(moment(), 'days') + ' дн. ' + moment.utc(this.deadlineM.diff(moment())).format('HH:mm:ss');
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