class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function numberGame($nums) {
        sort($nums);
        for ($i = 0; $i < count($nums); $i+=2){
            $temp = $nums[$i];
            $nums[$i] = $nums[$i+1];
            $nums[$i+1] = $temp;
        }
        return $nums;
    }
}