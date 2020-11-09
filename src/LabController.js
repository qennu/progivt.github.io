var activeLab = {
    "name": "ЛР3. Простые ветвления",
    "deadline": "2010-11-11",
    "url": "https://git.io/JT5Gs",
    "path": "/docs/js03if"
} // можно допилить и стягивать с стороннего серва - ThePetrovich

export function getLabDeadline(labPath) {
    if (labPath === activeLab.path || labPath === 'main') {  
        return activeLab.deadline;
    }
    
    return '';
}