/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let pointer1 = 0;
    let pointer2 = height.length - 1;
    
    let max = 0;

    while (pointer1 < pointer2) {
        let length = pointer2 - pointer1;
        let maxHeight = Math.min(height[pointer1], height[pointer2]);

        let area = length * maxHeight;

        max = Math.max(max, area);

        if (height[pointer1] < height[pointer2]) {
            pointer1++;
        } else {
            pointer2--;
        }
    }

    return max;
    
};


// we need to calculate the area - length times height;

//length = pointer2 - pointer1
//maxHeight = Math.max(height(pointer1), height(pointer2));

