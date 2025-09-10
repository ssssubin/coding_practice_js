function solution(n)
{
    const answer = n.toString().split("").reduce((arr, value) => arr + Number(value), 0);

    return answer;
}