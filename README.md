# SHADOW LOCATE   
An interactive 3D geo-memory game built with HTML, CSS, JavaScript, and a rotatable 3D globe.

---

##  Game Description

**Shadow Locate 3D** is a fast-paced geo-memory game where players briefly see a silhouette of a real world region and, after it disappears, must quickly locate the region on a **3D rotatable globe**.  
The goal is to score as many points as possible within the time limit by clicking the correct location on the globe.

The game blends:
- visual memory,
- geography recognition,
- spatial reasoning, and
- quick decision-making.

It fully meets the requirements of an interactive geo-game with both **spatial** and **temporal** components.

---

##  How the Game Works (Game Progression)

1. A **silhouette** (a cropped coastal shape, island, or landmass from anywhere in the world) is displayed on screen for **3 seconds**.
2. The silhouette fades out.
3. A **rotatable 3D globe** appears (built using a JS 3D globe library).
4. The player has **a few seconds** to rotate the globe, find the correct region, and **click** the location where they believe the silhouette belongs.
5. The game calculates:
   - the distance between the clicked location and the real coordinates,
   - the score based on accuracy,
   - combo bonuses (if enabled).
6. A new silhouette appears, and the cycle continues.
7. The goal is to collect as many points as possible within **60 seconds**.

The game becomes progressively faster and more challenging as the player scores more points.

---

##  Temporal Component

The game runs on a strict **60-second timer**.  
Players must quickly:
- memorize the silhouette,
- rotate the globe,
- and choose a location  
before time runs out.

Every second matters, and high accuracy yields higher points.

---

##  Spatial Component

Instead of a flat map, the game uses a fully interactive **3D globe** that the player can:
- rotate,
- zoom in/out,
- and click on to mark locations.

Real-world coordinates are used to evaluate accuracy.

---

## Scoring System

Distance between the correct location and the player’s guess determines the score:

| Distance | Points |
|---------|--------|
| 0–300 km | +10 points |
| 300–800 km | +7 points |
| 800–1500 km | +4 points |
| 1500+ km | +1 point |

- 3 consecutive high-accuracy guesses → **combo bonus**
- 5 consecutive high-accuracy guesses → **+2 seconds** time bonus

---

##  Lives 


- Players start with **3 lives**.
- Guessing extremely far from the correct region (e.g., >3000 km) removes a life.
- When lives reach 0, the game ends early.



---

##  Number of Rounds

There is **no fixed number of questions**.  
Players answer **as many rounds as possible** in the 60-second time window.

This ensures replayability and supports skill-based high scores.

---

##  Silhouettes

Silhouettes are:
- real geographic shapes  
- extracted from islands, coastlines, peninsulas, or unique landforms worldwide  
- shown in black for clarity  
- displayed for 3 seconds before disappearing  

These silhouettes are stored in an `/images/silhouettes/` folder.

---

##  Technologies & Libraries

### **Frontend**
- HTML5  
- CSS3  
- JavaScript 

### **3D Globe Library **
I will use one of these
- **Globe.gl** 
- Three.js  
- CesiumJS  
- Planetary.js  



---![9eb399d4-74c9-4706-8243-2f98ebf34a97](https://github.com/user-attachments/assets/ff30fde8-efdd-4770-9fc0-bf3bff0c5fc4)

