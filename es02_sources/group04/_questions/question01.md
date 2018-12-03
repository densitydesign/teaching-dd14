---
title: 1_ What are the western and Chinese Wikipedia pages related to SCS?
cover: ./assets/images/covers/cover01.png
number: 1
---
### Description
Thanks to this visualization we were able to analyze and see the <strong>macro topics</strong> involved with Social Credit System and to start looking into the debate with a clearer idea.
To have a general but systematic overview of the topic, we explored <strong>Wikipedia</strong> as a first approach. We wanted to know what are the related themes involved in the discussion around the topic, how they are connected to each other and what is linked to Social Credit System. The visualization is able to show the existing <strong>network</strong> around the seed <i>Social Credit System</i>. As we wanted to keep the duality of the western world and the Chinese world, we also analyzed <strong>Wikipedia in Chinese</strong>. We know that it’s blocked in China, so at first we wanted to analyze <i>baike.baidu.com</i>, which is the Chinese pedia counterpart, but it wasn’t comparable because of some huge differences with Wikipedia, such as the non presence of the <i>see also</i> section, which was fundamental to us. 

Each shape is a Wikipedia page, some English, some Chinese and some in common: they are linked to each other based on their <i>see also</i> section. Then, we clusterized all the pages into semantic categories to better understand the macro arguments around our big theme. Every color is a different cluster and the shapes’ dimension represents the average of the 2018 views, the number of see also and references and the length of the page.

### Protocol

![example of protocol]({{ '/assets/images/protocols/protocol1.svg' | relative_url }})

Defined the seed <i>Social Credit System</i>, we used the Seealsology tool to find the correlated pages, setting the distance on 2. Since the tool didn’t work with the Chinese counterpart, we manually listed the Chinese <i>see also</i> pages, always at a distance 2. We read all pages and we categorized them based on what they spoke about. As we wanted to design a network visualization, we used at first the tool Gephi to better see the connections; also Raw Graph was useful to set the dimension of the shapes. Then we combined and reworked them with Illustrator.

### Data
##### Data Source: [Wikipedia](https://www.wikipedia.org/)
##### Timestamp: 01/12/2018
##### [View Data (500Kb)](https://www.dropbox.com/sh/1ztygeamxrn2yy2/AAAzcmEcKRnbLpRCHeCJOfs7a/%231?dl=0&subfolder_nav_tracking=1)
We divided the excel file in multiple sheets to split the English and Chinese research and also the connections and the pages. In the connection sheets we have the <i>see also</i> pages referred to each page and in the pages sheet we have all the information regarding the pages, including the clusters that we created.
