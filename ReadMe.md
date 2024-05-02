# Pyrite Cloud Redeploy Action

This action is used to redeploy the deployment on Pyrite Cloud. 
This action can be used after the docker image push step in your Github Workflow.


## Example

```yaml
- name: Redeploy Deployment
    uses: PyriteCloud/redeploy-action@main
    with:
        api-key: ${{ secrets.PYRITE_API_KEY }}
        deployment-id: ${{ secrets.PYRITE_DEPLOYMENT_ID }}
```

Add your `api-key` and`deployment-id` in Github Secrets and refer them in the Workflow.
- `PYRITE_API_KEY`
- `PYRITE_DEPLOYMENT_ID`