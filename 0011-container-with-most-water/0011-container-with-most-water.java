class Solution {
    public int maxArea(int[] height) {
        int max = 0;
        int result = 0;
        int left = 0;
        int right = height.length -1;

        while (left < right){
            result = (right-left) * Math.min(height[left], height[right]);
            max = Math.max(max, result);

            if (height[left] > height[right]){
                right--;
            } else if (height[left] < height[right]){
                left++;
            } else {
                right--;
                left++;
            }
        }

        return max;
    }
}