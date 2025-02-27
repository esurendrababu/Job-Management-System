from django.urls import path
from .views import job_list_create, jobs_by_experience, group_jobs_by_experience

urlpatterns = [
    path('', job_list_create, name="job-list-create"),  
    path('experience/<int:years>/', jobs_by_experience, name="jobs-by-experience"),
    path('grouped/', group_jobs_by_experience, name="group-jobs-by-experience"),
]
