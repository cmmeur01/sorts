const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    
    return maxDigits;
}

function radixSort(arr) {
    if (!Array.isArray(arr)) return null;
    if (arr.length <= 1) return arr;
    let result = Array.from(arr);

    let maxdigits = getMaxDigits(arr);

    for(let i = 0; i < maxdigits; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        result.forEach(el => {
            buckets[getDigitFrom(el, i)].push(el);
        });
        result = [].concat(...buckets);
    }

    return result;
}



module.exports = {
    radixSort
};