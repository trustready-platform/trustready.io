#!/usr/bin/bash
PROJECT_ID=trustready
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format="value(projectNumber)")
POOL=github-pool
PROVIDER=github-provider
SA=github-actions@$PROJECT_ID.iam.gserviceaccount.com

# create the workload-identity pool & provider
gcloud iam workload-identity-pools create $POOL \
  --project=$PROJECT_ID --location="global" --display-name="GitHub pool"

gcloud iam workload-identity-pools providers create-oidc $PROVIDER \
  --project=$PROJECT_ID --location="global" --workload-identity-pool=$POOL \
  --display-name="GitHub provider" --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
  --issuer-uri="https://token.actions.githubusercontent.com"

# allow your repo to impersonate the service account
gcloud iam service-accounts add-iam-policy-binding $SA \
  --project=$PROJECT_ID \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$POOL/attribute.repository/MustafaAamir/trustready.io"

# export the provider resource name
export WORKLOAD_IDENTITY_PROVIDER=projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$POOL/providers/$PROVIDER
echo $WORKLOAD_IDENTITY_PROVIDER
#
