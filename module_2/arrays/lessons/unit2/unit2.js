const getWeekends = (option = 'long') => {
    if (option === 'short') {
        return [
            'sat',
            'sun',
        ];
    } else {
        return [
            'saturday',
            'sunday',
        ];
    }
};
export { getWeekends };

