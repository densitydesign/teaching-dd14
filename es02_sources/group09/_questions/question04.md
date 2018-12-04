---
title: 2.3—What are the topics in common between Hate Speech and Hate Crime on Wikipedia?
cover: /assets/images/covers/viz04.jpg
number: 4
---

### Description 

From the visualization we can observe that the Wikipedia pages which directly link Hate Speech to Hate Crime with one degree of separation are: [“Freedom of thought”](https://en.wikipedia.org/wiki/Freedom_of_thought){:target="_blank"}, [“Thoughtcrime”](https://en.wikipedia.org/wiki/Thoughtcrime){:target="_blank"}, [“Hate mail”](https://en.wikipedia.org/wiki/Hate_mail){:target="_blank"} and [“Gay bashing”](https://en.wikipedia.org/wiki/Gay_bashing){:target="_blank"}. Trying to collect these results by their overall topic we defined which are the main and recurring macro-categories in the map, that can be described as the main themes that characterize the correlation between Hate Speech and Hate Crime: “Racial Discrimination”, “Racist organizations”, “Racial based violence”, “LGBT Discrimination”, “Violence”, “Discrimination”, “Hate Speech vs. Free Speech”, “Historical” and “Political”.

As we noticed in the last protocol, we can observe a correlation between Hate Speech and violent behaviours. Indeed, there seems to be a pattern by which Hate Speech often results in violent events recognized as Hate Crime. We therefore decided to investigate how are these terms related to each other, trying to understand some of the relevant features they have in common. In order to do so, we identified and analyzed the “See Also” pages in Wikipedia related to the [Hate Speech](https://en.wikipedia.org/wiki/Hate_speech){:target="_blank"} and [Hate Crime](https://en.wikipedia.org/wiki/Hate_crime){:target="_blank"} pages.

As a result, the graph shows the main nodes which are the starting poles of the map (Hate Speech and Hate Crime) and the connected results of their “See Also” connections. The diameter of the nodes depends on the interest for the page, i.e. the number of total views of the Wikipedia page from 07/01/2015 to 11/17/2018. The color of the nodes classifies the degrees of separation between the connected topics and the starting poles. The resulting macro-categories are highlighted in orange.
When the mouse passes over the circles the corresponding name of the page appears, with the possibility to click on it and to visit it on Wikipedia.


### Protocol
<img src="{{ '/assets/images/protocols/protocol-04.png' | relative_path }}">

At first we wanted to analyze what were the topics involved in the definition of Hate Speech (it was our former research question), so the first half of the protocol describes the processes used to achieve this result. But then, going deeper with the analysis and the development of the other protocols, we identified a more specific research question concerning the correlation between Hate Speech and Hate Crime. 

Therefore, in order to analyze the common areas between these topics, we selected the two main Wikipedia pages of the poles (i.e. [Hate Speech](https://en.wikipedia.org/wiki/Hate_speech){:target="_blank"} and [Hate Crime](https://en.wikipedia.org/wiki/Hate_crime){:target="_blank"}), then we linked them in the [Seealsology tool](http://tools.medialab.sciences-po.fr/seealsology/){:target="_blank"} and made the analysis at level 2. Afterwards, we implemented the data we obtained from Seealsology by manually adding to every element of the table (i.e. all the Wikipedia pages resulting from the “See Also” connections) the number of the total views per page from 07/01/2015 to 11/17/2018, obtained with the [Pageviews Analysis tool](https://tools.wmflabs.org/admin/tool/pageviews){:target="_blank"} by [Wikimedia Tool Forge](https://tools.wmflabs.org/admin/){:target="_blank"}. 

We imported the results in Gephi, where, after setting the nodes dimension by the page visualizations, we created the main poles (by blocking the nodes of Hate Speech and Hate Crime) and the separation degrees using the Ego Network filter and the Intersection Operator. Afterwards, we used the Force Atlas 2 layout to position the remaining nodes. Finally we exported the map and adjusted it with Illustrator, where we manually categorized the topics and refined the results.


### Data
##### Data Source: [Seealsology](http://tools.medialab.sciences-po.fr/seealsology/){:target="_blank"}, [Wikimedia Tool Forge-Pageviews Analysis](https://tools.wmflabs.org/admin/tool/pageviews){:target="_blank"}
##### Timestamp: 11/17/2018
##### [View Data (59 KB)](/assets/datasets/2.3.xlsx)