function solution(arr1, arr2) {
    const answer = arr1.map((value1, index1) => {
    return value1.map((value2, index2) => value2 + arr2[index1][index2]);
    });
    return answer;
}