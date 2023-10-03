
# beholder

Beholder is an application made as a hobby. It serves as an Nmap scanner application, abstracting the terminal into an interface

The main purpose of this repository is to have FrontEnd and BackEnd sample projects in Node and React, along with their respective architectures, for a simplified and convenient personal use. Furthermore, cool interfaces and methods were implemented so that the flow could be visualized within the proposed architecture, in addition to being able to be modified at will with relative ease.

---

To run this project, it is necessary to install NMAP on the system. This is an official network and systems mapping tool. Download the appropriate version and model of the tool at the following Link:

- https://nmap.org/download.html

Afterwards, the command 'npm install' or similar must be run in both FrontEnd and BackEnd projects.

Having everything installed, it is possible to run the application with the executable files 'beholder-server-exe' and 'beholder-client-exe' available in the project files.

Likewise, it is possible to individually run projects via Terminal using 'npm run server' and 'npm run beholder' respectively in BackEnd and FrontEnd projects.

Technologies introduced:

- React
- Electron
- Sass
- Node Express
- Nmap

---

![image](https://github.com/Henrique-Bidarte/beholder/assets/134324510/79fab28d-a379-43fb-8f89-225acc50b58a)


![image](https://github.com/Henrique-Bidarte/beholder/assets/134324510/c47f60fb-83c9-4553-9531-5381d7d35821)

- Loudness measurement serves to determine the level of attention to be drawn to the Scanner. Higher levels make it easier for the target to detect the Scanner's action. Lower levels are more cautious, but tend to take exponentially longer.

- The Aggressive Scan tag determines a type of action that executes methods and scripts on the target in order to reveal sensitive information such as the Operating System where the Domain operates. It is a noisy action and can cause instability in targets hosted on fragile systems. It can also use Loudness settings, although they are not as efficient.

---

* Loudness Display
  
![Loudness](https://github.com/Henrique-Bidarte/beholder/assets/134324510/8964b5dc-5fc7-47c8-ab16-82b94cc8b1f3)

* Agressive Scan Display
  
![Agressive](https://github.com/Henrique-Bidarte/beholder/assets/134324510/5238efc0-51df-4d27-a696-9fb008106f8a)

