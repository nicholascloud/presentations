window.syntax = window.syntax or {}
window.syntax.array = ->
  
  ###
    Arrays
  ###
  
  console.title 'array'
  a = [1, 2, 3, 4, 5]
  console.log a
  
  console.title 'array index'
  a = [1, 2, 3, 4, 5]
  i = a[1] #2
  console.log i
  
  console.title 'testing for value in array'
  a = [1, 2, 3, 4, 5]
  console.log 'true' if 5 in a
  
  ###
    Ranges
  ###
  
  console.title 'range, inclusive'
  r = [1..5]
  console.log r
  
  console.title 'range, exclusive'
  r = [1...5] # 5 ommitted
  console.log r
  
  console.title 'reversed range, inclusive'
  r = [5..1]
  console.log r
  
  console.title 'reversed range, exclusive'
  r = [5...1] # 1 ommitted
  console.log r
  
  ###
    Slicing
  ###
  
  console.title 'slicing with index and length'
  a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'].slice 1, 3
  console.log a
  
  console.title 'slicing with range, inclusive'
  a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'][1..3]
  console.log a
  
  console.title 'slicing with range, exclusive'
  a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'][1...3]
  console.log a
  
  console.title 'slicing with reversed range produces empty array'
  a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'][3..1]
  console.log a
  
  console.title 'slicing with a negative final index'
  a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'][1..-1]
  console.log a #Mars, Saturn, Venus
  
  console.title 'slicing by ommmitting final index'
  a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'][1..]
  console.log a #Mars, Saturn, Venus, Mercury
  
  ###
    Splicing
  ###
  
  console.title 'splicing by specifying a range for replacement'
  a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure']
  a[2..4] = ['Ruby']
  console.log a
  
  console.title 'splice the rest of the array by removing the final index'
  a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure']
  a[2..] = ['Ruby', 'JavaScript']
  console.log a
  
  ###
    Iteration
  ###
  
  console.title 'iterating over an array'
  a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure']
  for lang in a
    console.log lang
    
  console.title 'iterating over an array conditionally'
  a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure']
  for lang in a when lang[0] == 'P'
    console.log lang
  
  console.title 'iterating over an array with step value'
  a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure']
  for lang in a by 2
    console.log lang
