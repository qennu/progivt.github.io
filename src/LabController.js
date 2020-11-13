var activeLab = {
    "name": "ЛР4. Циклы",
    "deadline": "2020-11-18 23:59",
    "url": "https://progivt.github.io/docs/js04loop",
    "path": "/docs/js04loop"
}; // можно допилить и стягивать с стороннего серва - ThePetrovich

import moment from 'moment-timezone';

export function getLabDeadline(labPath) {
    if (labPath === activeLab.path || labPath === 'main') {  
        if (moment.tz(activeLab.deadline, "Asia/Yakutsk").diff(moment.tz("Asia/Yakutsk")) > 0) {
            return activeLab.deadline;
        }
    }
    
    return '';
}

export function getLabData() {
    return activeLab;
}

export function dateFormat(input) {
    let days = input.substr(0, input.indexOf(':'));

    let mom = new moment(input.replace(days, ''), 'HH:mm:SS');

    mom.add(days, 'days');

    return mom.format('lll');
}