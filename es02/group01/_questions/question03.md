---
title: What is the evolution of feminism throughout its four waves?
cover: /assets/images/covers/viz03.jpg
number: 3
---
### Description
In order to better understand the evolution of feminism throughout time, we used Wikipedia to explore the events that marked history. The graphic underlines how the fight for equality changed through the **four waves of feminism** by showing the typology of their events.

Every wave is represented by a **treemap changing according to the relevance of its category**. It’s interesting to notice how in the first phase there is a great majority of events belonging to the **“rights”** category, like the right to vote or the right to own properties. The second wave it’s more about solving **”society”** problems, such as reducing inequalities between sexes, but also achieving maternity-related rights. The third wave has a prevalence of **”publications”** involving different types of media such as blogs, movies, and books.  Finally, the fourth wave sees the raise of a new category which is the **“online activism”** associated with the use of social media through which feminism is spreading its message. Clicking on a category it’s possible to see the specific events under each wave, in order to give to the user a more complete information about the events.

By clicking on the “online activism” category it’s possible to explore a sparkline visualization that shows how social media allowed the feminist campaigns to spread in relationship to their main events. Among the most relevant online campaigns there is Everyday Sexism,  Free The Nipple, HeForShe, MeToo and YesAllWomen. It’s interesting to notice how those campaign affect different aspect of the problem, highlighting its complexity. 

### Protocol
![example of protocol]({{'/assets/images/protocols/protocol-03.svg' | relative_url }})

The timelines of the events are extracted from the english pages of the four waves on Wikipedia (except for the second-wave that has a specific Wikipedia page about the timeline). After merging the datasets we manually clustered the categories of the events and made a conditioned analysis of their percentages.

The spark line visualization of the fourth wave’s events is based on the data gained on Google Trend, and compares the worldwide research interests on the most relevant online campaigns. From the dataset downloaded from Google trend, we extracted the dates in order to search them on Google News and connect the spikes of the searches to their causative events.

### Data
##### Data Source: [Wikipedia](https://en.wikipedia.org/wiki/Main_Page), [Google Trends](https://trends.google.com/)
##### Timestamp: 13/11/2018
##### [View Data (360KB)]({{ '/dataset/viz03.zip' | relative_url }})