---
title: 2. How strong is the debate around the definition of opioid epidemic?  
cover: /assets/images/covers/q2.png
number: 2
---
### Description
The second visualization focuses on the opioid epidemic page on Wikipedia. It shows all the changes that were made by the users between the 9th of February 2017 and the 14th of November 2018.
The most interesting aspect of the page was that it was created in early 2017 and despite being relatively new, it has already undergone a great number of changes in its subtopics. The graph shows the quantity, in terms of bytes, of edits that users generated until November 2018. We have traced down more than 700 edits, proving there were drastic modifications to the page (vertical components of the graph). Not only users added new information to it, but also – which is something extremely interesting – deleted parts of them, proving that the opioid epidemic is a complex issue problem, that gather a lot of people around it.

To extract these results, we used the history of the page and  Google Sheets. We collected all the changes occurred in terms of date and dimension (bytes). We categorized the results on Excel by a changing in the structure, names, position/order, creation/removal of subtopics. The second step was to create a timeline of content tables underlining the type of changes occurred to the page.
Finally, we used Rawgraph to make the visualization.
We chose Wikipedia for two reasons: first, the content is user-generated. Second, as Wikipedia is a ‘semi-scientific’ platform to which people frequently turn to in order to find information, we chose it to try to understand how many and what kind of material users can find on the platform to get briefly informed.

### Protocol
![example of protocol]({{ '/assets/images/protocols/protocol_2.png' | relative_url }})



### Data
##### Data Source: [Wikipedia](https://wikipedia.org)
##### Timestamp: November 2018
##### [View Data (26Kb)](https://drive.google.com/file/d/1T03cgeFGRt6ObGaKsDHSCjES72WNcck4/view?usp=sharing)
This dataset was created with the command “importHTML” from the history section of wikipedia page: it contains the list of all the changing on the page divided by author, date and size (in bytes) of changings.
