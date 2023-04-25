Spotify Playlist Comparison App
Developed by Zeke Palmer, Colin Ruiz, and Roger Kutyna for Clark University CSCI 250 - Software Engineerin

This app will allow for the user to input two spotify playlists and see what songs are common in both. Users will have the ability to log in with their
spotify accounts, giving the app access to their library. After logging in, users will be brought to a page with a button that reads 'Calculate Similarity'
and a drop down box on either side of the page, along with a button to log out in the top right. The drop down boxes automatically fill with the playlists
in the users library as options, so that users may easily compare two playlists within their library. If users would like to compare different playlists, 
then there is also an 'Other' option in the drop down list that can be selected. Upon selecting 'Other' an input box will appear below the drop down box,
where users can enter a playlist link or playlist ID and compare that playlist with either one from the drop down list or another input playlist on the 
other side.

When a user selects two playlists to compare, they can hit the 'Calculate  Similarity' button, which will then submit the two forms, retrieve the data
from the playlists, then update the page with the two cover art pictures for the playlists, a message displaying the % similar the two playlists are,
a numerical value of how many songs are in both playlists, and a list of the songs that are in both playlists. The user can then choose to try comparing 
other playlists as many times as they would like. If only one playlist is entered, or an invalid playlist link is entered, then a message indicating that
two valid playlists must be entered will appear.

This app was developed using python, html, css, and javascript. It is a Django app and uses Spotify for Developers, as well as the Spotipy API, Bootstrap, 
JSON, and jQuery. We developed this app by following the Agile methodology.

