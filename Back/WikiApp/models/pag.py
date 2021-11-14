from django.db import models


#modelo de la pagina que guardara las busquedas que haga el usuario.
class Pagina(models.Model):
    busqueda_pagina=models.CharField(max_length=220)