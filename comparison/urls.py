from django.urls import path
from comparison.views import *

urlpatterns = [
    path('', home, name='home'),
    path('spotify/login/', spotify_login, name='spotify_login'),
    path('spotify/redirect/', spotify_callback, name='spotify_callback'),
    path('logout/', logout_view, name='logout_view'),
    #path('playlists/', playlists, name='playlists'),
]