const array = [4, 2, 1, 2, 1];
const singleNumber = (nums) => {
  return nums.reduce((acc, curr) => acc ^ curr, 0);
};
