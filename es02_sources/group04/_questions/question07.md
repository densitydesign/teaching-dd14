---
title: 7_ What kind of approach do users have referring to SCS on Twitter and Weibo?
cover: ./assets/images/covers/cover07.png
number: 7
---
### Description
This beeswarm plot is a clear visualization to understand the <strong>comparison</strong> between the two platforms and the approaches that people have: we can immediately see that Weibo posts are in majority neutral or in favor, while the Twitter ones are more controversial. As in the previous protocols, we found out even here that the controversy is not remarkable in China, there is no proper debate even when are Chinese citizens who give opinions about Social Credit System. 
We arrived at this conclusion because, as we went deeper into the analysis of the debate, we wanted at this point to check the reality of the discussion: we wanted to know what people really say about Social Credit System. 
We started from choosing the Chinese social network more useful to reach this aim: Weibo. To analyze the western counterpart, we decided to use Twitter because of its similar structure. The two social networks are in this way fully comparable. 
We picked the week in which we were working on this part, which is from 7th to the 13th of November, to have the most recent debate possible. We decided to pick an <strong>ordinary common week</strong> because we wanted to analyze the debate as it is, not related to a specific event.
With <i>Python</i> we grasped all the 243 tweets and the 89 posts of Weibo containing the words <i>Social Credit System</i>. We read each post and we categorized them based on the approach that they have, so we made this visualization to show all the variables: we have a time line on the x-axis, the categorization on the y-axis and the dimension of each diamond, which resembles each post, is the popularity of the post itself, as the average of likes, replies and reposts. 

### Protocol

![example of protocol]({{ '/assets/images/protocols/protocol7.svg' | relative_url }})

Defined the query and the week that we wanted to explore, we used <i>Python</i> to grasp the posts. We read them one by one, deleted the non pertinent ones and categorized the others based on their approach on the theme: in favor, neutral, uncertain, concerned, ironic or against. We also decided to collect other informations (like, repost, number of comments) about each post in order to define their different popularity, doing a standardization. The dataset that came out from this analysis highlights the difference between the Chinese and western users‘ approach. In order to make visibile this heterogeneity, we used Raw Graphs to create a beeswarm plot and we modified it with Illustrator to obtain the final version of the visualization.

### Data
##### Data Source: [Twitter](https://twitter.com/), [Weibo](https://www.weibo.com/)
##### Timestamp: 01/12/2018
##### [View Data (500Kb)](https://www.dropbox.com/sh/1ztygeamxrn2yy2/AAAUpg5HDuraizOSdaq3cRsfa/%237?dl=0)
We analyzed the posts both on Twitter and Weibo. We made a dataset with four sheets: Twitter all posts, Twitter 7-11-18/13-11-18, Weibo all posts and Weibo 7-11-18/13-11-18. In this dataset we highlighted three main values: time of each post, category and popularity. Since we wanted to show each post’s popularity, we standardized first the number of likes, reposts and comments and then we made an average.