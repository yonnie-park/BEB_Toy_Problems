const largestRectangularArea = function(histogram) {
    //구간트리 변형
    function getResult(histogram, left, right) {
        if (left === right) return histogram[left]
        const mid = Math.floor((left + right) / 2)
        let result = Math.max(getResult(histogram, left, mid), getResult(histogram, mid + 1, right))
        let low = mid
        let high = mid + 1
        let height = Math.min(histogram[low], histogram[high])
        result = Math.max(result, height * 2)

        while (low > left || high < right) {
            if (high < right && (low == left || histogram[low - 1] < histogram[high + 1])) {
                high++
                height = Math.min(height, histogram[high])
            } else {
                low--
                height = Math.min(height, histogram[low])
            }
            result = Math.max(result, height * (high - low + 1))
        }
        return result
    }
    return getResult(histogram, 0, histogram.length - 1)
};
let histogram = [6, 2, 5, 4, 5, 1, 6];
let output = largestRectangularArea(histogram);
console.log(output);