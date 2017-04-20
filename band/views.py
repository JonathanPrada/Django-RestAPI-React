from django.shortcuts import render
# Used to query the database
from models import Band
from rest_framework import generics
from serializers import BandSerializer


# View for all bands
def all_bands(request):
    return render(request, 'band/all_bands.html')


# View for a single band
def band(request, band_id):
    # When you set in the url the id, return the band based on that
    band = Band.objects.get(pk=band_id)
    return render(request, 'band/band.html', {'band': band})


# Shows the API for a single band
class BandDetail(generics.RetrieveUpdateDestroyAPIView):
    # Get all the bands
    queryset = Band.objects.all()
    # Turn the API data into json
    serializer_class = BandSerializer
