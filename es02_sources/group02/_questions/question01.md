---
title: What kind of sources are talking about data center energy?
cover: /assets/images/covers/viz01.png
number: 1
---
### Description
From this visualization, we can see: in China, Baidu search engine displays more sources of professional information and articles, which would attract viewers who are mostly professionals and industry executives. While in the United States, Google search shows a more comprehensive distribution of sources. Compared to Baidu, it is easier for public to know about the data center.

However, regardless of China or the United States, social media sources of information rarely appear on the top 25 websites. This shows that the energy consumption of the data center has not attracted strong public attention. Data centers are still an area of ​​concern industry stakeholders.

### Protocol

![example of protocol]({{ '/assets/images/protocols/protocols_1.png' | relative_url }})

We search for "Data Center Energy" queries in English and Chinese, and get the top 25 URLs. Then, we imput 50 URLs in the WEBPULSE tool and subjectively sorted the content of the page. Finally, we divide the website types into 9 categories  (Government, Company Web, Reference, News Media, Education, Social Media, Data Center Web,Forum Web, Charitable Organizations).
The content of the website is divided into 6 categories ("Articles, Services, News, Reports, Tutorials, Papers").

We also obtained 50 URL global rankings through ALEXA. But most of the more influential websites publish few articles about data center energy, while those that publish relevant content are mostly less influential. At the same time, we manually categorize the type of the websites. Finally, we output all the data (50 URL,Websit Type,Language,Website Ranking) to visualize with Tableau and Illustrator.

Article is an unofficial long article, including some blog content or professional opinions.
Service is a data center service website provided by a business or government.
News is a relatively short news description of a specific event,report is an official report file published by the company or the government.
Tutorial is a tutorial shared on the web,Paper is a scientific paper.


### Data
##### Data Source: [Google , ](http://google.com)  [Baidu](http://baidu.com)
##### Timestamp: 11/02/2018
##### [View Data(35Kb)](./assets/dataset/data01.xlsx)

Our dataset was consisted of a table where we have both Chinese and English search results, including the category of the web content, the category of the website, and the ranking of the website.
