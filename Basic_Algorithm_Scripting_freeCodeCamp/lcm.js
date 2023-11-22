//greatest common divisor (GCD)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// least common multiple (LCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Main function to find the smallest possible sum
function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    let multiple = arr[0];

    for (let i = arr[0] + 1; i <= arr[arr.length - 1]; i++) {
        multiple = lcm(multiple, i);
    }

    return multiple;
}

console.log(smallestCommons([5, 3]));
