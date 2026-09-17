// Project summaries and evidence are maintained alongside the linked case studies.
const projects = [
    {
        "title": "30 MHz Class-E Inverter",
        "date": "Research · 2026",
        "tags": [
            "power",
            "research"
        ],
        "image": "./images/classE_schematic.png",
        "imageFit": "contain",
        "description": "Design, PCB layout, high-frequency measurements, and iterative tuning; measured 84% efficiency at 350 W.",
        "link": "projects/classE-inverter.html"
    },
    {
        "title": "CMOS Differential Amplifier Tapeout",
        "date": "March–May 2026",
        "tags": [
            "analog",
            "course"
        ],
        "image": "./images/amplifier/layout.png",
        "imageFit": "contain",
        "description": "Bias and device sizing, gain–power–swing tradeoffs, and DRC/LVS-clean layout. Silicon testing pending.",
        "link": "projects/differential-amplifier.html"
    },
    {
        "title": "Leslie Speaker 'Pedal'",
        "date": "December 2025",
        "tags": [
            "power",
            "course"
        ],
        "image": "./images/leslie_box.jpg",
        "description": "Class-D audio, boost and SEPIC supplies, measured ripple, and filter response in a working electronics assembly.",
        "link": "projects/leslie-speaker.html"
    },
    {
        "title": "Three-Phase LLC Converter Design & Analysis",
        "date": "June–August 2026",
        "tags": [
            "power",
            "industry",
            "software"
        ],
        "image": "./images/circuits/full-bridge-llc.svg",
        "imageFit": "contain",
        "imageAlt": "Representative single-phase full-bridge LLC schematic",
        "description": "Schneider internship: device and resonant-tank selection, PLECS loss models, and Python analysis automation.",
        "link": "projects/schneider-converter.html"
    },
    {
        "title": "RISC-V Processor Optimization",
        "date": "February–May 2025",
        "tags": [
            "digital",
            "course",
            "software"
        ],
        "image": "",
        "cover": "5-stage RISC-V",
        "description": "Built and debugged a five-stage processor, then reduced MNIST inference runtime by 80% through custom instructions and cache optimizations.",
        "link": "projects/risc-v.html"
    },
    {
        "title": "Compact Magnetic-Cored Inductors",
        "date": "Research",
        "tags": [
            "power",
            "research"
        ],
        "image": "./images/inductor-simulations.png",
        "imageFit": "contain",
        "imageAlt": "Inductor temperature and magnetic flux density simulation plots",
        "description": "Maxwell/Icepak design comparison with less than 20% Q degradation; second-author IEEE OJPEL publication.",
        "link": "projects/magnetic-inductors.html"
    },
    {
        "title": "Resonant Converter for Fluorescent Lamp Drive",
        "date": "October 2025",
        "tags": [
            "power",
            "course"
        ],
        "image": "./images/lamp_wave1.jpg",
        "description": "Resonant-tank design, component-loss estimates, and measured lamp ignition and steady-state waveforms.",
        "link": "projects/resonant-converter.html"
    }
];

const filterCategories = [
    {
        "id": "all",
        "label": "all"
    },
    {
        "id": "power",
        "label": "power electronics"
    },
    {
        "id": "analog",
        "label": "analog IC"
    },
    {
        "id": "digital",
        "label": "digital"
    },
    {
        "id": "research",
        "label": "research"
    },
    {
        "id": "industry",
        "label": "industry"
    },
    {
        "id": "course",
        "label": "course"
    },
    {
        "id": "software",
        "label": "software"
    }
];
