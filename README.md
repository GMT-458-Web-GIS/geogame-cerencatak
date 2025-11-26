# SHADOW LOCATE 

An interactive 3D geo-memory game built with HTML, CSS, JavaScript, and a rotatable 3D globe.
---

PLAY!: https://gmt-458-web-gis.github.io/geogame-cerencatak/
---

## Game Description

**Shadow Locate 3D** is a fast-paced geo-memory game where players briefly see a silhouette of a real-world region and, after it disappears, must quickly locate the region on a **3D rotatable globe**.
The goal is to survive as long as possible with **3 lives**, achieving high scores and unlocking harder challenges.

The game blends:
- visual memory,
- geography recognition,
- spatial reasoning, and
- quick decision-making.

It features an interactive **Geo Mascot** companion that reacts to your gameplay!

---

## How the Game Works (Game Progression)

1. **Splash Screen:** Enter your name to join the session leaderboard.
2. **Memorize:** A **silhouette** (country shape) is displayed on screen for **3 seconds**.
3. **Locate:** The silhouette fades out, and a **rotatable 3D globe** appears.
4. **Guess:** The player rotates the globe and **clicks** the location where they believe the silhouette belongs.
5. **Feedback:**
   - The game calculates the distance between the click and the real coordinates.
   - **Geo Mascot** reacts: Sad for wrong answers.

6. **Loop:** A new silhouette appears, and the cycle continues until lives reach 0.

---

## Temporal Component (Survival & Hard Mode)

Unlike a fixed timer, this is a **Survival Game**:
- The game tracks your **Total Survival Time**.
- **Hard Mode:** If you get **5 consecutive correct answers**, Hard Mode activates!
  - In Hard Mode, a strict **10-second timer** applies to each round.
  - If time runs out, you lose a life.

Every second matters, and high accuracy prevents Game Over.

---

## Spatial Component

Instead of a flat map, the game uses a fully interactive **3D globe** (powered by Globe.gl) that the player can:
- rotate freely,
- zoom in/out,

Real-world coordinates (Latitude/Longitude) are used to evaluate accuracy with the Haversine formula.

---

## Scoring System

Distance between the correct location and the player’s guess determines the score:

| Distance | Points | Result |
|---------|--------|--------|
| 0–600 km | +10 points | **PERFECT!** (Mascot Excited) |
| 600–2500 km | +5 points | **GOOD** |
| 2500+ km | -1 Life | **TOO FAR!** (Mascot Sad) |

- **Combo Bonus:** 5 correct guesses  Activates **Hard Mode**.
- **Celebration:** Reaching **100 Points** triggers a **Confetti Explosion**.
- **Hint System:** You can ask the mascot for a region hint (Cost: **-5 Points**).

---

## Lives

- Players start with **3 lives**.
- Guessing extremely far (wrong continent/region) removes a life.
- Running out of time (in Hard Mode) removes a life.
- When lives reach 0, the game ends.

---

## Number of Rounds

There is **no fixed number of questions**.
Players answer **as many rounds as possible** in the survival loop.
This ensures replayability and supports skill-based high scores.

---

## Silhouettes

Silhouettes are:
- real geographic shapes (Countries),
- acquired as png from internet,
- shown in white contrast for clarity,
- displayed for 3 seconds before disappearing.

These silhouettes are stored in an `/images/silhouettes/` folder.

---

## Technologies & Libraries

### **Frontend**
- HTML5
- CSS3 (Glassmorphism UI, CSS Animations)
- JavaScript (ES6+)

### **Libraries**
- **Globe.gl** (For 3D Globe rendering)
- **Canvas Confetti** (For visual effects)
- **Google Fonts** (Poppins font)
