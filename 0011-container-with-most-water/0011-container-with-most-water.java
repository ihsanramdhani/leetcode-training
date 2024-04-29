class Solution {
    public int maxArea(int[] height) {
        int area = 0;
        int result = 0;

        for (int i = 0; i < height.length; i++){
            for (int j = 0; j < height.length; j++) {
                if (i != j) {
                    result = Math.abs(i-j) * Math.min(height[i], height[j]);

                    area = Math.max(area, result);
                }
            }
        }
        return area;
    }
}