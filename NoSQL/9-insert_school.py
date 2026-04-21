#!/usr/bin/env python3
"""
Inserts a new document in the collection school.
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in the collection school.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
