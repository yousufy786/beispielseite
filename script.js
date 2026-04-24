const data = {
  internet: { title: "Internet", options: {
    router_off: { text: "Router leuchtet nicht", desc: "Wahrscheinlich kein Strom.", steps: ["Stromkabel prüfen", "Router neu starten", "Andere Steckdose testen"], cls: "warning", note: "Wenn der Router weiter nicht leuchtet, Support kontaktieren." },
    all_devices: { text: "Alle Geräte ohne Internet", desc: "Problem liegt meist am Router oder Anbieter.", steps: ["Router neu starten", "Einige Minuten warten", "Anbieter auf Störung prüfen"], cls: "tip", note: "Liegt meist nicht am Computer." },
    one_device:  { text: "Nur ein Gerät betroffen", desc: "Problem liegt nur an diesem Gerät.", steps: ["WLAN prüfen", "Gerät neu starten", "Netzwerk neu verbinden"], cls: "tip", note: "Andere Geräte funktionieren? Router ist in Ordnung." }
  }},
  pc: { title: "Langsamer PC", options: {
    many_programs: { text: "Viele Programme geöffnet", desc: "Zu viele Programme verlangsamen den PC.", steps: ["Unnötige Programme schließen", "Browser-Tabs reduzieren", "PC neu starten"], cls: "tip", note: "Ein Neustart hilft oft schon deutlich." },
    no_restart:    { text: "Lange nicht neu gestartet", desc: "Leistung sinkt ohne regelmäßigen Neustart.", steps: ["PC neu starten", "Updates prüfen", "Temp-Dateien löschen"], cls: "tip", note: "Regelmäßiges Neustarten verbessert die Leistung." },
    still_slow:    { text: "Trotz Neustart langsam", desc: "Möglicherweise ein tieferes Systemproblem.", steps: ["Speicherplatz prüfen", "Autostart kontrollieren", "System-Updates installieren"], cls: "warning", note: "Wenn das Problem bleibt, System genauer prüfen." }
  }},
  drucker: { title: "Drucker", options: {
    off:        { text: "Nicht eingeschaltet", desc: "Drucker ist ausgeschaltet.", steps: ["Einschalten", "Stromkabel prüfen", "Steckdose testen"], cls: "tip", note: "Immer zuerst die Stromversorgung prüfen." },
    no_paper:   { text: "Kein Papier", desc: "Ohne Papier kein Druck möglich.", steps: ["Papier nachfüllen", "Fach einsetzen", "Druckauftrag neu starten"], cls: "tip", note: "Kleine Ursachen sind oft schnell lösbar." },
    connection: { text: "An, druckt aber nicht", desc: "Verbindung oder Einstellung fehlerhaft.", steps: ["Kabel prüfen", "Drucker neu verbinden", "Auftrag erneut senden"], cls: "warning", note: "Falls nötig, Treiber und Einstellungen kontrollieren." }
  }},
  bildschirm: { title: "Bildschirm", options: {
    off:   { text: "Monitor nicht eingeschaltet", desc: "Monitor scheint ausgeschaltet.", steps: ["Einschalten", "Stromkabel prüfen", "Steckdose kontrollieren"], cls: "tip", note: "Auf die Kontrolllampe achten." },
    cable: { text: "Kabel nicht angeschlossen", desc: "Loses Kabel unterbricht das Bildsignal.", steps: ["HDMI/VGA prüfen", "Kabel neu anschließen", "Anderen Anschluss testen"], cls: "tip", note: "Kabelprobleme sind eine häufige Ursache." },
    black: { text: "Bildschirm bleibt schwarz", desc: "Problem oft am PC oder Anschluss.", steps: ["PC neu starten", "Anderen Monitor testen", "Grafikanschluss prüfen"], cls: "warning", note: "Möglicherweise liegt ein Hardwareproblem vor." }
  }}
};

const optionBox = document.getElementById("optionBox");
const resultBox = document.getElementById("resultBox");

function selectProblem(id) {
  const { title, options } = data[id];
  optionBox.innerHTML = `<h2>2. Situation: ${title}</h2><div class="option-list">` +
    Object.entries(options).map(([k, o]) =>
      `<div class="option-item" onclick="showSolution('${id}','${k}', this)">${o.text}</div>`
    ).join("") + `</div>`;
  resultBox.innerHTML = `<h2>3. Lösung</h2><p>Wählen Sie eine Situation aus.</p>`;
}

function showSolution(id, key, element) {
    const items = document.querySelectorAll(".option-item");
    items.forEach(item => item.classList.remove("active"));
    element.classList.add("active");
  const { desc, steps, cls, note } = data[id].options[key];
  resultBox.innerHTML = `<h2>3. Lösung</h2><p>${desc}</p>` +
    `<ul>${steps.map(s => `<li>${s}</li>`).join("")}</ul>` +
    `<div class="${cls}"><strong>Hinweis:</strong> ${note}</div>`;
}