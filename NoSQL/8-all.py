#!/usr/bin/env python3
"""
Provides a utility function to interact with a MongoDB collection.
"""


def list_all(mongo_collection):
    """
    Lists all documents in a specific MongoDB collection.
    """
    return list(mongo_collection.find())
