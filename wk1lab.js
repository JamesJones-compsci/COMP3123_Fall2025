function capFirstLetter(str){
    return str
        .split(" ")
        .map(str => str.charAt(0).toUpperCase() + str.slice(1))
        .join(" ");
}

console.log("\n--- Exercise 1 ---");
console.log(capFirstLetter("hello world from javascript"));
console.log(capFirstLetter("full stack development intro to mern stack"))


function maxNum(a, b, c){
    return Math.max(a, b, c);
}

console.log("\n--- Exercise 2 ---");
console.log(maxNum (1,0,1));
console.log(maxNum (0,-10,-20));
console.log(maxNum (1000,510,440));


function wordJumble(str){
    if (str.length < 3) return str;

    let lastThreeChars = str.slice(-3);

    let remainingChars = str.slice(0, str.length - 3);

    return lastThreeChars + remainingChars;
}

console.log("\n--- Exercise 3 ---");
console.log(wordJumble("Python"));
console.log(wordJumble("JavaScript"));
console.log(wordJumble("Hi"));


function findAngleType(angle){

    if (angle < 90){
        return "Acute angle";
    } else if (angle === 90){
        return "Right angle";
    } else if (angle > 90 && angle < 180){
        return "Obtuse angle";
    } else if (angle === 180){
        return "Straight angle";
    } else {
        return "Not supported";
    }
}

console.log("\n--- Exercise 4 ---");
console.log(findAngleType(47))
console.log(findAngleType(90))
console.log(findAngleType(145))
console.log(findAngleType(180))


function max_sum(arr, k){
    let maxSum = 0;

    for (let i = 0; i <= arr.length - k; i++){

        let currentSum = 0;
        for (let j = i; j < i + k; j++){
            currentSum += arr[j];
        }
        if (currentSum > maxSum){
            maxSum = currentSum;
        }
    }
    return maxSum;
}

console.log("\n--- Exercise 5 ---");
console.log(max_sum([1, 2, 3, 14, 5], 2))
console.log(max_sum([2, 3, 5, 1, 6], 3))
console.log(max_sum([9, 3, 5, 1, 7], 2))





