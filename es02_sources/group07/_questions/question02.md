---
title: 1.2. Which of the dam controversies spawn the widest interest on Wikipedia?
cover: /assets/images/covers/cover_02.png
number: 2
---
### Description
The Horizon Graph describes the user activity in the last three years on the Wikipedia pages that were used as seeds in the previous protocol. The graph is mirrored in order to show the number of total edits and views for each page in its English and local language version. The dams were clustered in categories according to the status of construction stated in the page, and stacked in them in alphabetical order. Using the number of views and edits as a parameter for measuring the level of controversy on Wikipedia, both in English and in the local languages, allowed to identify the most controversial dams in recent years.

Using this criteria, Three Gorges Dam and Belo Monte Dam ranked high both for the English and local language pages. Glen Canyon Dam and Grand Ethiopian Renaissance Dam also standed out in their English version, but their data was incomplete as the local language of Glen Canyon Dam was English and Grand Ethiopian Renaissance Dam didn’t have a Wikipedia page in its native language. As such, they were not considered feasible for the next step.

Combining the findings emerged from the visualisation with the ones from protocol 1.1. and its local language accessibility, it was decided to focus the research on Belo Monte Dam.



### Protocol
![example of protocol]({{ '/assets/images/protocols/protocol_2.svg' | relative_url }})

The Wikipedia pages that were used as seeds in protocol 1.1 were processed through two different tools: Langviews Analysis to get the number of views, and Wikipedia Edit Scraper API for the number of edits. The ID of the pages was used as input for the first tool, while their link for the latter. The process was executed both for the English and local languages pages. Since Langviews Analysis only considered the edits ranging from 1st July 2015 to 5th November 2018, the same timespan was used for the data extraction with Wikipedia Edit Scraper.

The final visualisation was generated using the Horizon Graph and Scatter Plot on Raw Graphs, and the svg files were then combined and refined on Adobe Illustrator in order to have one single graph. 


### Data
##### Data Source: [Wikipedia Edits Scraper](https://tools.digitalmethods.net/beta/wikipedia2geo/), [Langviews](https://tools.wmflabs.org/langviews/)
##### Timestamp: 05/11/2018
##### [View Data (5Kb)]({{ '/assets/datasets/1-2_wikipedia_edits-views.zip' | relative_url }})
A .tsv file combining the data collected from Langviews Analysis and Wikipedia Edit Scraper API was created in order to be used on Raw Graphs.
