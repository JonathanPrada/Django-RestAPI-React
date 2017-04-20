from rest_framework import serializers
from models import Band


# Makes our model data into an API
class BandSerializer(serializers.ModelSerializer):
    class Meta:
        # Tell it which model
        model = Band
        fields = "__all__"

