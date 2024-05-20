class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function numberGame($nums) {
        $arr = array();

        for($i = 0; $i < count($nums);){
            $alice = min($nums);
            $aliceIdx = array_search($alice, $nums);

            array_splice($nums, $aliceIdx, 1);

            $bob = min($nums);
            $bobIdx = array_search($bob, $nums);

            array_splice($nums, $bobIdx, 1);

            array_push($arr, $bob, $alice);
        }

        return $arr;
    }
}