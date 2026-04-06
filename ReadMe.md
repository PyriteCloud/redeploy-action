# Pyrite Cloud Redeploy Action

This action is used to redeploy the deployment on Pyrite Cloud. 
This action can be used after the docker image push step in your Github Workflow.


## Example

```yaml
- name: Redeploy Deployment
    uses: PyriteCloud/redeploy-action@v1
    with:
        token: ${{ secrets.PYRITE_TOKEN }}
```

Add your `token` in Github Secrets and refer them in the Workflow.
- `PYRITE_TOKEN`