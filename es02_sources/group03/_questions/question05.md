---
title: Which cartels are involved in avocado traffic in Mexico?
cover: /assets/images/covers/none.png
number: 5
---
### Description
This visualization’s purpose is showing which cartels are in the Mexican territory scene; our a particular perspective is related to how much they are set in the territory considering the avocado production in each Mexican state. In fact, in the previous visualization 1 and 2, it emerged the link between avocado trade and organized crime, something we wanted to go deep in.
The graph above is a map of Mexico, where each state’s color is related to how much avocado is produced there. The presence of criminal activities related to avocado in a certain city or region is highlighted with circles, representing how much a cartel appears on Google results if searched in a query containing the same city.
The map’s outcome is the high presence of cartels in Michoacàn related to the avocado production; the state is the most productive one in Mexico.
CJNG cartel (Jalisco Nueva Generaciòn Cartel) appears to be the more connected one to the illegal avocado trade market.

### Protocol

![example of protocol]({{ '/assets/images/protocols/protocols_p5.svg' | relative_url }})

We used Google set in Incognito mode to search for “avocado AND cartels” setting Mexico as a geographic area. Instant Data Scraper has been used to select the first 100 results from which we manually extract the cartel's name, and the places were mentioned together. To show how much a cartel was linked to the territory, we listed more results, searched keeping the same settings: “name of the cartel AND state name” and “name of the cartel AND city name.” Considering the total amount of Google pages, we used the circles to display how much the cartel was present in that territory. Finally, we used data collected from the Mexican government dataset “Estatistica de producciòn Agricola” (2017) to compare the effective presence of the cartel in that location related to the avocado production.

### Data
##### Data Source:  
##### [Google News](https://news.google.com/) [Instant Data Scraper](https://chrome.google.com/webstore/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah) [RAWgraphs](https://rawgraphs.io/) [SAGARPA Agricoltural Statistics 2017](http://infosiap.siap.gob.mx/gobmx/datosAbiertos.php)
##### Timestamp: 19/10/2018
##### [View Dataset](https://drive.google.com/open?id=1MOuFFAFe2Dr9CK1rrDPfI721kDoYEizn)
The dataset has been created setting the following information: name of the cartels related to avocado that emerged scraping the first 100 results from Google, followed by geographical area of action. To this has been added the result of the query set to identify how many times the cartel has been mentioned along with the state name in Google.
