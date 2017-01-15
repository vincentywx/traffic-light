# traffic-light

### 1 Introduction
You are required to provide the code for an application that simulates a set of traffic lights at
an intersection.

The traffic lights are designated (N, S) and (E, W) like a compass.
### 2 Requirements
When switching from green to red, the yellow light must be displayed for 30 seconds prior to
it switching to red. The lights will change automatically every 5 minutes.

You're not required to optimize the solution, just focus on a functional approach to
requirements.

Provide the output for the light changes which occur during a given thirty minute period.
You must provide unit tests for all logic.
Create a repo on bitbucket/github and provide the link as well as instructions on how to run.

### 3 How to use:
#### 3.1 for the people who know the command line 
    $git clone https://github.com/vincentywx/traffic-light.git
    $cd traffic-light
    $node traffic-light.js
    
   How to install node?
    https://nodejs.org/en/download/package-manager/
    
#### 3.2 for the people who don't know the command line 
   1. open the link in the browser
   
   2. https://github.com/vincentywx/traffic-light
   
   3. download the repo. 
   
   4. open your download file.
   
   5. open the index.html by your browser.
   
   6. could open google chrome inspect, console tag to see traffic light status. 
   
   in order to save your time, I change the default intersection time as 4 seconds for red to green or green to red, green to 
   yellow interaction is 1 second. If you really want to change the intersection just like the requirement, open
   the "traffic-light.js", find the variable "change_order", and change the seconds to what you want.
   
### 4 how do I do it.
 javascript object programming, build a object name "traffic_light",
 traffic_light have 3 function which are use to change its light status.
 
 use a simple iterator and settimeout.
 
 HTML, bootstrap css for the front end, jquery to control the light.
 
### 5 further improvement:


### 6 take it as you want, but please give me a star, thanks.