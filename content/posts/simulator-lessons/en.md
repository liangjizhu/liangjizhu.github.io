---
title: "Three things the simulator taught me"
excerpt: "Notes from six months of underwater-drone simulation with ROS2, C++ and Stonefish."
---

I joined Vortex NTNU in September expecting to write a lot of C++. I did. But the lessons that stuck were not the ones I was looking for.

## 1. Reality is noisier than the datasheet

The first time I compared a simulated stereo camera with a real one, the difference was almost funny. In the simulator, left and right frames were pixel-aligned. In the real world, synchronisation drifts, lenses are dirty, and lighting changes between two frames that are supposed to be "the same".

A simulator is not a lie, but it is a careful abstraction. The moment you forget that, you ship a pipeline that only works in Stonefish.

## 2. Logs are a feature

The bug that ate a week of my life was in a sonar driver. When the output looked unstable, my first instinct was to stare at code. What saved me, eventually, was adding a few boring lines:

```cpp
RCLCPP_INFO(this->get_logger(),
            "frame=%lu dt=%.3f ms dropped=%lu",
            frame_id, dt_ms, dropped);
```

Three numbers, printed on every frame. Suddenly the pattern was obvious — we were dropping frames every time a heavy topic republished. No amount of reading code would have matched two minutes of looking at numbers.

## 3. The team is part of the stack

A simulator is glue between people as much as between libraries. The perception people care about topic names and message timing. The control people care about latency. The mechanical team wants the CAD to match. Every "small refactor" that touches the interface has a social cost.

The lesson: whenever I change an interface, I write a one-paragraph message in the team channel explaining **what** changed, **why**, and what breaks. It has saved me more debugging time than any tool.

---

None of this is revolutionary. Most of it is probably in a book I have not read yet. But I had to learn it by doing, so I am writing it down here — partly for you, mostly for me.
