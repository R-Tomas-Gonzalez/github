/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let pointer1 = 0;
        let pointer2 = matrix[i].length - 1;

        while (pointer1 <= pointer2) {
            let mid = Math.floor((pointer2 + pointer1) / 2);

            if (matrix[i][mid] < target) {
                pointer1 = mid + 1;
            } else if (matrix[i][mid] > target) {
                pointer2 = mid - 1;
            } else {
                return true
            }
        }
    }

    return false;
};