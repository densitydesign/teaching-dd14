---
title: Which are the most relevant  fair-trade activities in USA and Mexico and how are they related?
cover: /assets/images/covers/none.png
number: 9
---
### Description
The visualization displays the avocado fair-trade cooperative system. From the insights collected in visualization 2, we found out about fair trade cooperatives, operating on different levels to promote a more sustainable avocado trade market. It was interesting that this information emerged from USA results only. For this reason, after showing an overview on what Mexican people think about issue linked to avocado organized crimes, we focus on an investigation of what some institutions do to solve social issues, in USA and Mexico.

The visualization is based on a map that reconstructs the connections between these cooperatives. It is possible to notice how most of the fair-trade cooperatives is American, especially the ones classified as sellers. Amongst the Mexican cooperatives, a significant role is played by [Pragor](http://www.pragor.com/), working as the intermediate of [Equal Exchange](https://equalexchange.coop/) (from the United States); the company reaches most of the American cooperative sellers. Furthermore, we mapped fair-trade companies that only works on raising awareness but do not keep direct contact with other cooperatives.

[Fairtrade America](http://fairtradeamerica.org/), which main role is to certify the quality of other fair-trade cooperatives’ work, sets the standards suited for every reality; the nature of the certification mark, the element that guarantees the high quality of the cooperative’s work, is shown on the map by a pattern. During our research, it emerged that one of the main Mexican avocado suppliers in the USA is the brand [Avocados from Mexico](https://avocadosfrommexico.com/), that each year provides supplies for the [Super Bowl week](https://www.thepacker.com/article/avocados-mexico-returns-super-bowl). It is interesting to note how in this cooperative’s website any fair-trade actions are mentioned: fair-trade reality is still marginal if compared to the main brands in this market scene.

![example of secondary visualization]({{ '/assets/images/mid-09.svg' | relative_url }})
The visualization shows the different activities of Mexico and USA cooperatives.
The alluvial graph displays the different cooperative’s actions, amongst which emerges the promotion of sustainable farming, food safety and the aim of improving farmer’s life quality. In particular, many organizations are working on awareness among consumers and sellers, trying to rectify Mexico’s image after all the social issues that have come along with avocado production.



### Protocol

![example of protocol]({{ '/assets/images/protocols/protocols_p9.svg' | relative_url }})

The protocol starts searching for two queries (both for Mexico and USA): “cooperativa+de+comercio+justo+aguacate” and “fair+trade+cooperative+avocado”, setting Incognito mode.
We scraped the first 50 results using Insta Data Scraper and selected the website of fair-trade cooperatives. For each of them, we have identified: mentions related to possible given certifications mentions linked to countries that in the websites are identified as “producer countries” and “importer countries” (places that the cooperatives say they produce or sell avocado).
Internal mentions between the cooperatives themselves have been identified, to define their connections and relationships. Based on the “about us” section, we were able to set the nature of every cooperative (producer, seller, leaker, account). This information allowed us to design the first visualization, followed by the second one that focuses on the mission of every cooperative.


### Data
##### Data Source:  
##### [Google advanced](https://www.google.com/advanced_search) [Instant Data Scraper](https://chrome.google.com/webstore/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah) [RAWgraphs](https://rawgraphs.io/)
##### Timestamp: 19/10/2018
##### [View Dataset](https://drive.google.com/open?id=1b7IQkpyR00xtLM2QmGeOfg0t4cacA1dWGx_3tVhfb1s)
We used Instant Data Scraper to select the top 50 results of the query. From the selected cooperatives’ websites, the nature of the cooperatives was identify; along with the internal mentions related to the countries indicated as production or import sites, the internal mentions to other cooperatives identified in the query and the actions the associations declare to be aimed to. We set all these information in columns in order to build the dataset.
