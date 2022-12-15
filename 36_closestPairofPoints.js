function closestPairOfPoints(points) {
    // Sort the points by their x-coordinates (we will use this later for the divide and conquer)
    points.sort((a, b) => a.x - b.x);

    // Call the recursive helper function
    return findClosestPairHelper(points);
}

function findClosestPairHelper(points) {
    // Base case: if there are 2 or 3 points, compute the distance between them using brute force
    if (points.length <= 3) {
        let minDist = Infinity;
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                minDist = Math.min(minDist, calculateDistance(points[i], points[j]));
            }
        }
        return minDist;
    }

    // Divide: split the points into two halves
    let mid = Math.floor(points.length / 2);
    let leftPoints = points.slice(0, mid);
    let rightPoints = points.slice(mid);

    // Conquer: recursively find the closest pair in the left and right halves
    let leftMinDist = findClosestPairHelper(leftPoints);
    let rightMinDist = findClosestPairHelper(rightPoints);

    // Find the minimum distance between the two halves
    let minDist = Math.min(leftMinDist, rightMinDist);

    // Find the strip of points that are within minDist of the center line
    let strip = [];
    for (let i = 0; i < points.length; i++) {
        if (Math.abs(points[i].x - points[mid].x) < minDist) {
            strip.push(points[i]);
        }
    }

    // Sort the strip points by their y-coordinates
    strip.sort((a, b) => a.y - b.y);

    // Check for points in the strip that are closer than minDist
    for (let i = 0; i < strip.length; i++) {
        for (let j = i + 1; j < strip.length && (strip[j].y - strip[i].y) < minDist; j++) {
            minDist = Math.min(minDist, calculateDistance(strip[i], strip[j]));
        }
    }

    return minDist;
}

// Helper function to compute the distance between two points
function calculateDistance(p1, p2) {
    const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
    const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
    const dist = Math.sqrt(yDiffSquared + xDiffSquared);
    return Math.round(dist * 100);
}

let points = [
    [0, 0],
    [1, 3],
    [2, 2],
];
let output = closestPairOfPoints(points);
console.log(output);

points = [
    [0, 0],
    [0, 1],
    [0, 3],
    [0, 5],
];
output = closestPairOfPoints(points);
console.log(output);