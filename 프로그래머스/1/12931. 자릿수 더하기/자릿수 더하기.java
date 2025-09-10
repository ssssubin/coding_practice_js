import java.util.*;

public class Solution {
    public int solution(int n) {
        String answer[] = Integer.toString(n).split("");
        int sum = 0;
        for(int i = 0; i < answer.length; i++){
            sum += Integer.parseInt(answer[i]);
        }

        return sum;
    }
}