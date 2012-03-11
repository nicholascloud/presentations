window.syntax = window.syntax or {}
window.syntax.destructuring = ->
  
  ###
    Destructuring (i.e., pattern matching)
  ###
  
  console.title 'assigning multiple variables'
  [gold, silver, bronze] = ['Lydia', 'Thomas', 'Calvin']
  console.log "gold = #{gold}" # gold = Lydia
  console.log "silver = #{silver}" # silver = Thomas
  console.log "bronze = #{bronze}" # bronze = Calvin

  console.title 'swapping variable values'
  strong = 'steel'
  weak = 'paper'
  [strong, weak] = [weak, strong]
  console.log "strong = #{strong}" # strong = paper
  console.log "weak = #{weak}" # weak = steel
  
  console.title 'using splats for catchall variable assignment'
  [oldest, others...] = ['Rick', 'Shane', 'Lori', 'Carl']
  console.log "oldest = #{oldest}" # oldest = Rick
  console.log "others = #{others}" # others = Shane,Lori,Carl

  console.title 'using object patterns to assign properties to variables'
  credentials =
    username: 'user@website.com'
    password: '4*2hgG201_3='
    domain: 'website.com'
  {username: user, password: pass} = credentials
  console.log "user = #{user}" # user = user@website.com
  console.log "pass = #{pass}" # pass = 4*2hgG201_3=
  
  console.title 'using shorthand object patterns to assign properties to variables'
  movie =
    title: 'Memento'
    actors: ['Guy Pearce', 'Carrie Ann Moss']
    year: 2000
  {title, year} = movie
  console.log "title = #{title}" # title = Memento
  console.log "year = #{year}" # year = 2000
  
  console.title 'using object and array patterns together'
  tvshow =
    title: 'Big Bang Theory'
    seasons: [
      {
        number: 1
        episodes: ['Pilot', 'The Big Bran Hypothesis', 'The Fuzzy Boots Corollary']
      },
      {
        number: 2
        episodes: ['The Bad Fish Paradigm', 'The Codpiece Topology', 'The Barbarian Sublimation']
      }
    ]
    actors: ['Johnny Galecki', 'Jim Parsons', 'Kaley Cuoco']
  {seasons: [ {number: snum, episodes: eps} ]} = tvshow
  console.log "snum = #{snum}" # snum = 1
  console.log "eps = #{eps}" # eps = Pilot,The Big Bran Hypothesis,The Fuzzy Boots Corollary
  
  
