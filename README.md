# Game Mob Spawning System

This system adjusts the density of enemies ("mobs") based on a hidden **Difficulty Rating (DR)** assigned to each player. DR ranges from 1 to 10 and evolves as you play.

## Core Concept: Player "Difficulty Rating" (DR)

Each player has a hidden DR that directly influences mob density.

### Increases When:
- Completing missions with higher-DR players.
- Finishing levels on harder difficulties (e.g., Legend mode).

### Decreases When:
- Dying in solo play.
- Not playing for 7+ days (DR decays by -1/day).

## Mob Calculation Formula

- **Base mob count:** Fixed per level (e.g., 10 mobs).
- **Group Average DR Calculation:**

```
Mob Count = Base × Average Group DR
```

- **Example:**

```
3 players with DR 8 and 1 newbie with DR 2:
Avg DR = (8 + 8 + 8 + 2) / 4 = 6.5
Mobs  = 10 × 6.5 = 65
```

## Key Mechanics

### Dynamic Group Scaling
- **Mechanic:** New players instantly adjust the group’s average DR, causing mobs to respawn to match the new average.
- **Example:**

```
When a DR 2 player joins a DR 8 group, the average DR drops,
reducing the number of mobs. If that player leaves, the mob count
readjusts upward.
```

### Saves & Progression
- **Saves:** Only your personal DR is stored.
- **Reloading:**
  - **Solo play:** Mobs spawn based on your saved DR.
  - **Group play:** Mobs are recalculated using the current group's average DR.

### Randomization (Seed System)
- Each level generates a random seed (a hidden number) when created.
- **Effect:** Adds ±20% variance to the mob count (e.g., 60 mobs ±12).
- **Reset:** Seeds reset when players join/leave or when levels are reloaded.

## Why Newbies Reduce Mob Count

- **Mechanic:** Low-DR players lower the group’s average DR, resulting in fewer mobs.
- **Example:**

```
A group of DR 8 experts with one DR 2 newbie sees the mob count drop
(from 80 mobs to 65 mobs) due to the lower overall average.
```

## Post-Mission DR Growth

After completing a mission with higher-DR players, your DR increases as follows:

```
Your New DR = Old DR + (Max Group DR × 0.3)
```

- **Example:**

```
A DR 2 player finishing a mission with a DR 8 group:
New DR = 2 + (8 × 0.3) = 4.4
```

## Key Takeaways

- **Personal DR:** Reflects your skill and experience, not your gear or stats.
- **Dynamic Balancing:** Group mob counts adjust based on the collective DR.
- **Progress Preservation:** Solo saves keep your DR constant, while group play recalculates it.
- **Randomness:** The seed system introduces a slight unpredictability (±20% variance).

## Why This Works

- **Fairness for Newbies:** Allows inexperienced players to join expert groups without being overwhelmed.
- **Challenge for Experts:** High DR players face tougher challenges, even in solo play.
- **Transparency:** The math is clear and the small random element keeps gameplay engaging without hidden complexities.
