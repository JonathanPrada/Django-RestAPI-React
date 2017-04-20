from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^$', 'music.views.index'),
    url(r'^band/', include('band.urls')),
    url(r'^admin/', admin.site.urls),
]
