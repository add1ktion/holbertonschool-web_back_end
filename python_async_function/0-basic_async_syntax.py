#!/usr/bin/env python3
"""Async generator."""

import asyncio
import random

async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay from 0 to 10 seconds and return it."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
