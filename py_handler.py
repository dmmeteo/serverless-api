# -*- coding: utf-8 -*-


def hello(event, context):
    return {
        "statusCode": 200,
        "body": "<html><body><p>Hello from python3.7!</p></body></html>",
        "headers": {
            "Content-Type": "text/html"
        }
    }
