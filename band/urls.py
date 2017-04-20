from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from band import views

urlpatterns = patterns('',
                     url(r'^$', 'band.views.all_bands'),
                     url(r'^(?P<band_id>\d+)/$', 'band.views.band'),
                     url(r'^api/(?P<pk>[0-9]+)/$', views.BandDetail.as_view()),
                     )

# Allows a longer url of sorts, must clarify
urlpatterns = format_suffix_patterns(urlpatterns)
