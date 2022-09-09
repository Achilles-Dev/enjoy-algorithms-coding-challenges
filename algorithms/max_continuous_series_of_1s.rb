# Brute force solution using nested loops
def max_consective_one(array, zero_flips)
  n = array.length
  max_one_count = 0
  (0...n).each do |i|
    count_zeros = 0
    (i..n).each do |j|
      next unless (array[j]).zero?

      count_zeros += 1
      break if count_zeros > zero_flips
    end
    max_one_count = [max_one_count, (j - (i + 1)) + 1].max
  end
  max_one_count
end

# Efficient solution using sliding window technique
def max_consective_one_update(array, zero_flips)
  n = array.length
  max_one_count = 0
  zero_count = 0
  left_end = 0
  (0...n).each do |right_end|
    zero_count += 1 if (array[right_end]).zero?
    if zero_count > zero_flips
      zero_count -= 1 if (array[left_end]).zero?
      left_end += 1
    end
    max_one_count = [max_one_count, ((right_end - left_end) + 1)].max
  end
  max_one_count
end

p max_consective_one_update([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 2)

p max_consective_one_update([1, 1, 0, 1, 0, 1, 0, 0, 1], 1)
