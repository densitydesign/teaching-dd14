---
title: 1. Are pages related to opioids significantly linked in Wikipedia?
cover: /assets/images/covers/q1.png
number: 1
---
### Description
The first visualization shows how the pages related to the opioid crisis are structured and connected to one another. What we noticed analysing the keywords chosen is that the Wikipedia terms are not so strongly connected as we might have expected. For example, the direct link identified in the first phase between prescription drugs and the opioid epidemic was not present in this analysis. Logically, the more specific topics would have been placed closer to each other and more at the centre of the graph, but in this case more general and less important terms for the topic analysed resulted in having more relevance than what we expected. This shows an interesting fact as, given the great relevance and impact that the opioid crisis is having, we would have imagined seeing a more structured organization of the issue and the topics around it.

The keywords chosen are in a range from more general terminologies to specific names of opioids that were taken from the NIDA website, the most reliable source for medicines. In the first phase of collecting Wikipedia pages, it was interesting to notice that we did not find pages related to all the words chosen (we found pages for the opioid epidemic, opioid use disorder, opiate, opioid overdose, opioid, hydrocodone, oxymorphone, oxycodone but not for Fentanyl and Extended-release morphine). Once all the links were collected, we put them on the SEEALSOLOGY software to actually see how all the different pages around the topic are organized.
Eventually, we used Gephi to style the map and better highlight our results.

### Protocol

![example of protocol]({{ '/assets/images/protocols/protocol_1.png' | relative_url }})



### Data
##### Data Source:[Wikipedia] (https://wikipedia.org)
##### Timestamp: November 2018
##### [View Data (8Kb)]({{ '/assets/images/dataset/protocol1-wikipedia.csv' | relative_url }})
This dataset is organized in four columns and created to be read by Gephi. It contains the list of links between topic and their see-also connections with a column that explains the importance of connection between them.
