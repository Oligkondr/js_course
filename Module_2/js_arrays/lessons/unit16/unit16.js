const bubbleSort = (array) => {
    let steps = array.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i <steps; i += 1) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        steps -= 1;
    } while (swapped);
    return array;
};

export default bubbleSort;