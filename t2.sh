PROJECT_ID=trustready
SA=github-actions@$PROJECT_ID.iam.gserviceaccount.com

# Cloud Build + Storage + Service Usage
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA" \
  --role="roles/cloudbuild.builds.editor"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA" \
  --role="roles/storage.objectAdmin"          # bucket R/W

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA" \
  --role="roles/serviceusage.serviceUsageConsumer"
