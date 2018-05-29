class DateHelper {

    constructor() {
        throw new Error('Dont\'t permitted instancing DateHelper');
    }

    static dateToString(date) {
        if (!DateHelper._validateDate(date)) {
            throw new Error('Invalid date format');
        }
        return `${date.getDay}/${date.getMonth}/${date.getFullYear}`;
    }

    static stringToDate(date) {
        if (!DateHelper._validateDate(date)) {
            throw new Error('Invalid date format');
        }
        return new Date(...
            date.split('-')
                .map((data, i) => data - i % 2)
        );
    }

    static _validateDate(date) {
        let valid = false;
        if ((date instanceof Date) || /^\d{4}-\d{2}-\d{2}$/.test(date)) {
            valid = true;
        }
        return valid;
    }
}