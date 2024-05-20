class Solution {

    /**
     * @param String[] $words
     * @param String $x
     * @return Integer[]
     */
    function findWordsContaining($words, $x) {
        $result = array();
        for ($i = 0; $i < count($words); $i++) {
            if (str_contains($words[$i], $x)) {
                array_push($result, $i);
            }
        }
        return $result;
    }
}