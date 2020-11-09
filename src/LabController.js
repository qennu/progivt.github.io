var activeLab = {
    "name": "ЛР3. Простые ветвления",
    "deadline": "2020-11-11",
    "url": "https://git.io/JT5Gs",
    "path": "/docs/js03if"
}; // можно допилить и стягивать с стороннего серва - ThePetrovich

import moment from 'moment';

export function getLabDeadline(labPath) {
    if (labPath === activeLab.path || labPath === 'main') {  
        if (moment(activeLab.deadline).diff(moment()) > 0) {
            return activeLab.deadline;
        }
    }
    
    return '';
}

export function getLabData() {
    return activeLab;
}