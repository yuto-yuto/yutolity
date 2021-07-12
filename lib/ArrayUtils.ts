/**
 * Create an integer array from start to end.
 * Value after decimal point is truncated.
 * @param start
 * @param end 
 */
export function range(start: number, end: number): number[] {
    start = Math.trunc(start);
    end = Math.trunc(end);

    const diff = end - start;
    if (diff === 0) {
        return [0];
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
    if (end === start || step === 0) {
        return [start];
    }
    if (step < 0) {
        step = -step;
    }

    const stepNumOfDecimal = step.toString().split(".")[1]?.length || 0;
    const endNumOfDecimal = end.toString().split(".")[1]?.length || 0;
    const maxNumOfDecimal = Math.max(stepNumOfDecimal, endNumOfDecimal);
    const power = Math.pow(10, maxNumOfDecimal);
    const diff = Math.abs(end - start);
    const count = Math.trunc(diff / step + 1);
    step = end - start > 0 ? step : -step;

    const intStart = Math.trunc(start * power);
    return Array.from(Array(count).keys())
        .map(x => {
            const increment = Math.trunc(x * step * power);
            const value = intStart + increment;
            return Math.trunc(value) / power;
        });
}
