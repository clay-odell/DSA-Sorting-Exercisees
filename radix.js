function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits (nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);
    for (let j = 0; j < maxDigitCount; j++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], j);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

module.exports = {radixSort, mostDigits, digitCount, getDigit};