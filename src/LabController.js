var activeLab = {
    "name": "ЛР3. Простые ветвления",
    "deadline": "2020-11-11 23:59",
    "url": "https://git.io/JT5Gs",
    "path": "/docs/js03if"
}; // можно допилить и стягивать с стороннего серва - ThePetrovich

import moment from 'moment-timezone';

export function getLabDeadline(labPath) {
    if (labPath === activeLab.path || labPath === 'main') {  
        if (moment.tz(activeLab.deadline, "Asia/Yakutsk").diff(moment().tz("Asia/Yakutsk")) > 0) {
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