# -*- coding: utf-8 -*-


def hello(event, context):
    return {
        'status': 200, 
        'body': 'Lambda executed successfully!'
    }

