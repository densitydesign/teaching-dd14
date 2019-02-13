---
title: 2.5. Who are the most reported actors by websites?
cover: /assets/images/covers/cover_07.png
number: 7
---
### Description
The treemap describes in depth the most reported actors by the websites analysed until now. The size of the actors corresponds with the amount of times its entity is mentioned. It is notable that the actors that are reported to be more involved in the controversy are the Brazilian Government, Ribeirinhos, Norte Energia, the Supreme Federal Court and numerous State or privately owned institutions and companies. The actor categories that are generally known to speak against the construction of Belo Monte are found in the last part of the visualisation, being reported less but all around the same amount. 

In general, the categories whose actors are more involved in the controversy hail from Companies and Indigenous People. Companies actors are all involved in the controversy because they partake in the building or ownership of Belo Monte, while Indigenous People actors are the ones mostly affected by the dam construction. It is interesting to note that all the reported Indigenous People are Amazonian tribes but Raoni, who is the main personality speaking out for his category. Riberirinhos, who rank second at being reported, make up by themselves all the Non-Indigenous Residents category - which somehow mirrors their status of outcasts in the controversy. Celebrities such as Sting and James Cameron have also been reported to having taken a part in the controversy. 

Overall, the visualisation shows the wide variety of interests that are represented in the debate, ranging from the political, economical, indigenous and environmental spheres. 


### Protocol
![example of protocol]({{ '/assets/images/protocols/protocol_7.svg' | relative_url }})

The protocol is a direct child of the previous one, as the visualisation was built starting from the same datasets, and is a key node in the research, being a bootstrap for the third phase. The protocol was designed in order to output the most reported entities that act in the debate. Starting from the dataset of protocol 2.4., a new dataset was created by calculating the number of times each individual actor was recurring in the list, and all the actors that appeared less than 5 times were filtered out of the list. The resulting data was used to create a Treemap on Raw Graphs, and graphically enhanced on Adobe Illustrator. A .json file with the description of each actor extracted from Wikipedia - or the actors’ official website in absence of a Wikipedia page - was created in order to integrate further information in the interactive visualisation for the website.


### Data
##### Data Source: [Google Search](https://www.google.com/), [Dandelion API](https://dandelion.eu/)
##### Timestamp: 09/11/2018
##### [View Data (13Kb)]({{ '/assets/datasets/2-5_specific-actors-recurrency.zip' | relative_url }})
The two files contains the name of the specific actors, the link to their respective Wikipedia page or official website and a brief description of the actor, plus the number of times the actor is reported in the websites.
