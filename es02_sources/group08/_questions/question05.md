---
title: 05. Who are the main actors mentioned in the contemporary debate?
cover: /assets/images/covers/viz05.png
number: 5
---
### Description

The Beeswarm visualization enable to display all the actors mentioned in news since the beginning of 2018. 
On its X axis the plot shows the main entities, ordered by cluster: indeed, the ones who share similarities have been displayed closer. 
The information provided in the chart is about the mention frequency, to enlighten who is the most cited and how often each actor is named in the timeframe represented on Y axis. 
The data collected for each query show some significant variation. Aerospace private companies and CEO’s are more often mentioned while talking about space colonization, with Elon Musk and SpaceX clearly standing out. By contrast, it’s interesting to notice how U.S. political and militar entities, as well as president Donald Trump and its Space Force, are considerably more cited in relation to the space exploration query. As seen in the previous protocol, news providers for this query give more space to criticism on Trump administration’ Space Program. This is due to privatization and commercialization of space activities in Low Earth Orbit, which set forth a stronger partnership between NASA and space industry, pursued by U.S. Government. In this scenario the figure of NASA administrator Jim Brindenstine have a defined role. This is the reason why it’s displayed only in space exploration results. Eventually, an interesting observation could be made regarding scientific research personalities and universities which are the most relevant actors, constantly and frequently mentioned in the whole timeframe. This insight has been a determining reason that addresses the research to high rated scientific press as follows in the next protocol.


<h3>What kind of images do press outlets support talking about space colonization?</h3>

<br>
<br>
<br>
<img id="img-p5-2" src="/assets/images/viz-5b/p5-2.png"/>

The images analysis aims to show how press outlet visually supports their communication and which actors are mostly shown in pictures. The visualization is developed through a Contact Sheet editing. This method is used in photo journalism to deliver a meaningful storytelling. Pictures are usually ordered by content typology (independently from the shooting order) matching those representing the same actions, places or personalities. Chromatic variations is also used to classify images in this kind of editing. 
In this visualization, images are displayed in horizontal stripes by type of content, in order to provide an insight about most popular subjects while talking about space colonization.


### Protocol
<img class="protocolli" src="/assets/images/protocols/protocol-5.png"/>

To deliver this protocol, we addressed the Google News feed in incognito mode. The research has been focused on United States, displaying the results in English.  
The timeframe selected includes all the results available from 1/1/2018 to 1/11/2018, sorted by relevance. The total amount for collected news included more than 350 results, which have been filtered to exclude those not pertinent. The Octoparse Webscraper tool has been used to easily collect the title and text content for each news. The results have been opened and scraped with the Dandelion Entity Extractor, in order to extract the referred companies, institutions and personalities names from each text content. A manual scraping has been made then, to get all those names that Dandelion tool hasn’t been able to get. Considering that the majority of missing results were related to scientific personalities and research centers, this has been a fundamental step. Eventually, all the results have been clusterized, in particular all those names who haven’t been mentioned more than once. All the data results have been organized by columns in an Excel folder, in order to match titles, publication dates, mentioned entities and frequency, which has been calculated through a Pivot table.

<img class="protocolli" src="/assets/images/protocols/protocol-5b.png"/>

To deliver this protocol, we addressed the Google News feed in incognito mode. The research has been focused on United States, displaying the results in English.  
The timeframe selected includes all the results available from 1/1/2018 to 1/11/2018, sorted by relevance. As seen in previous protocol, the total amount for collected news has been filtered to exclude those not pertinent with the topic. The visual scraping tool by ScrapeStorm has been used to retrieve images from news URL links. The total amount for collected results include 400 images, which have been opened to exclude those not pertinent. It’s the case of graphics, charts and images representing vague context where it’s not possible to tell any specific personality or place.
Through a Contact Sheet editing in Photoshop, the visual contents have been manually re-organized, as original results were sorted by relevance. 
This final step has been done to display the elements by similarity of content in order to get a meaningful visualization.

### Data
##### Data Source: [Google News](http://news.google.com/)
##### Timestamp: 01/11/2018
##### [View Data](https://drive.google.com/open?id=1UTTipkPagwF5UMQ2ms7wvlOaD_IB_AR3)
