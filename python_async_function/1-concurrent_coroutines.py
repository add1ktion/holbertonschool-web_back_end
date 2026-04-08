#!/usr/bin/env python3
"""Async generator."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Wait for n random delays and return them in a list."""
    delays = []
    for tasks in asyncio.as_completed([wait_random(max_delay) for _ in range(n)]):
        delay = await tasks
        delays.append(delay)
    return delays
