
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let result = [];
	if (Array.isArray(matrix) && matrix.length > 0) {
		for (let i = 0; i < matrix.length; i++){
			if (i % 2 == 0) {
				result = result.concat(matrix[i]);
			} else {
				result = result.concat(matrix[i].reverse());
			}
		}
		return result;
	} else
		return []
}
