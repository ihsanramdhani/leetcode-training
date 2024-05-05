class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        for($i = 1; $i < count($nums); $i++){
            if ($nums[$i] == $nums[$i-1]){
                array_splice($nums, $i, 1);
                $i--;
            }
        }

        return count($nums);
        
    }
}