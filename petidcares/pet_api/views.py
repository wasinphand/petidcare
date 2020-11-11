from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from pet_api.models import User, Pet
from rest_framework import status
from django.http import JsonResponse

from pet_api import serializers
from rest_framework import generics
from pet_api.serializers import PetSerializer

# Create your views here.Pet


class PetView(APIView):
    serializer_class = serializers.PetSerializer
    queryset = Pet.objects.all()

    def get(self, request, format=None):
        return Response({'message': 'querry command'})

    def post(self, request):
        # print(request.data)
        serializer = self.serializer_class(data=request.data)
      #  print(request.data)
        if(serializer.is_valid()):

            p = Pet()
            p.petID = request.data['petID']
            p.name = request.data['name']
            p.age = request.data['age']
            p.petType = request.data['petType']
            p.citizenID = User.objects.get(
                citizenID=request.data['citizenID'])
            p.picture = request.data['picture']
            p.save()
            return Response({'message': 'success'})
        print('error ', serializer.errors)
        return Response({'message': 'fail'})

    # def patch(self, request, pk, format=None):
    #   #  pk = self.kwargs.get('pk')
    #     print("this is pkkkk", pk)
    #     a = self.get_object(pk)
    #     # set partial=True to update a data partially
    #     serializer = PetSerializer(a, data=request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(code=201, data=serializer.data)
    #     return Response(code=400, data="wrong parameters")


class PetDetailView(APIView):
    def get_object(self, pk):
        try:
            return Pet.objects.get(pk=pk)
        except Pet.DoesNotExist:
            pass

    def get(self, request, pk, format=None):
        a = self.get_object(pk)
        serializer = PetSerializer(a)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        a = self.get_object(pk)
        serializer = PetSerializer(a, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        a = self.get_object(pk)
        a.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PetListView(APIView):
    queryset = Pet.objects.all()

    def get(self, request, format=None):

        mypet = self.request.GET.get('owns', '')
        mypet = bool(mypet)
        if(mypet):
            return Response({'pet': list(Pet.objects.select_related('citizenID').filter(citizenID="1110300241396").values())})
        return Response({'pet': list(Pet.objects.all().values())})
