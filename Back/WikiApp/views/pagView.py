from django.shortcuts import render
from rest_framework import viewsets
from WikiApp.models.pag import Pagina
from WikiApp.serializers.serializerPag import PageSerializer
# Create your views here.

#vista
class BusquedaViewsets(viewsets.ModelViewSet):
    queryset = Pagina.objects.all()
    serializer_class = PageSerializer



