const canAllocate = (mid, jobs, workersNum) => {
    let sum = 0;
    let cnt = 1;
    for (let i = 0; i < jobs.length; i++) {
        if (sum + jobs[i] <= mid) {
            sum += jobs[i];
            continue;
        } else {
            sum = jobs[i];
            cnt++;
            if (cnt > workersNum) return 0;
        }
    }

    return 1;
}

const jobAllocation = function(jobs, workersNum) {
    const MAXSUM = Number.MAX_SAFE_INTEGER;

    let left = 0;
    right = MAXSUM;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canAllocate(mid, jobs, workersNum)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
};

let jobs = [1, 2, 3, 4, 5, 6, 7];
let workersNum = 3;
let output = jobAllocation(jobs, workersNum);
console.log(output); // --> 11 (1, 2, 3, 4 / 5, 6 / 7)