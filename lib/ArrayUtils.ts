/**
 * Create an integer array from start to end.
 * Value after decimal point is truncated.
 * @param start
 * @param end 
 */
export function range(start: number, end: number): number[] {
    start = Math.floor(start);
    end = Math.floor(end);

    const diff = end - start;
    if (diff === 0) {
        return [];
    }

    const keys = Array(Math.abs(diff) + 1).keys();
    return Array.from(keys).map(x => {
        const increment = end > start ? x : -x;
        return start + increment;
    });
}

/**
 * Create number array.
 * @param start 
 * @param end 
 * @param step Number to increment. If it's 0.1 the array example is [1, 1.1, 1.2]
 */
export function rangeByStep(start: number, end: number, step: number): number[] {
    if (end === start) {
        return [];
    }
    const stepNumOfDecimal = step.toString().split(".")[1]?.length || 0;
    const endNumOfDecimal = end.toString().split(".")[1]?.length || 0;

    const maxNumOfDecimal = Math.max(stepNumOfDecimal, endNumOfDecimal);
    const power = Math.pow(10, maxNumOfDecimal);
    const increment = end - start > 0 ? step : -step;
    const intEnd = Math.floor(end * power);

    const isFulFilled = end - start > 0 ?
        (current: number) => current > intEnd:
        (current: number) => current < intEnd

    const result = [];
    let current = start;
    while (true) {
        result.push(current);
        // to address floating value
        const intValue = Math.floor(current * power) + Math.floor(increment * power);
        current = intValue / power;
        if (isFulFilled(intValue)) {
            break;
        }
    }
    return result;
}