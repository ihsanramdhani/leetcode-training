class Solution {

    /**
     * @param String[] $words
     * @param String $x
     * @return Integer[]
     */
    function findWordsContaining($words, $x) {
        $result = array();
        for ($i = 0; $i < count($words); $i++) {
            $chars = str_split($words[$i]);
            foreach ($chars as $char) {
                if ($char == $x) {
                    array_push($result, $i);
                    break;
                }
            }
        }

        return $result;
    }
}