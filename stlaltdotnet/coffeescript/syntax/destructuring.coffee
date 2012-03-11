window.syntax = window.syntax or {}
window.syntax.destructuring = ->
  
  ###
    Destructuring (i.e., pattern matching)
  ###
  
  console.title 'assigning multiple variables'
  [gold, silver, bronze] = ['Lydia', 'Thomas', 'Calvin']
  console.log "gold = #{gold}"
  console.log "silver = #{silver}"
  console.log "bronze = #{bronze}"
  
  console.title 'swapping variable values'
  strong = 'steel'
  weak = 'paper'
  [strong, weak] = [weak, strong]
  console.log "strong = #{strong}"
  console.log "weak = #{weak}"
  
  console.title 'using splats for catchall variable assignment'
  [oldest, others...] = ['Rick', 'Shane', 'Lori', 'Carl']
  console.log "oldest = #{oldest}"
  console.log "others = #{others}"

  console.title 'using object patterns to assign properties to variables'
  credentials =
    username: 'user@website.com'
    password: '4*2hgG201_3='
    domain: 'website.com'
  {username: user, password: pass} = credentials
  console.log "user = #{user}"
  console.log "pass = #{pass}"
  
  console.title 'using shorthand object patterns to assign properties to variables'
  movie =
    title: 'Memento'
    actors: ['Guy Pearce', 'Carrie Ann Moss']
    year: 2000
  {title, year} = movie
  console.log "title = #{title}"
  console.log "year = #{year}"
  
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
  console.log "snum = #{snum}"
  console.log "eps = #{eps}"
  
  
