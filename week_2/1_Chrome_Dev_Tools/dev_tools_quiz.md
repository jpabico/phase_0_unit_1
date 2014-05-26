#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS
     Elements - allowing you to look at specific elements or entire pages of code and edit and save them back to re-run. Freely edit and add/remove CSS or HTML.
  * Javascript Debugging
  *  Sources and profiles - allowing you to set a record, run scripts, and see what specifically is failing. It also allows you to run before/after tests and compare results which allows you to easily see where you're going wrong without searching through the code.
  * Performance Optimization 
  *  Timeline and network - timeline allows you to see how long it takes to load different items which allows you to see where you should put certain things in your code (chronologically). Network shows you latency and allows you to sort by size to see where things might be causing lag. PageSpeed is of course really helpful as an add-on as well, and is an optimizer.

* What's the quick key for your OS to spawn the Dev Tools inspector?
*  cmd + option + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  *  #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
      the largest image is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  *   if you inspect the page and go to the developer tools > network tab > record > reload page and sort by size. The link for the 316k image is shown above.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?
  Optimizing images would be easiest and save most space. 'Optimize the following images to reduce their size by 885.9KiB (39% reduction).'
