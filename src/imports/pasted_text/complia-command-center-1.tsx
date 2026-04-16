[MANDATORY SYSTEM DIRECTIVE: ABSOLUTE STRICT COMPLIANCE REQUIRED]
You are an elite, world-class Enterprise UI/UX Frontend Architect. Your assignment is to build a 100% complete, fully functional, multi-page Single Page Application (SPA) prototype using React and Tailwind CSS for "COMPLIA Command Center". 
This is NOT a simple single-page dashboard. It is a LIVE, mission-critical RegTech & DeepTech platform used by global conglomerates for supply chain compliance, IoT surveillance, and automated SAP ERP sanctioning. 

ABSOLUTE RULES:
1. YOU MUST IMPLEMENT A FULL A-TO-Z APPLICATION. Build a Left Sidebar Navigation that uses React State to switch between 5 DISTINCT PAGES. Do not truncate or omit any page.
2. ZERO "Lorem Ipsum" or generic placeholders. Use ONLY the highly specific fictional data provided below.
3. All text MUST be 100% in English.
4. Visual Identity: Tech-Savvy Dark Theme (Gunmetal/Obsidian #0B0F19 to #111827) with frosted glassmorphism panels. Accent colors: Cyber Blue (#00D4FF to #2563EB) for normal UI, and Crimson Red (#EF4444) for critical alerts.
5. THE GLOBAL STATE TOGGLE: You MUST implement a master toggle button in the Top Header: [ NORMAL STATE ] vs [ CRITICAL INCIDENT STATE ]. Toggling this MUST dynamically change the data, UI colors, and text across ALL 5 PAGES simultaneously.

[1. GLOBAL APP SHELL & BRANDING - PERSISTENT ACROSS ALL PAGES]
- Top-Left Header: The word "COMPLIA Command Center" must be bold, glowing, and heavily emphasized.
- Top-Right Header: Operator Profile ("Operator: Alex Mercer | APAC Region") and the Global State Toggle.
- Left Sidebar (Menu): Must contain 5 clickable tabs that change the main view: [1. Global Overwatch] [2. AI Rule-Gen] [3. Live Sentinel] [4. FleetOS Admin] [5. ERP Sanction & CAPA].
- Footer: A fixed bottom bar that explicitly states: "Powered by Britannia Inc. | Global API Gateway: SECURE".

[2. THE 5-PAGE ARCHITECTURE (Build all 5 as switchable components based on the active tab)]

--- PAGE 1: GLOBAL OVERWATCH (Macro Supply Chain Map) ---
- Layout: A massive geographic data grid or stylized map visualization focusing on the APAC region.
- KPI Cards: "Total Global Vendors: 1,204", "Active Sentinel Devices: 14,021", "Global Compliance Rate: 98.4%".
- Normal State: Target Vendor "PT. IndoSteel Fabrication (Jakarta)" shows a Trust Index gauge of "92/100 (Safe)".
- Critical State: Screen pulses red. Target Vendor Trust Index plummets to "24/100 (Critical Breach)".

--- PAGE 2: AI RULE-GEN & COMPLIANCE CONFIGURATOR (Onboarding) ---
- Layout: Split screen. Left side for input parameters, right side for AI output.
- Input Section: "Target: PT. IndoSteel Fabrication". APIs Crawling: "Indonesia Labor Law Act No.13/2003", "EU CBAM", "Britannia ESG Guidelines".
- Normal State (Generated Rule-Set):
  - Rule ID #401: "Max 54 Work Hours/Week (Active)"
  - Rule ID #402: "Heavy Metals Wastewater < 0.05ppm (Active)"
  - Rule ID #403: "Zero Child Labor strictly enforced via Bio-Gate (Active)"
- Critical State: Rules 401 and 402 flash red with text: "RULE BREACHED - EVIDENCE CAPTURED".

--- PAGE 3: LIVE SENTINEL MONITOR (The Core Hardware Observation Deck) ---
- CRITICAL REQUIREMENT: Inside this page ONLY, implement a Layout Toggle: [ Panorama View ] vs [ Modular Grid View ].
- Normal State (Cyber Blue): 5 PIP (Picture-in-Picture) Hardware Feeds tightly stacked:
  1. Vision AI: "Scanning. Safety Gear 100%."
  2. Bio-Gate: "Shift 1 Entry Normal."
  3. Eco-Sentinel: Line chart showing "pH: 7.2 (Safe)".
  4. Vital-Band: Scatter plot "Avg HR: 78 BPM. Falls: 0."
  5. Trace-Lock: "Container #IDN-884 Seal Intact."
- Critical State (Crimson Red Pulsing):
  1. Vision AI (Infrared style): "ALERT: Illegal Night Shift Detected at 02:00 AM."
  2. Bio-Gate: "OFFLINE - Power maliciously severed."
  3. Eco-Sentinel (Spiking red chart): "Toxic Discharge: 0.85ppm (THRESHOLD EXCEEDED)."
  4. Vital-Band: Flashing "SOS - Worker Cardiac Anomaly Detected."
  5. Trace-Lock: "Shipment HALTED."

--- PAGE 4: FleetOS TELEMETRY & DEVICE HEALTH (Infrastructure Admin) ---
- Layout: Hexagonal Grid Map or complex server-rack layout representing device nodes in the Jakarta factory.
- Data: "Global OTA Firmware Sync: 100%". "Mass Biometric Sync: Active (Zero-Knowledge Hash: 245,192 IDs)".
- Normal State: "Anti-Tampering Engine: Standby. All nodes online."
- Critical State: A massive error log appears: "🚨 TAMPER DETECTED: Bio-Gate ID-44 voltage dropped to 0 at 01:58 AM. Intentional evidence destruction confirmed. Cross-validating with Vision AI."

--- PAGE 5: ERP SANCTION CONSOLE & CAPA RESOLUTION (Post-Incident) ---
- Layout: Document review portal combined with an API terminal log.
- Normal State: Terminal shows "SAP S/4HANA Status: LINKED & ACTIVE. Supply chain flowing nominally." No CAPA documents.
- Critical State:
  - Center Modal/Banner: "🚨 SAP ERP AUTO KILL-SWITCH ENGAGED 🚨. Action: New POs PERMANENTLY FROZEN. Material Outbound: BLOCKED."
  - Subcontractor Evidence Portal: Show uploaded mock files from PT. IndoSteel: "Resolution_Report_v2.pdf", "Manager_Dismissal_Form.pdf", "Fine_Receipt.jpg".
  - Hardware Evidence Review Box: "Cross-validation: Tamper Log + Night Vision Video + Wastewater Sensor Data confirmed."
  - Action Buttons (Bottom): Red Button "REJECT CAPA & TERMINATE VENDOR". Blue Button (Disabled state) "APPROVE CAPA & MANUAL ERP UNLOCK".

[FINAL EXECUTION COMMAND]
You must write the complete, monolithic React code containing the state hooks for BOTH the 5-page sidebar navigation (`activeTab`) AND the global Normal/Critical toggle (`isCritical`). Every single detail, hardware name, fictional data point, and Britannia Inc. branding must be visible. The application must look overwhelming, hyper-professional, and flawlessly engineered. Output the code immediately. Do not summarize. Do not truncate.