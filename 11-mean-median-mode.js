function getMean(arr) {
  return arr.reduce((sum, curr) => sum += curr, 0) / arr.length;
}

function getMedian(arr) {
  arr.sort((a, b) => a > b);
  if ((arr.length % 2) === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
}

function getMode(arr) {
  var obj = {};
  var modes = [];
  var maxCount = 0;
  arr.forEach(e => {
    obj[e] ? obj[e]++ : obj[e] = 1;
    if (obj[e] > maxCount) {
      modes = [e];
      maxCount = obj[e];
    }
    if (obj[e] === maxCount && modes.indexOf(e) == -1) {
      modes.push(e);
    }
  });
  if (modes.length === Object.keys(obj).length) modes = [];
  return modes;
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}


console.log(meanMedianMode([1, 1, 3, 3, 4, 4, 5, 5, 6]))