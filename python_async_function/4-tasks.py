#!/usr/bin/env python3
"""Async generator."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Execute n tasks and return their results in a list."""
    delays = []
    for tasks in asyncio.as_completed([task_wait_random(max_delay)
                                       for _ in range(n)]):
        delay = await tasks
        delays.append(delay)
    return delays
