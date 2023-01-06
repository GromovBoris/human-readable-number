module.exports = function toReadable(number) {
    let numberArr = Array.from(String(number));
    let numberArrNew = numberArr.map(Number);
    let digitsQuantity = String(number).length;
    // console.log(numberArrNew);
    let digits = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let tensPlus = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let answer = "";

    if (number == 0) {
        answer = "zero";
    } else {
        if (digitsQuantity == 1) {
            answer = answer + digits[number - 1];
        } else if (digitsQuantity == 2) {
            if (numberArrNew[1] == 0) {
                answer = answer + tens[numberArrNew[0] - 1];
            } else if (numberArrNew[0] > 0 && numberArrNew[0] < 2) {
                answer = answer + tensPlus[numberArrNew[1]];
            } else {
                answer =
                    answer +
                    tens[numberArrNew[0] - 1] +
                    " " +
                    digits[numberArrNew[1] - 1];
            }
        } else if (digitsQuantity == 3) {
            if (numberArrNew[1] > 0 && numberArrNew[1] < 2) {
                answer =
                    answer +
                    digits[numberArrNew[0] - 1] +
                    " hundred " +
                    tensPlus[numberArrNew[2]];
            } else if (numberArrNew[1] == 0 && numberArrNew[2] == 0) {
                answer = answer + digits[numberArrNew[0] - 1] + " hundred";
            } else if (numberArrNew[2] == 0) {
                answer =
                    answer +
                    digits[numberArrNew[0] - 1] +
                    " hundred " +
                    tens[numberArrNew[1] - 1];
            } else if (numberArrNew[1] == 0) {
                answer =
                    answer +
                    digits[numberArrNew[0] - 1] +
                    " hundred " +
                    digits[numberArrNew[2] - 1];
            } else {
                answer =
                    answer +
                    digits[numberArrNew[0] - 1] +
                    " hundred " +
                    tens[numberArrNew[1] - 1] +
                    " " +
                    digits[numberArrNew[2] - 1];
            }
        }
    }
    return answer;
    // console.log(answer);
};
// toReadable(17);
