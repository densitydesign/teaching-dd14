---
title: How the discussion about Adderall among students on Reddit changes based on the period of year?
cover: /assets/images/covers/5.jpg
number: 5
---
### Description
Students decide to use Adderall when they are more stressed, pressured or just need more time to concentrate themselves. All of those factors are combined during the exams period. As illustrated in the graph, the trendline (from November 2013 to November 2018) shows off the peak periods when the query "Adderall" is typed on Google. With a hovering interaction it's possible to see the exact date of the summit. It's clear that the periods of maximum research are corresponding to the finals period of the year. An interesting peak occurred in the week from 18 to 24 March 2018 (off of the final period), when the Netflix documentary about Adderall "Take your pills" was released. The second part of the visualization is referred to the posts collected on Reddit that talk about Adderall. Every rectangle correspond to each post scraped through the social network that speaks openly about the argument the same timespan. The ones in orange are related to students instead of the blue ones that don't and they're aligned according to different topics displayed on the left side. The most interesting outcome is the fact that the posts tend to be created around the period of the year corresponding to the finals.


Several tools were used in order to answer this question: Google trends to analyze the peak periods of queries in Google and the main one, the Phyton Reddit API wrapper, a script created to scrape Reddit. Two macro groups of Students and Stimulants with subreddits like drugs, adderall, teenagers, college, engineering students and benzodiazepines were selected. With the help of PRAW library plus Phyton Reddit API wrapper, the script to search within the refined specific categories on Reddit was created. Posts including “Adderall” in first 1000 results of “students” subreddits and Posts including “student”, “exam”, “finals” in first 1000 results of Stimulants subreddits were collected. After this step 147 results were selected thank to the scraping in subreddits that contain keywords like University, exam, finals and students. With a specific analysis of all of them it has been recognized the time and the position of the author, which influenced the further categorization. Analyzing of the given results and combining them the with the trend line from Google Trends led to the creation of the visualization on Adobe Illustrator which showcases that the amount of posts escalates before the finals exams period.


### Protocol
![example of protocol]({{ '/assets/images/protocols/5.svg' | relative_url }})


### Data
##### Data Source: [Reddit](https://www.reddit.com/), [Google Trends](https://trends.google.com/trends/)
##### Timestamp: Jan 2013-Nov 2018
##### [View Data (50Kb)]({{ '/assets/data/Protocol_5/' | relative_url }})
The Protocol is composed by two different datasets. The first is taken from Google Trends, where was used the query “Adderall” and searched in the last 5 Years. The second is based on Reddit.
Trying to find the communities closer to students and drugs on Reddit, firstly it were done a research on the platform to find those subreddit, that at the end were six. Thanks to a script wrote using a library to work with Reddit API was possible to filter more all of the posts inside the subreddits to find those were talking about Adderall and were containing different key words referred to academic world. From the Phyton Script were taken titles, dates, links, scores, number of comments of the posts, that after were manually categorized to find different groups of topic.
