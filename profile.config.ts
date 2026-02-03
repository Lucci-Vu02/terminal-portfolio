<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vu Kieu Phuong | Terminal Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      margin: 0;
      font-family: "Courier New", monospace;
      background: #0d1117;
      color: #c9d1d9;
    }
    .terminal {
      max-width: 900px;
      margin: 40px auto;
      padding: 20px;
    }
    .prompt {
      color: #58a6ff;
    }
    .command {
      color: #c9d1d9;
    }
    .output {
      margin: 6px 0 16px;
      white-space: pre-line;
    }
    .cursor {
      display: inline-block;
      width: 10px;
      background: #c9d1d9;
      animation: blink 1s infinite;
    }
    @keyframes blink {
      50% { opacity: 0; }
    }
    .light {
      background: #f6f8fa;
      color: #24292f;
    }
    .light .prompt {
      color: #0969da;
    }
  </style>
</head>
<body>
  <div class="terminal" id="terminal">
    <div class="output">
Welcome to Vũ Kiều Phương's portfolio

Type 'help' to see available commands
    </div>

    <div>
      <span class="prompt">$</span>
      <span class="cursor"></span>
    </div>
  </div>

  <script>
    const terminal = document.getElementById("terminal");

    const commands = {
      help: `
Available commands:

- about      : Show personal information
- experience : Show work experience
- skills     : List professional skills
- certs      : Show certifications
- contact    : Show contact information
- clear      : Clear terminal
- theme      : Toggle light/dark mode
      `,

      about: `
Name        : Vu Kieu Phuong (Lucci)
Year of birth: 2002
Education   : International School – Vietnam National University, Hanoi

Background  :
- Accounting & Finance
- Basic IT knowledge

Current role:
- Junior Project Manager at an engineering company

Feel free to contact me if you need anything.
      `,

      experience: `
- Junior Project Manager
  Yamaguchi Vietnam JSC

- Business Development Intern
  FPT IS
      `,

      skills: `
- Customer Insight
- Research Skills
- Analytical Skills
- Project Management
      `,

      certs: `
- Google Data Analytics (2024)
- Business Analyst Foundation (2023)
- IELTS 6.5 (2021)
      `,

      contact: `
Email   : vukieuphuong98@gmail.com
Phone   : 0818 880 768
GitHub  : https://github.com/Lucci-Vu02
Facebook: https://facebook.com/kieuphuong.vu.9802
      `
    };

    let isLight = false;

    document.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const input = prompt("Enter command:");
        if (!input) return;

        const cmd = input.trim().toLowerCase();

        if (cmd === "clear") {
          terminal.innerHTML = `
            <div class="output">
Welcome to Vũ Kiều Phương's portfolio

Type 'help' to see available commands
            </div>
            <div>
              <span class="prompt">$</span>
              <span class="cursor"></span>
            </div>
          `;
          return;
        }

        if (cmd === "theme") {
          isLight = !isLight;
          document.body.classList.toggle("light");
          return;
        }

        const output = commands[cmd] || "Command not found. Type 'help'.";

        const block = document.createElement("div");
        block.innerHTML = `
          <div>
            <span class="prompt">$</span>
            <span class="command">${cmd}</span>
          </div>
          <div class="output">${output}</div>
        `;
        terminal.insertBefore(block, terminal.lastElementChild);
        window.scrollTo(0, document.body.scrollHeight);
      }
    });
  </script>
</body>
</html>

