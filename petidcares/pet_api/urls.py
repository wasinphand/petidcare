from django.urls import path
from pet_api import views

urlpatterns = [
    path('pet/', views.PetView.as_view()),
    path('pet/<str:pk>/', views.PetDetailView.as_view()),
    path('user/', views.PetListView.as_view())
]
