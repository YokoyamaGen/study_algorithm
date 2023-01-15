N = 100
cards = Array.new(N, false)

# iが増加する数値。jがスタートとなる数字
(2..N).each{|i|
  j = i - 1
  while(j < cards.size) do
    cards[j] = !cards[j]
    j += i
  end
}

N.times {|i|
  puts i + 1 if !cards[i]
}