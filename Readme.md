# JWT mock auth provider

This API creates JWT-tokens from arbitrary content posted in body signed with PRIVATE_KEY from environment variables.

## API

```
POST /auth HTTP/1.1
Host: jwt-mock-auth.cluster-edge.eapp.fi
Content-Type: application/json
Cache-Control: no-cache

{
	"id": 1
}
```

**Response**
```
{
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTA0Mzg4NDI0fQ.2A0xOy8m0qnHnIGlKuDPBAY71X9WJMLrariiQKnnOXb8U6hxs09w5TClePCyawVel6lOnaakuR9ugjzcYWVCI9QC-SrTFx97yM7KS7gDgZyfObti5YuWaiHccLwnp1aBDZkf-s-2JfVcQ4caeDVJDBntipDRstSXV0aCoHN7iWs"
}
```
**Payload of that token:**
```
{
  "id": 1,
  "iat": 1504388424
}
```
