---
title: How did avocado related news changed over the last 11 years?
cover: /assets/images/covers/none.png
number: 3
---
### Description
The graph shows how news about avocado trade developed during the last 11 years, in Mexico and USA. We chose to consider a generic query, the one used to design the visualization 2 (avocado+trade and aguacate+trafic), and trying not to force the results; we kept the categories from visualization 1. As the visualization shows, the news related to this topic saw a significant growth; it is possible to notice that, during the last year, the news from the United States are mainly about the economic issues, trade production growth. On the other side, Mexican results are more focused on social issues due to avocado-related criminal cartels.

The graph is composed of a two-layered timeline. The first level displays the first 50 news collected per year, with orange circles for USA and green ones for Mexico, categorized as the previous steps.
The second graph shows the total amount of news from Google News, and this number is displayed in an area which is proportionally wide. In this way, we provide a complete view of the development of avocado trade-related news, solving the limit of the graph with circles only, which considers 50 results and hence flattens the growth comparison.


### Protocol

![example of protocol]({{ '/assets/images/protocols/protocols_p3.svg' | relative_url }})

The queries we used to design this visualization were the same ones we used in protocol 2. In this case they were searched in Google News, with the purpose of the evolution on the news that are related to avocado trade. The comparison of results both from Mexico and USA is the main target, so we searched once again by language (“aguacate+trafico” and “avocado+trade”); since we could not set the geographical area on Google News, we used VPN settings. The time period was set from 2007 to 2018; we started from 2007 because it represent the first year with avocado trade related issues in both countries. We used Instant Data Scraper to fasten the process and harvest the data; they have been listed in ranking with their own links. The first 50 results (if present) were selected for each year, and we categorize them as visualization 1. We integrated this information with data about the whole number of news for each year; this allows us to show the entire increasing trend, avoiding the potential distortion caused by the choice of 50 results.

### Data
##### Data Source:  
##### [Google News](https://news.google.com/) [Instant Data Scraper](https://chrome.google.com/webstore/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah) [Voyant](https://voyant-tools.org/) [RAWgraphs](https://rawgraphs.io/)
##### Timestamp: 19/10/2018
##### [View Dataset 1 ](https://drive.google.com/open?id=1ZJjzHbYlDeO49pU5kOcQUxGcSmMdqtRg)
##### [View Dataset 2 ](https://drive.google.com/open?id=1KEH0diUQrcN2DHh98INZfCT3HpYaMl4U)
With the first 50 results we obtained from Google News using Instant Data Scraper, we collected the links list; the news were eventually categorized with Voyant tool. With these information we then set an Excel dataset in order to design the visualization. This procedure was used for each country, Mexico and USA; we set a folder to compare them with their total values.
