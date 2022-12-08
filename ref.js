const initTree = (tree, arr, root, start, end) => {
    if (start === end) {
        tree[root] = start;
    } else {
        initTree(tree, arr, root * 2, start, Math.floor((start + end) / 2));
        initTree(tree, arr, root * 2 + 1, Math.floor((start + end) / 2) + 1, end);
        tree[root] = (arr[tree[root * 2]] < arr[tree[root * 2 + 1]]) ? tree[root * 2] : tree[root * 2 + 1];
    }
}

const query = (tree, arr, root, start, end, i, j) => {
    if (i > end || j < start) return -1;
    if (i <= start && end <= j) return tree[root];

    let min1 = query(tree, arr, 2 * root, start, Math.floor((start + end) / 2), i, j);
    let min2 = query(tree, arr, 2 * root + 1, Math.floor((start + end) / 2) + 1, end, i, j);

    if (min1 === -1) return min2;
    else if (min2 === -1) return min1;
    else return (arr[min1] < arr[min2]) ? min1 : min2;
}

const dc = (tree, histogram, start, end) => {
    if (start > end) return -1;
    let minIndex = query(tree, histogram, 1, 0, histogram.length - 1, start, end);
    let area = (end - start + 1) * histogram[minIndex];

    let max1 = dc(tree, histogram, start, minIndex - 1);
    let max2 = dc(tree, histogram, minIndex + 1, end);

    return Math.max(area, max1, max2);
}

const largestRectangularArea = function(histogram) {

    let height = Math.ceil(Math.log2(histogram.length));
    let size = (1 << (height + 1));
    let tree = new Array(size).fill(null);

    initTree(tree, histogram, 1, 0, histogram.length - 1);

    return dc(tree, histogram, 0, histogram.length - 1);
};