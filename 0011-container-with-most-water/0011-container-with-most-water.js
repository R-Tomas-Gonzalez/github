/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let pointer1 = 0;
    let pointer2 = height.length - 1;

    let maxContainer = 0;

    while (pointer1 < pointer2) {
        let length = pointer2 - pointer1;
        let maxHeight = Math.min(height[pointer1], height[pointer2]);
        let area = maxHeight * length;

        maxContainer = Math.max(area, maxContainer);

        if (height[pointer1] < height[pointer2]) {
            pointer1++;
        } else {
            pointer2--;
        }
    }

    return maxContainer;
};


//length = pointer2 - pointer1;
//minHeight between two pointers;
// we need to calculate the area - length * minHeight;
// compare our maxContainer to the current area;


