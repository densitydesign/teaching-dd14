---
title: 3.1—Which are the characteristics of the sites being accused to spread hate according to RationalWiki?
cover: /assets/images/covers/viz05.jpg
number: 5
---

### Description

The visualizations shows the ideological characteristics and the visibility of each “Hate Site”. What we can observe is that the high concentration of circles with a larger diameter shows that the most relevant pages are mostly news and news aggregator sites. These sites tend to focus on political and racial issues, taking a position also in the field of knowledge and some aspects of religion.
Moreover, this type of sites seems to be more resistant to the threat of page closure, that instead hit most of the forums, blogs and social networks mentioned by [RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites){:target="_blank"}.
The Hate Speech’s topics visibility depends directly on the sites’ visibility, so that the diffusion of certain themes will be higher, since there are sites that have an higher exposure than others. Concept related to “Right Wing”, “White Nationalism”, “White Supremacy”, “Neo Nazi”, “Antisemitism” and “Islamophobia” are the most relevant and are usually strongly associated with the Hate Speech phenomenon, but, as we discovered from this analysis, there are types of Hate Speech that are less known but equally potentially harmful like the ones related to “Communism”, “Anti-White Racism”, “Creationism”, “Pseudohistory”,  “Misogyny”, “Anti-Hispanics racism”, “Pro-Chinese”, “Anti-atheism” and “Radical Feminism”.

We decided to focus on which appearances Hate Speech takes in practice after having examined when the theoretical definitions of Hate Speech were born and have developed, how they differed in opinion and how they increased or lost visibility by spreading their vision on this theme. In order to create an opinion on Hate Speech, the observation of the phenomenon itself can be an indispensable step for the users to take a position and above all to learn to recognize it.

For our analysis we relied on a complete list of information on sites considered hateful by [RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites){:target="_blank"}. We organized this information into a scatter plot to better visualize the ideological characteristics of each site. 
Through the marks (circles and crosses) on the vertical axes relative to the pages, we can observe the category, of hatred or ideological, according to which the site is classified. The horizontal position and the color denote its typology. With [Alexa Ranking](https://www.alexa.com/){:target="_blank"} we associated different degrees of relevance to the sites by translating the value of the ranking in the diameter of the circumferences related to the different pages. This highlights the substantial difference between certain sites and others.
The left side bar chart shows the topics’ total amount considering the site categories, with the dimensions that are proportional to the Alexa’s ranking. The longer the bar, the more relevant the topic will be.
The mouseover helps reading the graph by highlighting the precise typologies and topics.


### Protocol
<img src="{{ '/assets/images/protocols/protocol-05.png' | relative_path }}">

[RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites){:target="_blank"} provides a range of 48 links of sites where episodes, classified as Hate Speech, occur. 
We manually analyzed the comments that RationalWiki associates with each page by extrapolating the hateful categories and ideologies associated with each site.

To better understand the different relevance of the web pages the 48 links have been analyzed with [Alexa Ranking](https://www.alexa.com/){:target="_blank"}. Sites that occupy positions that go beyond the 500.000 rank were impossible to calculate, so they were merged into one group, as they were not very interesting for our overview.
The information concerning categories and rankings was then inserted into an Excel sheet, subsequently cleaned with OpenRefine, in particular by clustering and standardizing the categories in the case of too thin differences.

Later, always manually, we checked if the types of pages provided by RationalWiki were correct, finally decreeing the reliability of the classification and completing it, after having done a proper research, where it was missing.
Many of the links on the RationalWiki list lead to closed pages, but we decided it could be interesting to keep them and visualize them to better explore the phenomenon. However, the cancellation made it impossible to find the page type of four sites. 


### Data
##### Data Source: [RationalWiki](https://rationalwiki.org/wiki/Category:Internet_hate_sites){:target="_blank"}, [Alexa](https://www.alexa.com/){:target="_blank"}
##### Timestamp: 11/13/2018
##### [View Data (72 KB)](/assets/datasets/3.1.xlsx)