from rest_framework import serializers
from WikiApp.models import Pagina

#serializar de la busqueda

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pagina
        fields = ('__all__')