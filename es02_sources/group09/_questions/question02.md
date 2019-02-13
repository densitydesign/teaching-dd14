---
title: 2.1—How much did the definition of Hate Speech on Wikipedia change over time?
cover: /assets/images/covers/viz02.jpg
number: 2
---

### Description

As we can understand from the visualization, the most edited pages are the English and the Japanese ones; these two pages also stands out in length compared to the others, but surprisingly are not the longest ones, since the Macedonian Hate Speech page counts more than 50.000 characters even if it doesn’t have any interesting peaks of edits through time.
The English page had an almost constant activity but it had an interesting overall increase of edits in 2018, making us understand that the controversy is alive.
The Japanese page instead had an interesting high activity from 2013 to 2015, that suggests a considerable public debate on the discussion. Moreover, we noticed that after the “Hate Speech Act” passed in Japan, the amount of edits to the page has been constant and not remarkable.

The first part of the visualization shows the number of edits per month of all the “Hate Speech” pages across all languages on Wikipedia, ever since they were created on the platform. The existing 38 pages are organized in descending order, so that the most edited one is at the top and the less edited one is at the bottom. The page does not exist for other languages that are not mentioned here in the visualization. The blue bars represent the total amount of edits starting  from the date they were opened. The height of the bars corresponds to the number of edits during a specific month, and the minimum height represents the page existence (no edits). The total amount of edits per page at November 15, 2018 is mentioned at the end. The mouseover helps reading the visualization, by highlighting the edits per page and the corresponding name, with the possibility to click on it and view that specific Wikipedia page.

Moreover, in the timeline we displayed when the Code of Conduct was signed (in this case the data was collected during the First Phase) and when the Laws against Hate Speech passed, in order to see if they matched with the peaks of edits (these data were collected by reading the pages of Wikipedia about Hate Speech). More details of these laws can be found on the right side of the visualization in three orange rectangles. The second part of the visualization specify the page length with the orange squares that indicate the precise number of characters.


### Protocol
<img src="{{ '/assets/images/protocols/protocol-02.png' | relative_url }}">

At first, we wanted to understand in how many languages of Wikipedia there was a page dedicated to Hate Speech. In order to do so, we queried “Hate Speech” on Wikipedia and we went to the “Languages” section. We found out that there are 38 existing pages so, for every page, we went to the “View History - Page statistic” section ([Wikipedia-XTools](https://xtools.wmflabs.org/){:target="_blank"}) and we scraped manually all the information about how many edits were made month by month. We choose not to use the year counts, since we wanted to go deeper and to be more precise. The data about the length in characters of the pages have been scraped from the same page in the "General statistics - Prose" section. All the data were collected and organized in an Excel file, which was later upload on [RawGraphs](https://rawgraphs.io/){:target="_blank"} in order to start displaying the data on bar chart mode; the resulting SVG file was later refined with Adobe Illustrator.


### Data
##### Data Source: [Wikipedia](https://en.wikipedia.org/wiki/Main_Page){:target="_blank"}, [Wikipedia-XTools](https://xtools.wmflabs.org/){:target="_blank"}
##### Timestamp: 11/15/2018
##### [View Data (104 KB)]({{ '/assets/datasets/2.1.xlsx' | relative_url }})
