const mergeSortedArray = (nums1, m, nums2, n) => {
  // n is ignored because nums1 length is m + n
  nums1.splice(m, nums1.length - m, ...nums2);
  return nums1.sort((a, b) => a - b);
};