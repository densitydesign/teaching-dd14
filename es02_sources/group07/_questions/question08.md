---
title: 3.1. What kind of relationships are the actors forming on Facebook and how big is their audience?
cover: /assets/images/covers/cover_08.png
number: 8
---
### Description
The visualisation is a network showing the relationships between the official pages of the main actors involved in the Belo Monte Dam controversy on Facebook. The map shows the number of pages liked by the seeds, making it possible to identify direct networks of interests between the actors themselves and the cluster of pages surrounding them.

It is notable that the main clusters highlighted by the density of pages surrounding one or more seeds somehow resemble the categories created in protocols 2.4 to describe the areas of interests of the actors. The most interesting cluster extrapolated from the map is the one that blends together pages of actors belonging to Governmental Institutions, Political Groups, Financiers and Companies, showing that there is a wide network of interests ongoing between them.

It is also fascinating to note the interest that the UHE Belo Monte page, which is actually the official page of Norte Energia, the consortium created only to administer the dam, has in Greenpeace Brazil, one of the biggest oppositors of the project. Because of this unrequited like the small cluster surrounding Greenpeace Brazil, made of other NGOs, is blended together with the one of the pages belonging to the actors that are often in contrast with Greenpeace, as the cluster of Environmental Organisations is more peripheral in the network.

Some isolated clusters are created by minor companies, less or not at all connected to the other actors. Likewise, Celebrities are also peripheral in the network, as Sting is marginally connected to the cluster of Environmental Organisations through by liking pages of environmental funds, whereas James Cameron’s Facebook page doesn't show any interest. If being not connected is symptom of showing a marginal interest in the pages surrounding the actors or the actors themselves, their audience level must be also taken into account. Sting’s Facebook page is in fact the one with the biggest fanbase, followed by the ones of Lula, Dilma Rousseff and other Governmental Institutions, showing how much following these personalities have online and how big their voice could be heard when posting something related to the controversy. 


### Protocol
![example of protocol]({{ '/assets/images/protocols/protocol_8.svg' | relative_url }})

The protocol is the first one of three designed to map the debate on Facebook. Facebook was chosen for the last phase of the research as it is the platform where it is possible to find a direct confrontation between the actors pinpointed in the previous protocol and their digital public. Moreover, Facebook is the most used social media platform in Brazil and easily accessible for everyone.

Starting from the list of most reported actors of protocol 2.5, every actor was searched for on Facebook in order to get their official page. The vast majority of them had a corresponding certified official Facebook page. Some actors, mostly hailing from the Indigenous People category and the Riberinhos, didn’t have any official Facebook page. Some actors that were pinpointed previously were actually juridically and bureaucratically part of bigger entities, such as Petros - a fund belonging to Petrobras - or IBAMA - the administrative branch of the Ministerio do Meio Ambiente - and didn’t have a page for themselves, so the master entity page was considered instead. In some cases, the official Facebook page of an actor differed from the name that the actor was reported with, such as Raoni (Amazon Planet - saving the rainforest with chief Raoni) or Norte Energia, whose page is actually the one of the dam itself, UHE Belo Monte, as the company exists only to administer the dam. The selection resulted in a total of 32 Facebook pages, as shown in the graph below.

![example of protocol]({{ '/assets/images/Secondary_viz/facebook_like_network_integration.svg' | relative_url }})

The resulting pages were used as seeds for the Netvizz tool. Their page ID was inserted in Netvizz to get a first degree likes network for every Facebook page as of 16th November 2018. The resulting .gdb files were merged together in Gephi. Further refining was needed however in order to get a consistent pure first degree network and avoid giving partially inaccurate data. When creating a network, the Netvizz algorithm considered all the pages liked by the seed, and if one of the pages liked another one in the network different from the seed a connection was automatically created. This meant that when merging the 32 networks some relationships could be missed, as the algorithm created the connections only between the pages in the same starting network. To avoid this, all the edges starting from nodes different than the seeds and directed towards nodes different than the seeds were manually removed. The column “fan_count” of the node table generated by merging all Netvizz files was divided in 7 ranges and applied to the seeds in order to visualise the number of likes for each starting seed page. 
The resulting visualisation was imported in Adobe Illustrator and graphically enhanced for better understanding. 


### Data
##### Data Source: [Netvizz](https://tools.digitalmethods.net/netvizz/facebook/netvizz/)
##### Timestamp: 16/11/2018
##### [View Data (75Kb)]({{ '/assets/datasets/3-1_facebook-likes-network.zip' | relative_url }})
These nodes and edges tables were created from the Netvizz network analysis tool, and they contain directed connections between the seed pages that we chose and the pages they liked. 
