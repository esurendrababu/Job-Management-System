from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer
from collections import defaultdict

#  GET (list jobs) and POST (create job) in one view
@api_view(['GET', 'POST'])
def job_list_create(request):
    if request.method == "GET":
        jobs = Job.objects.all()
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

#   Retrieve jobs by experience level
@api_view(['GET'])
def jobs_by_experience(request, years):
    jobs = Job.objects.filter(experience=years)
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)

#   Group jobs by experience level
@api_view(['GET'])
def group_jobs_by_experience(request):
    jobs = Job.objects.all()
    grouped_jobs = defaultdict(list)

    for job in jobs:
        grouped_jobs[job.experience].append(JobSerializer(job).data)

    return Response(grouped_jobs)
