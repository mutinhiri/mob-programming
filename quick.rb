def partition(array)
  # write your code here
  if array.length <= 1
    return array
  else
    pivot = array[0]
    array.delete_at(array.index(pivot))
    less = []
    greater = []

    array.each do |x|
      if x <= pivot
        less << x
      else 
        greater << x
      end
    end
    sorted_arr = []
    sorted_arr << less
    sorted_arr << pivot
    sorted_arr << greater
    sorted_arr.flatten!
  end
end

p partition([4, 5, 3, 9, 1])
# => [3, 1, 4, 5, 9]
