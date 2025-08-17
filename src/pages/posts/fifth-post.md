---
layout: '@/templates/BasePost.astro'
title: My new favorite API 
description: A quick introduction to FastAPI, a modern Python framework for building fast, secure, and scalable APIs.
pubDate: 2025-08-11T00:00:00Z
imgSrc: '/assets/images/post/fastapi.png'
imgAlt: 'Image post 2'
---

<style>
  body{
    background-color: #06070d !important;
  }
</style>

## 📌 What is it?
[FastAPI](https://fastapi.tiangolo.com/) is a **Python framework** for building fast, secure, and easy-to-use APIs.  
It’s built on **Starlette** (for web performance) and **Pydantic** (for data validation).

---

## ⚡ Key Features

- **High performance**: comparable to Node.js and Go.  
- **Auto docs**: generates Swagger (`/docs`) and ReDoc (`/redoc`) instantly.  
- **Data validation** with Pydantic: automatic type conversion and checks.  
- **Async/await support**: handle many requests concurrently.  
- **Modern typing**: uses Python `type hints` for clearer, safer code.  

---

## 📝 Basic Example

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    age: int

@app.post("/users/")
def create_user(user: User):
    return {"msg": f"User {user.name} created ✅"}
```


## ✅ Pros

- Easy to learn if you know Python.

- Fast and highly scalable.

- Growing ecosystem.

## ⚠️ Cons

- Less mature than Django or Flask.

- For very small apps, Flask can be simpler.

## 🎯 Conclusion

FastAPI is perfect for modern, scalable APIs in Python.
If you want speed, simplicity, and automatic documentation, it’s one of the best choices today. 🚀