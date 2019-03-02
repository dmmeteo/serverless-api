# -*- coding: utf-8 -*-
import os


def hello(event, context):
    version = os.uname().version
    return {
        'status': 200, 
        'body': 'Lambda executed successfully! %s' % version
    }

