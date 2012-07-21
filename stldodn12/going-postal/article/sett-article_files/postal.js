  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>ifandelse/postal.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="nZvXm6Oa2rny90vmogV0T3YCKtqo+Sr5LMf6Duwvf5s=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-4c194894b379d6fdb7a613036af861b77a9c4e74.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-e17dce3302d1555fb7085ae56a67b682adb649da.css" media="screen" rel="stylesheet" type="text/css" />
    
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-41bb9f3a8ce0b760dd1d2428c5727a0cec9bf9bd.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-7a6eaa82419e37bc465df3c6051faaa13cd6a7d3.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f'>
    <meta property="og:title" content="postal.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/ifandelse/postal.js"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1338956357"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="postal.js - JavaScript pub/sub library supporting some advanced subscription features, plus message capture and replay"/>

    <meta name="description" content="postal.js - JavaScript pub/sub library supporting some advanced subscription features, plus message capture and replay" />

  <link href="https://github.com/ifandelse/postal.js/commits/master.atom" rel="alternate" title="Recent Commits to postal.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  windows vis-public env-production ">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/organizations/elsevier-ptg-gep">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1338956357" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1338956357" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1338956357" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1338956357" />
          </a>



              
    <div class="topsearch  ">
        <form accept-charset="UTF-8" action="/search" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon mini-icon-advanced-search"></span></a>
  <div class="search placeholder-field js-placeholder-field">
    <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" data-hotkey="s" />
    <div id="my-repos-autocomplete" class="autocomplete-results">
      <ul class="js-navigation-container"></ul>
    </div>
    <input type="submit" value="Search" class="button">
    <span class="mini-icon mini-icon-search-input"></span>
  </div>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/nicholascloud"><img height="20" src="https://secure.gravatar.com/avatar/effcd0e6eb810c7536a339e22326d1a4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/nicholascloud" class="name">nicholascloud</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon mini-icon-create"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon mini-icon-notifications"></span>
          <span class="unread_count">36</span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account Settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign Out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">



          <li class="js-toggler-container js-social-container watch-button-container on">
            <span class="watch-button"><a href="/ifandelse/postal.js/toggle_watch" class="minibutton btn-watch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow">Watch</a><a class="social-count js-social-count" href="/ifandelse/postal.js/watchers">94</a></span>
            <span class="unwatch-button"><a href="/ifandelse/postal.js/toggle_watch" class="minibutton btn-unwatch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow">Unwatch</a><a class="social-count js-social-count" href="/ifandelse/postal.js/watchers">94</a></span>
          </li>

              <li>
                <a href="/nicholascloud/postal.js" class="minibutton btn-fork js-toggler-target lighter" rel="nofollow">Your Fork</a><a href="/ifandelse/postal.js/network" class="social-count">7</a>
              </li>

    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/ifandelse" class="url fn" itemprop="url" rel="author">              <span itemprop="title">ifandelse</span>
              </a></span> /
            <strong><a href="/ifandelse/postal.js" class="js-current-repository">postal.js</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/ifandelse/postal.js" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/ifandelse/postal.js/network" highlight="repo_network">Network</a>
    <li><a href="/ifandelse/postal.js/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/ifandelse/postal.js/issues" highlight="repo_issues">Issues <span class='counter'>2</span></a></li>

      <li><a href="/ifandelse/postal.js/wiki" highlight="repo_wiki">Wiki</a></li>

    <li><a href="/ifandelse/postal.js/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>

  </ul>
      <div id="repo_details" class="metabox clearfix
        not-editable">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

      <div class="repo-desc-homepage">
        
    <div class="repository-lang-stats">
      <div class="repository-lang-stats-graph">
      <span class="language-color" style="width:99.9%; background-color:#f15501;" itemprop="keywords">JavaScript</span><span class="language-color" style="width:0.1%; background-color:#5861ce;" itemprop="keywords">Shell</span>
      </div>
      <ol class="list-tip">
        <li>
            <a href="/languages/JavaScript">
              <span class="color-block language-color" style="background-color:#f15501;"></span>
              <span class="lang">JavaScript</span>
              <span class="percent">99.9%</span>
            </a>
        </li>
        <li>
            <a href="/languages/Shell">
              <span class="color-block language-color" style="background-color:#5861ce;"></span>
              <span class="lang">Shell</span>
              <span class="percent">0.1%</span>
            </a>
        </li>
      </ol>
    </div>

<div id="repository_description" class="repository-description">
    <p>JavaScript pub/sub library supporting some advanced subscription features, plus message capture and replay
      <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
    </p>
</div>


<div class="repository-homepage" id="repository_homepage">
  <p><a href="http://freshbrewedcode.com/jimcowart" rel="nofollow">http://freshbrewedcode.com/jimcowart</a></p>
</div>


      </div>

      <div class="edit-repo-desc-homepage" style="display:none">
<form accept-charset="UTF-8" action="/ifandelse/postal.js/admin/update_meta" id="js-update-repo-meta-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="nZvXm6Oa2rny90vmogV0T3YCKtqo+Sr5LMf6Duwvf5s=" /></div>          <p class="error" style="display:none">Sorry, but there was a problem saving your changes.</p>
          <div>
            <input type="text" id="repository-description-field" class="description-field" name="repo_description" value="JavaScript pub/sub library supporting some advanced subscription features, plus message capture and replay" placeholder="Add a description to this repository" />

            <input type="text" id="repository-homepage-field" class="homepage-field" name="repo_homepage" value="http://freshbrewedcode.com/jimcowart" placeholder="Add a website to this repository" />
          </div>

          <button type="submit" class="classy save-button">Save Changes</button>
          <p class="cancel"><a href="#" class="danger">Cancel</a></p>
</form>      </div>

      
<div class="url-box">
  <ul class="native-clones">
      <li><a href="http://windows.github.com" class="minibutton btn-windows ">Clone in Windows</a></li>
      <li><a href="/ifandelse/postal.js/zipball/master" class="minibutton btn-download " rel="nofollow" title="Download this repository as a zip file">ZIP</a>
  </ul>

  <ul class="clone-urls">
    <li class="http_clone_url selected"><a href="https://github.com/ifandelse/postal.js.git" class="js-git-protocol-selector" data-permission="Read-Only" data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">HTTP</a></li>

<li class="public_clone_url"><a href="git://github.com/ifandelse/postal.js.git" class="js-git-protocol-selector" data-permission="Read-Only" data-url="/users/set_protocol?protocol_selector=gitweb&amp;protocol_type=clone">Git Read-Only</a></li>
  </ul>
  <input type="text" spellcheck="false" class="url-field" value="https://github.com/ifandelse/postal.js.git">
  <span class="js-clippy mini-icon mini-icon-clippy url-box-clippy" data-clipboard-text="https://github.com/ifandelse/postal.js.git" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
  <p class="url-description"><span class="bold js-clone-url-permission">Read-Only</span> access</p>
</div>

    </div>

<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/ifandelse/postal.js/tree-list/31002ebf6d23e085e6b690d19e389fedc986a88f"
      data-blob-url-prefix="/ifandelse/postal.js/blob/31002ebf6d23e085e6b690d19e389fedc986a88f"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/ifandelse/postal.js">postal.js</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/ifandelse/postal.js/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/ifandelse/postal.js/tags" class="" highlight="repo_tags">Tags <span class="counter">6</span></a></li>
    <li><a href="/ifandelse/postal.js/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
           <span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
          <div class="context-title">Switch branches/tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/aggregate" class="js-navigation-open" data-name="aggregate" rel="nofollow">aggregate</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/master" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/unsub" class="js-navigation-open" data-name="unsub" rel="nofollow">unsub</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/v0.6.0_RC" class="js-navigation-open" data-name="v0.6.0_RC" rel="nofollow">v0.6.0_RC</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/v0.6.4" class="js-navigation-open" data-name="v0.6.4" rel="nofollow">v0.6.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/v0.6.3" class="js-navigation-open" data-name="v0.6.3" rel="nofollow">v0.6.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/v0.6.2" class="js-navigation-open" data-name="v0.6.2" rel="nofollow">v0.6.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/v0.6.1" class="js-navigation-open" data-name="v0.6.1" rel="nofollow">v0.6.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/v0.6.0" class="js-navigation-open" data-name="v0.6.0" rel="nofollow">v0.6.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/ifandelse/postal.js/tree/v0.4.4" class="js-navigation-open" data-name="v0.4.4" rel="nofollow">v0.4.4</a>
                  </h4>
                </div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/ifandelse/postal.js" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/ifandelse/postal.js/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/ifandelse/postal.js/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">4</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          







    
  <p class="last-commit"><span class="mini-icon mini-icon-time"></span> Latest commit to the <strong>master</strong> branch</p>

<div class="commit commit-tease js-details-container">
  <p class="commit-title ">
      <a href="/ifandelse/postal.js/commit/31002ebf6d23e085e6b690d19e389fedc986a88f" class="message">Merge pull request </a><a class="issue-link" href="https://github.com/ifandelse/postal.js/issues/5" title=".gitignore edited for .DS_Store">#5</a><a href="/ifandelse/postal.js/commit/31002ebf6d23e085e6b690d19e389fedc986a88f" class="message"> from legomaster/remove-ds-store</a>
      <span class="hidden-text-expander inline"><a href="javascript:;" class="js-details-target">…</a></span>
  </p>
    <div class="commit-desc"><pre>.gitignore edited for .DS_Store</pre></div>
  <div class="commit-meta">
    <a href="/ifandelse/postal.js/commit/31002ebf6d23e085e6b690d19e389fedc986a88f" class="sha-block">commit <span class="sha">31002ebf6d</span></a>
    <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="31002ebf6d23e085e6b690d19e389fedc986a88f" data-copied-hint="copied!" data-copy-hint="Copy SHA"></span>

    <div class="authorship">
      <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/06454c973abbe733f1d5125ea6fbddfc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" />
      <span class="author-name"><a href="/ifandelse" rel="author">ifandelse</a></span>
      authored <time class="js-relative-date updated" datetime="2012-07-03T11:55:04-07:00" title="2012-07-03 11:55:04">July 03, 2012</time>

    </div>
  </div>
</div>



  <div id="slider">
      <div class="breadcrumb" data-path="/">
        <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f" class="js-rewrite-sha" itemprop="url"><span itemprop="title">postal.js</span></a></b> / 
      </div>

        

  <div class="frames">
    <div class="frame frame-center" data-path="/" data-permalink-url="/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f" data-title="ifandelse/postal.js · GitHub" data-type="tree" data-cached-commit-url="/ifandelse/postal.js/cache/commits/31002ebf6d23e085e6b690d19e389fedc986a88f?commit_sha=31002ebf6d23e085e6b690d19e389fedc986a88f&amp;path=">
      <div class="bubble tree-browser-wrapper">
      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <thead>
        <tr class="header">
          <th></th>
          <th>name</th>
          <th>age</th>
          <th>
            <div class="history">
              <a href="/ifandelse/postal.js/commits/master/" rel="nofollow">history</a>
            </div>
            message
          </th>
        </tr>
        </thead>
        <tbody>

          <tr class="alt">
            <td class="icon"> <span class="mini-icon mini-icon-directory"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f/example" class="js-slide-to js-rewrite-sha" id="1a79a4d60de6718e8e5b326e338ae533-4f048182755356d17591ca8a4ffb26f36c5f14db">example</a></td>
            <td class="age">  </td>
            <td class="message"> <span class="js-loading-commit-data">Loading commit data... <img alt="Octocat-spinner-16px-grey" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-16px-grey.gif?1329872729" /></span> </td>
          </tr>
          <tr class="">
            <td class="icon"> <span class="mini-icon mini-icon-directory"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f/ext" class="js-slide-to js-rewrite-sha" id="abf77184f55403d75b9d51d79162a7ca-b29185b798e7cde9844efb4aea34bca5c3f9beec">ext</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="alt">
            <td class="icon"> <span class="mini-icon mini-icon-directory"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f/lib" class="js-slide-to js-rewrite-sha" id="e8acc63b1e238f3255c900eed37254b8-04c18e91e8c5157d070c6f41f98db9474a1ca521">lib</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="">
            <td class="icon"> <span class="mini-icon mini-icon-directory"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f/node_modules" class="js-slide-to js-rewrite-sha" id="3ec03583f8eaec275cb2183db769ff47-2135599f1f640286135f9bc391683eb58cff78e2">node_modules</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="alt">
            <td class="icon"> <span class="mini-icon mini-icon-directory"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f/spec" class="js-slide-to js-rewrite-sha" id="b979c2934ac0b4ba3f08dabfdd1b2299-076f506f024bf1201a53f1d3e83d3346fd0d2048">spec</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="">
            <td class="icon"> <span class="mini-icon mini-icon-directory"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/tree/31002ebf6d23e085e6b690d19e389fedc986a88f/src" class="js-slide-to js-rewrite-sha" id="25d902c24283ab8cfbac54dfa101ad31-9473ce425c303dae1e2a63b7256c2acedd75fff7">src</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="alt">
            <td class="icon"> <span class="mini-icon mini-icon-text-file"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/blob/31002ebf6d23e085e6b690d19e389fedc986a88f/.gitignore" class="js-slide-to js-rewrite-sha" id="a084b794bc0759e7a6b77810e01874f2-064481543accb51a629cfd2bf1472b62581e1959">.gitignore</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="">
            <td class="icon"> <span class="mini-icon mini-icon-text-file"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/blob/31002ebf6d23e085e6b690d19e389fedc986a88f/README.md" class="js-slide-to js-rewrite-sha" id="04c6e90faac2675aa89e2176d2eec7d8-7afb129216cb55fe40d45b4a89edade4a74fda7f">README.md</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="alt">
            <td class="icon"> <span class="mini-icon mini-icon-text-file"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/blob/31002ebf6d23e085e6b690d19e389fedc986a88f/build-all.sh" class="js-slide-to js-rewrite-sha" id="26f15a216b5c1eac9bbe8b7b93e81446-5a877ba7c229922d06c0fa16ad911bfd09412301">build-all.sh</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="">
            <td class="icon"> <span class="mini-icon mini-icon-text-file"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/blob/31002ebf6d23e085e6b690d19e389fedc986a88f/build-browser.json" class="js-slide-to js-rewrite-sha" id="30fcba513cfd9fcbe5a31d4950b5349e-45b8f5006bdf9cda56f19c76396df4a8fe04518d">build-browser.json</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="alt">
            <td class="icon"> <span class="mini-icon mini-icon-text-file"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/blob/31002ebf6d23e085e6b690d19e389fedc986a88f/nodetesthost.js" class="js-slide-to js-rewrite-sha" id="44073183c9df92ffe4f5a9ece3555c46-076e6f4a0770f1359501f063c1df9e9e38310fc6">nodetesthost.js</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
          <tr class="">
            <td class="icon"> <span class="mini-icon mini-icon-text-file"></span> </td>
            <td class="content"> <a href="/ifandelse/postal.js/blob/31002ebf6d23e085e6b690d19e389fedc986a88f/pavlov" class="js-slide-to js-rewrite-sha" id="5aea7b3525195c8b4af9dc652cc6199b-884259e8f110c540d68b6b51294e93bc8f6c166d">pavlov</a></td>
            <td class="age">  </td>
            <td class="message">  </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="announce instapaper_body md" data-path="/" id="readme"><span class="name"><span class="mini-icon mini-icon-readme"></span> README.md</span><article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="postaljs" class="anchor" href="#postaljs"><span class="mini-icon mini-icon-link"></span></a>Postal.js</h1>

<h2>
<a name="version-063-dual-licensed-mit--gpl" class="anchor" href="#version-063-dual-licensed-mit--gpl"><span class="mini-icon mini-icon-link"></span></a>Version 0.6.3 (Dual Licensed <a href="http://www.opensource.org/licenses/mit-license">MIT</a> &amp; <a href="http://www.opensource.org/licenses/gpl-license">GPL</a>)</h2>

<h2>
<a name="what-is-it" class="anchor" href="#what-is-it"><span class="mini-icon mini-icon-link"></span></a>What is it?</h2>

<p>Postal.js is an in-memory message bus - very loosely inspired by <a href="http://www.amqp.org/">AMQP</a> - written in JavaScript.  Postal.js runs in the browser, or on the server-side using Node.js. It takes a familiar "eventing-style" paradigm most JavaScript developers are already used to and extends it by providing "broker" and subscriber implementations which are more sophisticated than what you typically find in simple event delegation.</p>

<h2>
<a name="why-would-i-use-it" class="anchor" href="#why-would-i-use-it"><span class="mini-icon mini-icon-link"></span></a>Why would I use it?</h2>

<p>Using a local message bus can enable to you de-couple your web application's components in a way not possible with other 'eventing' approaches.  In addition, strategically adopting messaging at the 'seams' of your application (e.g. - between modules, at entry/exit points for browser data and storage) can not only help enforce better overall architectural design, but also insulate you from the risks of tightly coupling your application to 3rd party libraries.  For example:</p>

<ul>
<li>If you're using a client-side binding framework, and either don't have - or don't like - the request/communication abstractions provided, then grab a library like <a href="http://amplifyjs.com">amplify.js</a> or <a href="https://github.com/ded/reqwest">reqwest</a>.  Then, instead of tightly coupling the two, have the request success/error callbacks publish messages with the appropriate data and any subscribers you've wired up can handle applying the data to the specific objects/elements they're concerned with.</li>
<li>Do you need two view models to communicate, but you don't want them to need to know about each other?  Have them subscribe to the topics about which they are interested in receiving messages.  From there, whenever a view model needs to alert any listeners of specific data/events, just publish a message to the bus.  If the other view model is present, it will receive the notification.</li>
<li>Want to wire up your own binding framework?  Want to control the number of times subscription callbacks get invoked within a given time frame? Want to keep subscriptions from being fired until after data stops arriving? Want to keep events from being acted upon until the UI event loop is done processing other events?  Postal.js gives you the control you need in these kinds of scenarios via the options available on the <code>SubscriptionDefinition</code> object.</li>
<li>postal.js is extensible.  Custom channels can be added - for example - to allow postal to communicate with other postal.js instances over websockets.  Plugins like <a href="https://github.com/ifandelse/postal.when">postal.when</a> can be included to provide even more targeted functionality to subscribers.  These - and more - are all things Postal can do for you.</li>
</ul><h2>
<a name="philosophy" class="anchor" href="#philosophy"><span class="mini-icon mini-icon-link"></span></a>Philosophy</h2>

<p>Postal.js is in good company - there are many options for &lt;airquotes&gt;pub/sub&lt;/airquotes&gt; in the browser.  However, I grew frustrated with most of them because they often closely followed an event-delegation-paradigm, instead of providing a structured in-memory message bus.  Central to postal.js are three concepts:</p>

<ul>
<li>channels should be provided to allow for logical partitioning of "topics"</li>
<li>topcis should be hierarchical and allow plain string or wildcard bindings</li>
<li>messages should include envelope metadata</li>
</ul><h3>
<a name="channels-wat" class="anchor" href="#channels-wat"><span class="mini-icon mini-icon-link"></span></a>Channels? WAT?</h3>

<p>A channel is a logical partition of topics.  Conceptually, it's like a dedicated highway for a specific set of communication.  At first glance it might seem like that's overkill for an environment that runs in an event loop, but it actually proves to be quite useful.  Every library has architectural opinions that it either imposes or nudges you toward.  Channel-oriented messaging nudges you to separate your communication by bounded context, and enables the kind of fine-tuned visibility you need into the interactions between components as your application grows.</p>

<h3>
<a name="hierarchical-topics" class="anchor" href="#hierarchical-topics"><span class="mini-icon mini-icon-link"></span></a>Hierarchical Topics</h3>

<p>In my experience, seeing publish and subscribe calls all over application logic is usually a strong code smell.  Ideally, the majority of message-bus integration should be concealed within application infrastructure.  Having a hierarchical-wildcard-bindable topic system makes it very easy to keep things concise (especially subscribe calls!).  For example, if you have a module that needs to listen to every message published on the ShoppingCart channel, you'd simply subscribe to "*", and never have to worry about additional subscribes on that channel again - even if you add new messages in the future.  If you need to capture all messages with ".validation" at the end of the topic, you'd simply subscribe to "*.validation".  If you needed to target all messages with topics that started with "Customer.", ended with ".validation" and had only one period-delimited segment in between, you'd subscribe to "Customer.#.validation" (thus your subscription would capture Customer.address.validation and Customer.email.validation").</p>

<h2>
<a name="how-do-i-use-it" class="anchor" href="#how-do-i-use-it"><span class="mini-icon mini-icon-link"></span></a>How do I use it?</h2>

<p>Here are four examples of using Postal.  All of these examples - AND MORE! - can run live here: <a href="http://jsfiddle.net/ifandelse/FdFM3/">http://jsfiddle.net/ifandelse/FdFM3/</a> (Please bear in mind this fiddle is pulling the postal lib from github, so running these in IE will not work due to the mime type mismatch.)</p>

<p>JavaScript:</p>

<div class="highlight">
<pre><span class="c1">// The world's simplest subscription</span>
<span class="c1">// doesn't specify a channel name, so it defaults to "/" (DEFAULT_CHANNEL)</span>
<span class="kd">var</span> <span class="nx">channel</span> <span class="o">=</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"Name.Changed"</span> <span class="p">}</span> <span class="p">);</span>

<span class="c1">// this call is identical to the one above</span>
<span class="kd">var</span> <span class="nx">channel</span> <span class="o">=</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="s2">"Name.Changed"</span> <span class="p">)</span>

<span class="c1">// To specify a channel name you can do one of the following</span>
<span class="kd">var</span> <span class="nx">channel</span> <span class="o">=</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">channel</span><span class="o">:</span> <span class="s2">"MyChannel"</span><span class="p">,</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"MyTopic"</span> <span class="p">}</span> <span class="p">);</span>
<span class="kd">var</span> <span class="nx">channel</span> <span class="o">=</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="s2">"MyChannel"</span><span class="p">,</span><span class="s2">"MyTopic"</span> <span class="p">);</span>


<span class="c1">// subscribe</span>
<span class="kd">var</span> <span class="nx">subscription</span> <span class="o">=</span> <span class="nx">channel</span><span class="p">.</span><span class="nx">subscribe</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">envelope</span> <span class="p">)</span> <span class="p">{</span>
    <span class="nx">$</span><span class="p">(</span> <span class="s2">"#example1"</span> <span class="p">).</span><span class="nx">html</span><span class="p">(</span> <span class="s2">"Name: "</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">name</span> <span class="p">);</span>
<span class="p">});</span>

<span class="c1">// And someone publishes a first name change:</span>
<span class="nx">channel</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">name</span><span class="o">:</span> <span class="s2">"Dr. Who"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">subscription</span><span class="p">.</span><span class="nx">unsubscribe</span><span class="p">();</span>
</pre>
</div>


<h3>
<a name="subscribing-to-a-wildcard-topic-using-" class="anchor" href="#subscribing-to-a-wildcard-topic-using-"><span class="mini-icon mini-icon-link"></span></a>Subscribing to a wildcard topic using #</h3>

<p>The <code>#</code> symbol represents "one word" in a topic (i.e - the text between two periods of a topic). By subscribing to <code>"#.Changed"</code>, the binding will match <code>Name.Changed</code> &amp; <code>Location.Changed</code> but <em>not</em> <code>Changed.Companion</code>.</p>

<div class="highlight">
<pre><span class="kd">var</span> <span class="nx">hashChannel</span> <span class="o">=</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"#.Changed"</span> <span class="p">}</span> <span class="p">),</span>
    <span class="nx">chgSubscription</span> <span class="o">=</span> <span class="nx">hashChannel</span><span class="p">.</span><span class="nx">subscribe</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span>
        <span class="nx">$</span><span class="p">(</span> <span class="s1">'&lt;li&gt;'</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">+</span> <span class="s2">" Changed: "</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">value</span> <span class="o">+</span> <span class="s1">'&lt;/li&gt;'</span> <span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span> <span class="s2">"#example2"</span> <span class="p">);</span>
    <span class="p">});</span>
<span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"Name.Changed"</span> <span class="p">}</span> <span class="p">)</span>
      <span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">"Name"</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"John Smith"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="s2">"Location.Changed"</span> <span class="p">)</span>
      <span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">"Location"</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="s2">"Early 20th Century England"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">chgSubscription</span><span class="p">.</span><span class="nx">unsubscribe</span><span class="p">();</span>
</pre>
</div>


<h3>
<a name="subscribing-to-a-wildcard-topic-using--1" class="anchor" href="#subscribing-to-a-wildcard-topic-using--1"><span class="mini-icon mini-icon-link"></span></a>Subscribing to a wildcard topic using *</h3>

<p>The <code>*</code> symbol represents any number of characters/words in a topic string. By subscribing to <code>"DrWho.*.Changed"</code>, the binding will match <code>DrWho.NinthDoctor.Companion.Changed</code> &amp; <code>DrWho.Location.Changed</code> but <em>not</em> <code>Changed</code>.</p>

<div class="highlight">
<pre><span class="kd">var</span> <span class="nx">starChannel</span> <span class="o">=</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">channel</span><span class="o">:</span> <span class="s2">"Doctor.Who"</span><span class="p">,</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"DrWho.*.Changed"</span> <span class="p">}</span> <span class="p">),</span>
    <span class="nx">starSubscription</span> <span class="o">=</span> <span class="nx">starChannel</span><span class="p">.</span><span class="nx">subscribe</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span>
        <span class="nx">$</span><span class="p">(</span> <span class="s1">'&lt;li&gt;'</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">+</span> <span class="s2">" Changed: "</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">value</span> <span class="o">+</span> <span class="s1">'&lt;/li&gt;'</span> <span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span> <span class="s2">"#example3"</span> <span class="p">);</span>
    <span class="p">});</span>
<span class="cm">/*</span>
<span class="cm">  Demonstrating how we're re-using the channel declared above to publish, but overriding the topic</span>
<span class="cm">  in the second argument.  Note to override the topic, you have to use the "envelope" structure,</span>
<span class="cm">  which means an object like:</span>

<span class="cm">  { channel: "myChannel", topic: "myTopic", data: { someProp: "SomeVal, moarData: "MoarValue" } };</span>

<span class="cm">  The only thing to note is that since we are publishing from a channel definition, you don't need</span>
<span class="cm">  to pass "channel" (in fact, it would be ignored)</span>
<span class="cm">*/</span>
<span class="nx">starChannel</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"DrWho.NinthDoctor.Companion.Changed"</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">"Name"</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Rose"</span>   <span class="p">}</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">starChannel</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"DrWho.TenthDoctor.Companion.Changed"</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">"Name"</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Martha"</span> <span class="p">}</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">starChannel</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"DrWho.Eleventh.Companion.Changed"</span><span class="p">,</span>    <span class="nx">data</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">"Name"</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Amy"</span>    <span class="p">}</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">starChannel</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"DrWho.Location.Changed"</span><span class="p">,</span>              <span class="nx">data</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">"Location"</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="s2">"The Library"</span> <span class="p">}</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">starChannel</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"TheMaster.DrumBeat.Changed"</span><span class="p">,</span>          <span class="nx">data</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">"DrumBeat"</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="s2">"This won't trigger any subscriptions"</span> <span class="p">}</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">starChannel</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"Changed"</span><span class="p">,</span>                             <span class="nx">data</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s2">"Useless"</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="s2">"This won't trigger any subscriptions either"</span> <span class="p">}</span> <span class="p">}</span> <span class="p">);</span>

<span class="nx">starSubscription</span><span class="p">.</span><span class="nx">unsubscribe</span><span class="p">();</span>
</pre>
</div>


<h3>
<a name="applying-distinctuntilchanged-to-a-subscription" class="anchor" href="#applying-distinctuntilchanged-to-a-subscription"><span class="mini-icon mini-icon-link"></span></a>Applying distinctUntilChanged to a subscription</h3>

<div class="highlight">
<pre><span class="kd">var</span> <span class="nx">dupChannel</span> <span class="o">=</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"WeepingAngel.*"</span> <span class="p">}</span> <span class="p">),</span>
    <span class="nx">dupSubscription</span> <span class="o">=</span> <span class="nx">dupChannel</span><span class="p">.</span><span class="nx">subscribe</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span>
                          <span class="nx">$</span><span class="p">(</span> <span class="s1">'&lt;li&gt;'</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">value</span> <span class="o">+</span> <span class="s1">'&lt;/li&gt;'</span> <span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span> <span class="s2">"#example4"</span> <span class="p">);</span>
                      <span class="p">}).</span><span class="nx">distinctUntilChanged</span><span class="p">();</span>
<span class="c1">// demonstrating multiple channels per topic being used</span>
<span class="c1">// You can do it this way if you like, but the example above has nicer syntax (and *much* less overhead)</span>
<span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"WeepingAngel.DontBlink"</span> <span class="p">}</span> <span class="p">)</span>
      <span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Don't Blink"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"WeepingAngel.DontBlink"</span> <span class="p">}</span> <span class="p">)</span>
      <span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Don't Blink"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"WeepingAngel.DontEvenBlink"</span> <span class="p">}</span> <span class="p">)</span>
      <span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Don't Even Blink"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"WeepingAngel.DontBlink"</span> <span class="p">}</span> <span class="p">)</span>
      <span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Don't Close Your Eyes"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"WeepingAngel.DontBlink"</span> <span class="p">}</span> <span class="p">)</span>
      <span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Don't Blink"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">postal</span><span class="p">.</span><span class="nx">channel</span><span class="p">(</span> <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="s2">"WeepingAngel.DontBlink"</span> <span class="p">}</span> <span class="p">)</span>
      <span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span> <span class="nx">value</span><span class="o">:</span><span class="s2">"Don't Blink"</span> <span class="p">}</span> <span class="p">);</span>
<span class="nx">dupSubscription</span><span class="p">.</span><span class="nx">unsubscribe</span><span class="p">();</span>
</pre>
</div>


<h2>
<a name="more-references" class="anchor" href="#more-references"><span class="mini-icon mini-icon-link"></span></a>More References</h2>

<p>Please visit the <a href="https://github.com/ifandelse/postal.js/wiki">postal.js wiki</a> for API documentation, discussion of concepts and links to blogs/articles on postal.js.</p>

<h2>
<a name="how-can-i-extend-it" class="anchor" href="#how-can-i-extend-it"><span class="mini-icon mini-icon-link"></span></a>How can I extend it?</h2>

<p>There are four main ways you can extend Postal:</p>

<ul>
<li>Write a plugin.  Need more complex behavior that the built-in SubscriptionDefinition doesn't offer?  Write a plugin that you can attach to the global postal object.  See <a href="https://github.com/ifandelse/postal.when">postal.when</a> for an example of how to do this.</li>
<li>Write a custom channel implementation for postal. The <code>postal.channelTypes</code> namespace can contain as many channel types as you wish.  See the <a href="https://github.com/ifandelse/postal.socket">postal.socket</a> proof-of-concept plugin for an example of a custom channel that could be applicable in both the browser and node.js (a full production worthy version of this plugin is already in the works).  Other custom channels specific to environments like node.js could be considered as well (ex - a bridge to redis pub/sub, AMQP/RabbitMQ, etc.).</li>
<li>You can write an entirely new bus implementation if you wanted.  The postal <code>subscribe</code>, <code>publish</code> and <code>addWiretap</code> calls all simply wrap a concrete implementation provided by the <code>postal.configuration.bus</code> object.  For example, if you wanted a bus that stored message history in local storage and pushed a dump of past messages to a new subscriber, you'd simply write your implementation and then swap the default one out by calling: <code>postal.configuration.bus = myWayBetterBusImplementation</code>.</li>
<li>You can also change how the <code>bindingResolver</code> matches subscriptions to message topics being published.  You may not care for the inverted RabbitMQ-style bindings functionality (postal currently inverts the treatment of asterisk and hash wildcard symbols compared to AMQP).  No problem!  Write your own resolver object that implements a <code>compare</code> and <code>reset</code> method and swap the core version out with your implementation by calling: <code>postal.configuration.resolver = myWayBetterResolver</code>.</li>
</ul><p>It's also possible to extend the monitoring of messages passing through Postal by adding a "wire tap".  A wire tap is a callback that will get invoked for any published message (even if no actual subscriptions would bind to the message's topic).  Wire taps should <em>not</em> be used in lieu of an actual subscription - but instead should be used for diagnostics, logging, forwarding (to a websocket publisher or a local storage wrapper, for example) or other concerns that fall along those lines.  This repository used to include a console logging wiretap called postal.diagnostics.js - you can now find it <a href="https://github.com/ifandelse/postal.diagnostics">here in it's own repo</a>.  This diagnostics wiretap can be configured with filters to limit the firehose of message data to specific channels/topics and more.</p>

<h2>
<a name="can-i-contribute" class="anchor" href="#can-i-contribute"><span class="mini-icon mini-icon-link"></span></a>Can I contribute?</h2>

<p>Please - by all means!  While I hope the API is relatively stable, I'm open to pull requests.  (Hint - if you want a feature implemented, a pull request gives it a much higher probability of being included than simply asking me.)  As I said, pull requests are most certainly welcome - but please include tests for your additions.  Otherwise, it will disappear into the ether.</p>

<h2>
<a name="roadmap-for-the-future" class="anchor" href="#roadmap-for-the-future"><span class="mini-icon mini-icon-link"></span></a>Roadmap for the Future</h2>

<p>Here's where Postal is headed:</p>

<ul>
<li>The default binding resolver will be changed in v0.7.0 to match AMQP binding conventions exactly.</li>
<li>Add-ons to enable message capture and replay are in the works and should be ready soon.</li>
<li>The <code>SubscriptionDefinition</code> object will be given the ability to pause (skip) responding to subscriptions</li>
<li>What else would you like to see?</li>
</ul></article></div>
    </div>
  </div>
  <br style="clear:both;">


<br style="clear:both;">

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/ifandelse/postal.js/tree-list/31002ebf6d23e085e6b690d19e389fedc986a88f" data-blob-url-prefix="/ifandelse/postal.js/blob/31002ebf6d23e085e6b690d19e389fedc986a88f">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872009" height="64" width="64">
</div>


  </div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.11598s from fe1.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1338956357" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="ajax-error-dismiss">Dismiss</a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1338956357" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1338956357" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download">Download</a>
        </li>
      </ul>
    </div>

    
    <span id='server_response_time' data-time='0.11917' data-host='fe1'></span>
  </body>
</html>

