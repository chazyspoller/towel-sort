
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    matrix = matrix.map((arr, i) => i % 2 ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b));
    return matrix.flat();
}
