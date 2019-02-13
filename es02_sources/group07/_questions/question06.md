---
title: 2.4. Are websites reporting the same categories of actors?
cover: /assets/images/covers/cover_06.png
number: 6
---
### Description
The alluvial graph shows the most reported actor categories by the website categories identified previously. In contrast with the previous visualisations, international and Brazilian website categories were all displayed together in order to have the most general overview of who is acting in the debate.

The visualisation shows the complexity of the debate through the many actor categories involved in it. It is notable that Companies are the most reported category, followed by Governmental Institutions and Indigenous People. Overall, websites are giving a full overview of the controversy by reporting all the pinpointed actor categories, with some exceptions. Companies are speaking almost exclusively about Companies, and Governmental Institutions are focusing mostly on Companies and Governmental Institutions. On the other hand, Human Rights Organisations websites are visibly reporting Indigenous People the more than other categories, while still giving a wide overview of the actors. It is possible to already identify at this stage of the research networks of interests based on the latter findings, that will be explored more in depth later. It is interesting to note that some website categories match with actor categories, meaning that they are also active first-hand in the debate.

As this protocol was made considering 50 results for each query, the amount and distribution of website categories is slightly different from the previous phases. If News websites are still the most present in the links, on the contrary Educational and Academic websites are recurring the most after the 25th position of Google ranking for both queries.


### Protocol
![example of protocol]({{ '/assets/images/protocols/protocol_6.svg' | relative_url }})

After having mapped the websites speaking of the controversy and the topics involved, the current protocol was created in order to frame the categories of actors involved in the debate on Belo Monte. Starting from the list of first 50 results obtained from protocol 2.1., all of the websites of the lists were categorised using the same criteria as the previous protocols (by type and provenience). Successively, all the text content in the websites was inputted in Dandelion API to get all the entities mentioned through the Entity Extraction tool. The extracted entities were manually refined in order to get only the ones that could fall under an actor category. The content of all the websites was then read using the extracted entities as a support in order to spot actors that had not been recognised by the API. The actors were then manually tagged in 13 categories (Companies, Governmental Institutions, Indigenous People, Non-Indigenous Residents, Environmental Organisations, Political Groups, Judiciary, Scientific and Academic Community, Human Rights Organisations, Financiers, Celebrities, News and Religious Organisations). The created dataset was visualised with the Raw Graphs Alluvial Graph and graphically enhanced and expanded with a bar chart on Adobe Illustrator.


### Data
##### Data Source: [Google Search](https://www.google.com/)
##### Timestamp: 09/11/2018
##### [View Data (18Kb)]({{ '/assets/datasets/2-4_website-actor.zip' | relative_url }})
A .tsv file for each query containing websites links, their categorisation and location (I for International and B for Brazilian), the specific actors and their categorisation.
