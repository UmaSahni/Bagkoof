# Bagkoof API Documentation

### Introduction

The Bagkoof API provides Authetication and products api information. It is designed for developers who need access to products data for their applications.

Getting Started
To get started with the Weather API, you need to sign up for an API key. You can obtain your API key by signing up on our website.

Authentication
The Weather API uses API keys for authentication. Include your API key in the request header as follows:

makefile
Copy code
Authorization: Bearer YOUR_API_KEY

---

# API Endpoints

## Get all products data

/bags [GET] --> Get by default 15 products

### Parameters

- limit (optional)  
`http://localhost:8080/bags?limit=30`

- Price sort (optional)  
   - asc --> Ascending order 
   - desc --> Descending order
`http://localhost:8080/bags?sort=desc`

- Page (optional)  
`http://localhost:8080/bags?page=2`

- category (optional)  
`http://localhost:8080/bags?category=Sling Bag`

- material (optional)
`http://localhost:8080/bags?material=Polyester`

- design (optional)
`http://localhost:8080/bags?design=Graphic Print`
