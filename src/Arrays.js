/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let numbers = data.split(',').map((e) => Number(e));

    numbers.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });

    return numbers.reduce((c, n) => `${c},${n}`);
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    return data.filter((e) => e < 100);
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let getNextIndex = getCounter(0);
    let result = [];

    for (let i = 0; i < array1.length; i++) {
        let index = getNextIndex();
        result[index] = array1[i];
        index = getNextIndex();
        result[index] = array2[i];
    }

    return result;
}

/**
 * Замыкание, возвращающее счетчик
 * @param {Number} start Первое значение счетчика
 * @returns функция, возвращающая следующее значение счетчика
 */
function getCounter(start) {
    return function () {
        return start++;
    };
}
