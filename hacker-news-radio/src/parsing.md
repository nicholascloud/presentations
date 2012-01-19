# Parsing Hacker News

---

# Pynch

A clojure library to scrape/parse submission from hacker news. 

## Get the most recent submission

    !clojure
    (-> "http://news.ycombinator.com" java.net.URI. get-subs first)

    ;;;output
    
    {:points 120,
     :title "F.B.I. Seizes Web Servers, Knocking Sites Offline ",
     :sub-time #<DateTime 2011-06-22T00:08:00.000Z>,
     :sub-url "http://bits.blogs.nytimes.com/2011/06/21/f-b-i-seizes-web-servers-knocking-sites-offline/",
     :user "tshtf",
     :com-url "item?id=2680922",
     :com-count 66}

---

# Get submission details

    !clojure
    (-> "http://news.ycombinator.com/item?id=2681410"
                java.net.URI. get-sub-details)
    
    ;;;output
    
    ({:title "Brendan Eich: New JavaScript Engine Module Owner",
      :time #<DateTime 2011-06-22T03:17:00.000Z>,
      :points 20,
      :user "pufuwozu",
      :notes "\n",
      :com-url "item?id=2681410",
      :com-count 2,
      :comments
      ({:user "keyle",
        :time #<DateTime 2011-06-22T03:17:00.000Z>,
        :cmnt-url "item?id=2681497",
        :cmnt-text
        ("Is that likely to have a significant impact on the way we write Javascript today?")}
       {:user "wmf",
        :time #<DateTime 2011-06-22T03:24:00.000Z>,
        :cmnt-url "item?id=2681560",
        :cmnt-text
        ("No. JavaScript is (now) important enough that no one person has that much influence over it.")})})


---

# Enlive

Enlive is an extraction and transformation library for HTML and XML documents written in Clojure. It uses CSS-like selectors.

Usual Enlive applications include templating and screenscraping.

** Here is a very simple example to retreive list of submission titles
on hacker news **

    !clojure
     (map #(enlv/text %)    
       (enlv/select  
          (-> "http://news.ycombinator.com" java.net.URI. enlv/html-resource) 
       [:td.title :a]))

       ("Revolutionary \"Light Field\" camera tech - shoot-first, focus-later" 
        "F.B.I. Seizes Web Servers, Knocking Sites Offline " 
        "Please, make yourself uncomfortable" 
        "Pinboard.in service limited - FBI raided hosting company and pulled equpiment" 
        "Brendan Eich: New JavaScript Engine Module Owner" 
        "Comparing Indian states with countries" 
        "Impressions of Android from a dev's perspective" 
        "Firefox 5 is now officially released" 
        "5 Months of Customer Service Hell with HTC" 
        "Sony officially 50% of all GitHub's DMCA notices ")

---

# Select list of titles and submitters
 
    !clojure
    (enlv/let-select 
      (-> "http://news.ycombinator.com" java.net.URI. enlv/html-resource)
      [titles [:td.title :a]
       users [[:a (enlv/attr-starts :href "user")]]]
         (map #(hash-map :title (enlv/text %1) (enlv/text %2) titles users)))

    ;;; OUTPUT


    (({:title "Revolutionary \"Light Field\" camera tech - shoot-first, focus-later",
       :user "hugorodgerbrown"}
      {:title "F.B.I. Seizes Web Servers, Knocking Sites Offline ",
       :user "tshtf"}
      {:title "Please, make yourself uncomfortable", 
       :user "buf"}
      {:title "Pinboard.in service limited - FBI raided hosting company and pulled equpiment",
       :user "rograndom"}
      {:title "Brendan Eich: New JavaScript Engine Module Owner",
       :user "pufuwozu"}
      {:title "Comparing Indian states with countries", 
       :user "gopi"}))

---

# Diffbot

Diffbot Article API 

The Article API takes in as input any news story page. Statistical machine learning algorithms are run over all of the visual elements on the page to extract out the article text and associated metadata, such as its images, videos, and tags. If the article spans multiple pages, Diffbot will follow the next pages to get the whole article. There is also experimental support for extracting reader comments.

** Using diffbot-clj **

    !clojure
    (analyze
      "http://brendaneich.com/2011/06/new-javascript-engine-module-owner/"
      *token*)

    ;;; OUTPUT

    
    {:icon "http://brendaneich.com/favicon.ico",
     :author "Bill Joy",
     :text "As you may know, I wrote JavaScript in ten days.... (SHORTENDED BY JEFF FOR THIS PRESENTATION)"
     :title "New JavaScript Engine Module Owner",
     :date "21 June 2011",
     :url "http://brendaneich.com/2011/06/new-javascript-engine-module-owner/",
     :xpath "/HTML[1]/BODY[1]/DIV[1]/DIV[2]/DIV[1]/DIV[1]/DIV[3]"}
